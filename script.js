const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e7169ef13mshce36a44c1d550e3p16009fjsnfbd90a48164f',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C%20gluten&number=10&offset=0&type=main%20course', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


function displayPopularRecipes(){

}
