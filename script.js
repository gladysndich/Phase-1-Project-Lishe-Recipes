
document.addEventListener('DOMContentLoaded', () => {
	const popRecipes = "https://cooking-recipe2.p.rapidapi.com/getbycat/Indian%20Desserts"

	//containers
	let reContainer = document.querySelector("[data-recipe-cards-container]")

	//getRecipes
	function getRecipes(){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '59ae4a0938msh0ff8a0caf294decp1f06e0jsnff1143a199c3',
			'X-RapidAPI-Host': 'cooking-recipe2.p.rapidapi.com'
		}
	};
	
	fetch(popRecipes, options)
		.then(response => response.json())
		.then(results => 
			results.forEach(food =>
				displayRecipes(food) ))
		.catch(err => console.error(err));
	}
	//display card Recipes
	function displayRecipes(itemRecipe){
		const reCard = `
		<div class = "card">
            <div class="image"><img src = "${itemRecipe.img}" alt= ""  /></div>
            <div class="header" data-header>${itemRecipe.title}</div>
            <div class="body" data-body><a href ="${itemRecipe.url}">Recipe</a> </div>
		</div>`
		  
		reContainer.innerHTML += reCard		  
	}
	

	getRecipes()
})

const searchRecipes = document.querySelector(".searchRecipes");
const inputBox = searchRecipes.querySelector(".data-search-input");
const suggBox = searchRecipes.querySelector(".auto-search-box");
		
inputBox.onkeyup = (e) => {
	let userRecipe = e.target.value;
	let emptyArray = [];
	if (userRecipe){
		emptyArray = suggestions.filter((data)=>{
			return data.toLocaleLowerCase().startsWith(userRecipe.toLocaleLowerCase());
		});
		emptyArray = emptyArray.map((data)=>{
			return data= '<li>' + data + '<li>';
		});
		console.log(emptyArray);
		searchRecipes.classList.add("active");
		showSuggestions(emptyArray);
		let allList = suggBox.querySelectorAll("li");
		for (let i = 0; i<allList.length; i++){
			allList[i].setAttribute("onclick", "select(this)");
		}
	}else{
		searchRecipes.classList.remove("active");
	}
		
}

function select(element){
	let selectUserData = element.textContent;
	inputBox.value = selectUserData;
	searchRecipes.classList.remove("active");
}

function showSuggestions(list){
	let listData;
	if(!list.length){
		userValue = inputBox.value;
		listData = '<li>' + userValue + '</li>';
	}else{
		listData = list.join('');
	}
	suggBox.innerHTML = listData;
}

