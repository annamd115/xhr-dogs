console.log("I'm in main.js!");

var dogsArray = [];

function doggies(){
	var data = JSON.parse(this.responseText).dogs;
	dogsArray = data.dogs;
	console.log("dogs", data);
	};

function shitBroke(){
	console.log("WHAT DID YOU DO?");
};

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", doggies); 
myRequest.addEventListener("load", shitBroke); 
// myRequest.addEventListener("error", executeThisCodeIfFileErrors); 
myRequest.open("GET","https://random-dogs-api.herokuapp.com/dogs/60"); //random API that generates dogs
myRequest.send(); 



// var myRequest2 = new XMLHttpRequest();
// myRequest.addEventListener("load", doggies); 
// // myRequest.addEventListener("error", executeThisCodeIfFileErrors); 
// myRequest.open("GET","dogs.json"); 
// myRequest.send(); 