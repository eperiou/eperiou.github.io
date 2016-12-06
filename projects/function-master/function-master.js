function objectValues(object){
    var Array = [];
    for(var keys in object){
        Array.push(object[keys]);
    }
    return Array;
}




function keysToString(object){
    var String = "";
    for(var keys in object){
        String+= [keys] + " ";
    }
    return String.trim();
}



//////////////////////////////////////////////////////////////////////////////
function valuesToString(object){
    var String = "";
    for(var keys in object){
        if( typeof object[keys]=='string'){
        String+= object[keys] + " ";
        }
    }
    return String.trim();
}


//////////////////////////////////////////////////////////////////////////////

function arrayOrObject(Val){
    if(Array.isArray(Val)){
        return 'array';
    }else if(typeof(Val) =='object'){
        return 'object';
    }
}




//////////////////////////////////////////////////////////////////////////////
function capitalizeWord(word){
    
    return word[0].toUpperCase()+ word.slice(1);
    
}
//////////////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string){
    var Array = string.split(' ');
    for(var i = 0; i <Array.length ; i++){
         Array[i] = capitalizeWord(Array[i]);
    }
    return Array.join(' ');
}


//////////////////////////////////////////////////////////////////////////////

function welcomeMessage(object){
    
    return "Welcome "  + capitalizeWord(object['name'])+ '!';
    
    
}


//////////////////////////////////////////////////////////////////////////////
function profileInfo(object){
   var name = capitalizeWord(object.name); 
   var species = capitalizeWord(object.species);
   
   return  name + ' is a ' + species;
}


//////////////////////////////////////////////////////////////////////////////
function maybeNoises(object){
    if(object.noises && object.noises.length > 0){
        return object.noises.join(' ');
    }else{
        return 'there are no noises'
    }   
    
}
 



//////////////////////////////////////////////////////////////////////////////
function hasWord(string, word){
    
    return (string.match(word)==word);
        
}


//////////////////////////////////////////////////////////////////////////////
function addFriend(name,object){
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////////////
function isFriend (name,object){
    if(object.hasOwnProperty('friends')){
        for(var i = 0; i<object.friends.length;i++){
            if(object.friends[i]==name){
                return true
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
function nonFriends(name, data){
    var i=0;                                              
    while(data[i].name !== name && i<data.length){
       i++;
    }
  
    var people = data.map(function (val){
                return val.name;
                });
   
    return  people.filter(function(val){
                          if(!data[i].friends.includes(val) && val!==name) {
                            return val;
                          }
                          });
}
//////////////////////////////////////////////////////////////////////////////
function updateObject(object,key,value){
     object[key] = value;
    return object;
}
//////////////////////////////////////////////////////////////////////////////
function removeProperties(object, array){
    for(var key in object) {
        if(array.includes(key)){
            delete object[key];
        }
        
    }
    return object;
}    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function dedup(array){
    var newArray = [];
    return  array.filter(function (val){
                        if(!(newArray.includes(val))){
                            newArray.push(val);
                            return val;
                        }        
    })
}
