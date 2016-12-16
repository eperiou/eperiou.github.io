/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
     

        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        
        //  creating the top tunes list
        $('<section>').attr('id','section-rider').append($('<h3>')).text('Billy\'s Rider').appendTo($('#sections'));
        
        
        
        
        let topRated = data.discography.topRated;
            var $topRecord =_.map(topRated, function(recording) {
                return _.map(recording,function(value,attribute){
                    if(attribute!='art'){
                    var string = [attribute]+' : '+ [value] ;
                    return ($('<div>').attr('class', attribute).text(string));
                    }        
                });
            });
            _.each($topRecord,function(x){
                ($('<ul>')).attr('class','recording').appendTo($('#list-top-rated')).on('click',function(event){
                   
                   //////clicks, cause photo to self-identify index in top rated charts
                   
                    $('#top-rated-image').attr('src', topRated[_.indexOf($topRecord,x)].art);
                }).append(x);
            })
        
        // // ///////Top albums list
        const $recordings = ($('<section>')).attr('id','section-recordings').text('Recordings').appendTo('#sidebar');
        $('<ul>').attr('id','list-recordings').appendTo('#section-recordings');
        let recordings = data.discography.recordings;
            var $recordList =_.map(recordings, function(recording) {
                return _.map(recording,function(value,attribute){
                    if(attribute!='art'){
                    var string = [attribute]+' : '+ [value] ;
                    return ($('<div>').attr('class', attribute).text(string));
                    }        
                });
            });
            _.each($recordList,function(record){
                ($('<li>')).attr('class','recording').appendTo($('#list-recordings')).on('click',function(event){
                    
                    //////clicks, cause photo to self-identify index in records charts
                    $('#recording-image').attr('src',recordings[_.indexOf($recordList,record)].art)
                }).append(record);
            })

        
        
        /////////////////
        
        
        // // pictures to recording lists
        $('<div>').attr('id','image-container-top-rated').attr('class','image-container').appendTo('#header-top-rated');
             $('<img>').attr('id','top-rated-image').attr('src',topRated[0].art).attr('class','image').appendTo('#image-container-top-rated');                                                           
        
        
        $('<div>').attr('id','image-container-recording').attr('class','image-container').prependTo('#list-recordings');
             $('<img>').attr('id','recording-image').attr('src',recordings[0].art).attr('class','image').appendTo('#image-container-recording');                                                           
        
        /**
                    This picture switcher functions are in the above sections, where I populate the page with albums
        
        
        */
        
        
        
        // ///////pic cycler
        let billyPics = data.images.billy;
        var  picCounter = 0;
        $('#image-billy').on('click', function(event){
            
            picCounter<billyPics.length-1 ? picCounter++ : picCounter=0;
            $('#image-billy').attr('src',billyPics[picCounter]);
        });
        
        const pacifier = opspark.makePacifier($('#image-container-billy')[0]);
        
        
var createTable = function(itemList){
        var createRow = function(item){
        var $row = $("<tr>");
        var $drum = $("<td>").text(item.type);
        var $dimension = $("<td>").text(item.desc);
        $row.append($drum);
        $row.append($dimension);
        return $row;
    }
    var $table = $("<table>");
    var $rows = itemList.map(createRow);
    $table.append($rows);
    return $table;
};

createTable(data.rider).appendTo("#section-rider");
        
        
        
        
        
        
        $('td').css('border','2px').css('border-style','solid').css('color','gold');
        $('ul').css('width','200px');
        $('li').css('display','block');
        $('.recording').css('border-top','2px').css('border-style','solid')
        $('.recording,#list-top-rated,#section-recordings,#list-recordings').css('padding-left','0px');
        $('main').css('padding-top','10px');
        $('.content').css('margin-right','0px')
        $('main,body').css('background-color', 'plum').css;
        $('#sections,nav,div,#sidebar').css('background-color', 'purple').css('border-radius', '4px');
         $('p').css('color', 'gold').css('padding-left', '10px');
         $('h2,h3,h4,header,a,li,ul,#section-recordings').css('color', 'gold').css('font-style', 'italic');
        $('div').css('color', 'gold').css('font-style','italic').css('padding-bottom','2px');
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


