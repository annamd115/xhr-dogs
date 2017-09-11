console.log("I'm in main.js!");
//XHR to dogs.json
//Call helper function that sets up the XHR to breeds & passes dogs
//Put XHR breeds.json load function inside helper function
//call combineArray


function runThisAfterDogsLoads(){
	var dogsData = JSON.parse(this.responseText).dogs;
	getBreedz(dogsData);
	};

function shitBroke(){
	console.log("WHAT DID YOU DO?");
};

var myDawgs = new XMLHttpRequest();
myDawgs.addEventListener("load", runThisAfterDogsLoads); 
myDawgs.addEventListener("error", shitBroke); 
myDawgs.open("GET","dogs.json"); 
myDawgs.send(); 

function getBreedz(dogz){

	var myBreedz = new XMLHttpRequest();
	myBreedz.addEventListener("load", runThisAfterBreedzLoads); 
	myBreedz.addEventListener("error", shitBroke); 
	myBreedz.open("GET","breeds.json"); 
	myBreedz.send(); 

	function runThisAfterBreedzLoads(){
	var breedsData = JSON.parse(this.responseText).breeds;
	combinedArray(dogz, breedsData);
};
}

function combinedArray(dogsArray, breedsArray){
	//loop through dogs and look at breed_id
	//loop through breeds and find matching breed_id
	//make final price
	dogsArray.forEach(function(dog){
		var currentBreedId = dog["breed-id"];
		// console.log("dog breed_id", currentBreedId);
		breedsArray.forEach(function(breed){
			if(currentBreedId === breed.id){
			// console.log("one breed", breed);
			dog["dogBreed"] = breed.name;
			dog["basePrice"] = breed["base-price"];
			dog["description"] = breed.description;
			dog["finalPrice"] = dog.basePrice + dog["add-on-price"];
			}
		});
	});
	console.log("all the dogs", dogsArray);
	domString(dogsArray);
};

// function domString(dogs){
// 	var reallyLongDomString = "";
// 	writeToDom(reallyLongDomString)
// };

function writeToDom(strang){
	//put in the dom
};











