function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function addRestaurantListener(){
  function loop(){
	loop = setInterval(randomRestaurant,1000);
  } 
  startBtn = document.getElementById('start-random-button');
  function randomRestaurant(){
  	restaurantArray = ['A','B','C'];
  	restaurantLength = restaurantArray.length;
	rand = getRandomInt(0,restaurantLength);
  	console.log(restaurantArray[rand]);
  	restaurant = document.getElementById('restaurant');
  	restaurant.innerHTML = restaurantArray[rand];
  }
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", loop);

  getBtn = document.getElementById('get-restaurant-button');
  function getRestaurant(){
 	clearInterval(loop);
  	console.log("Great, let's go to " + restaurantArray[rand]);
  	document.getElementById('return_word').innerHTML = "Great, let's go to " + restaurantArray[rand];
	var button = document.createElement("button");
	button.innerHTML = "Reset";
	var body = document. getElementsByTagName("body")[0];
	body.appendChild(button);
	button.addEventListener ("click", function(){
		button.remove();
		document.getElementById('return_word').innerHTML = "";
		document.getElementById('restaurant').innerHTML = "";
	});
  	// document.getElementById('reset').innerHTML = "Reset"
  }
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", getRestaurant);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);