console.log("I'm in main.js!");

var dogsArray = [];
var breedsArray = [];

function doggies(){
	var data = JSON.parse(this.responseText);
	dogsArray = data.dogs;
	console.log("dogs", dogsArray);
	};

function breeds(){
	var data = JSON.parse(this.responseText);
	breedsArray = data.breeds;
	console.log("breeds", breedsArray);
};

function shitBroke(){
	console.log("WHAT DID YOU DO?");
};

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", doggies); 
myRequest.addEventListener("load", shitBroke); 
myRequest.open("GET","dogs.json"); 
myRequest.send(); 

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", breeds); 
myRequest2.addEventListener("error", shitBroke); 
myRequest2.open("GET","breeds.json"); 
myRequest2.send(); 