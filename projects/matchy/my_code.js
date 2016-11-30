// step 1
var animal = {};
animal.species = 'cat';
animal['name'] = 'Oscar';
animal.noises = [];
console.log(animal);

// step 2
var noises = [];
noises[0] = 'prow';
noises.push('purr');
noises.unshift('mew');
noises[noises.length] = 'tuna!';

// step 5
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

// step 5
animal['noises']= noises;
animal['noises'].push('hiss');
console.log(animal);


// step 6
var animals = [];
animals.push(animal);
console.log(animals);

var duck= { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);

var dog = { species: 'dog', name: 'Rover', noises: ['bark', 'ruff', 'sneeze', 'howl'] };
var cow = { species: 'cow', name: 'Bessie', noises: ['MAAAOowowowoowOOAOAOA', 'snort', 'moo-oo', 'moo'] };
var chicken = { species: 'chicken', name: 'Nugget', noises: ['Bawk', 'kluck', 'pippip', 'crow'] };

animals.push(dog,cow,chicken);
console.log(animals);

// step 7
var friends = [];   // chose an array, because we are making a list of friends, so it doesn't really matter the order, and we'd have to code multiple sub objects 
// to keep the names from referencing each other in the future, which would be just like making an array.


function friendFinder (animals){
    return animals[Math.floor(Math.random() * (animals.length))];
}

friends.push((friendFinder(animals)).name);
console.log(friends);

animals[2]['friends'] =friends; 
console.log(animals[2]);

//  step 2.1
function search(name){
    for (var i = 0; i < animals.length;i++){
        if(animals[i]['name']==name){
            return animals[i];
        }
    }
    return null;
}

// step 2.2
function edit(name,object){
    for (var i = 0; i < animals.length;i++){
        if(animals[i]['name']==name){
            animals[i] = object;
        }
    }
}

// step 2.3
function remove(name){
    for (var i = 0; i < animals.length;i++){
        if(animals[i]['name']==name){
            animals.splice(i,1);
        }
    }
}


function create (object){
    if(object.name.length> 0 && object.species.length >0)
        for(var i = 0; i <animals.length;i++){
           if(animals[i].name == object.name){
               return;
           }
        }
    animals.push(object);
}