$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('data/product.json',function(data){
      
     $('#search').css('margin-top','20px').css('margin-bottom','4px');
   
//     filter drop-down

// ------------------------filter out items for dropdown------------------------
        
        $('#filter').css('margin-top','20px').css('margin-bottom','4px');
        var filterTypes =  _.unique(_.map(data,function(val,ind,col){
            return val.type;
        }))
        _.each(filterTypes,function(val){
            $('<option>').text(val).appendTo('#filter');
        })
        
        
//----------------/filter out for button-------------------------------
                function filterDropDown(data,target){
                  return  _.filter(data, function(val){
                        return val.type==target;    
                      })
                }
        
                $('select').change(function(){
                    if($('select option:selected').text()==='All'){
                        display(data);
                        return; 
                    }
                    display(filterDropDown(data,($('select option:selected').text())))
                })
 
// ------------------Input for search bar-----------------------
     
     
        $('#search-button').on('click',function(event){
          console.log($('input:text').val());
        })
          
          
          
          
//----------------------Search bar function--------------------------------
      
      
function search(data, target){
    function find(data, target){
        if(typeof data ==='string'){
            return data.toUpperCase().includes(target.toUpperCase());
        }else if(typeof data==='object'){
            return _.some(data,function(val,ind,coll){
                return find(val,target);
            })
        }
    }
    return _.filter(data,function(data){
        return find(data,target);
    })
              
}
$('#search-button').on('click', function(){
      let results = search(data, $('input:text').val());
      display(results);
    });
    
      
      function display(array){
          $('main').empty();
          if(array.length===0){
              $('<div>').text('No Items Found').attr('class','text-center').css('font-size','20px').css('font-weight','bold').appendTo('main');
          }
          _.each(array, function(product){
              let row = $('<article>').attr('class','row').css('border-bottom','1px dotted #ccc');    /////hyperlink
              let thumbnail = 'img/product/thumbs/'+ product.image;
              $('<img>').attr('src',thumbnail).attr('class','col-md-2').appendTo(row);
              let mainDesc = $('<section>').attr('class','col-md-6').appendTo(row);
              $('<a>').text(product.desc).appendTo(mainDesc);
            
            
            
            
            
// ------------------------modal clicker feature --------------------------------
            
              $('main').append(modalFactory(product));
                row.on('click', function(){
                    $("#"+product.id+"-modal").modal();
                });
             
              row.appendTo('main');
              $('<div>').text('Price: $'+product.price).appendTo(mainDesc).css('font-size','12px');
                    if(product.stock < 10){
                        $('<section>').text("Only "+product.stock+" left in-stock!!! BUY IT NOW").css('color','red').css('font-size','25px').appendTo(mainDesc);
                    }else{
                        $('<section>').text(product.stock+" left in-stock").appendTo(mainDesc);
                    }
              $('<button>').text("Gimme Dat Stuff").appendTo(row).on('click',function(event){alert('Yay you bought dat'+product.desc)}).attr('class','text-center');
          });
          
      }
      display(data);
      
      
      
      
      
 //-----------------------a function to create popups---------------------

function modalFactory(product){
     let modalDiv = $('<div>').attr('class', 'modal fade').attr('role', "dialog").attr('id', product.id+"-modal");
     
     let firstDiv = $('<div>').attr('class', 'modal-dialog');
     modalDiv.append(firstDiv);
     
     let secondDiv = $('<div>').attr('class', 'modal-content');
     firstDiv.append(secondDiv);
     
     let thirdDiv = $('<div>').attr('class', 'modal-header');
     secondDiv.append(thirdDiv);
     thirdDiv.append($('<button>').attr('class', 'close').attr('data-dismiss', 'modal').wrapInner('&times;'));
     thirdDiv.append($('<h4>').attr('class', 'modal-title').text(product.desc));
     
     let modalBody = $('<div>').attr('class', 'modal-body  row');
     modalBody.appendTo(thirdDiv);
     modalBody.append($('<img>').attr('src', "img/product/" + product.image).attr('class', 'col-md-3'));
     
     let mainSqueeze =  $('<div>').attr('class', 'col-md-9');
        mainSqueeze.wrapInner("<p><b>Available Colors:</b> " +
                             product.availableColors + "</p><p><b>Specifications: </b>" +
                             product.specs + "</p><p><b>Price:</b> " +
                             '$'+product.price + "</p>");
        mainSqueeze.append($('<p>').text(product.stock + ' left in stock'));
     
     modalBody.append(mainSqueeze);
     return modalDiv;
   }

$('nav').css('background','Blue');

      
  }).fail(function() { console.log('getJSON on discography failed!'); });
  // ALL YOUR CODE GOES ABOVE HERE //
});