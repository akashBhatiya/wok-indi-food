//fucntion to open and close menu
let open = false;

function toggleNav(){
    const btn = document.getElementById("nav-button");
    const navMenu = document.getElementById("nav-container");
    const main = document.getElementsByTagName("main");

    if(open){
        btn.classList.remove("fa-x");
        btn.classList.add("fa-bars");
        navMenu.style.display="none";
        main[0].style.opacity = "1";
    }
    else{
        btn.classList.remove("fa-bars");
        btn.classList.add("fa-x");
        navMenu.style.display="block";
        main[0].style.opacity = "0.6";
    }
    open = !open;
}


//bulding of search mechanicsm
const si = document.getElementById('searchInput');
const ric = document.getElementById('relatedItemsContainer');

si.addEventListener('input',handleSearch);
si.addEventListener('click',handleSearch);

function handleSearch(){
    const searchTerm = si.value.trim();
    if(searchTerm.length > 0){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(responce => responce.json())
            .then(data =>displaySearchResult(data.meals))
            .catch(error => console.log(error));
    }else{
        clearSearchResults();
    }
}

function displaySearchResult(meals) {
  if (!meals) {
    clearSearchResults();
    return;
  }

  ric.innerHTML = '';

  meals.forEach(meal => {
    ric.innerHTML += `
        <div class="dish-container" id="${meal.strMeal}" onclick="getMeal(${meal.idMeal})">
            <div class="img-container">
                <img src="${meal.strMealThumb}" alt="">
            </div>
            <div class="text-container">
                <h3>${meal.strMeal}</h3>
                <p>${meal.strCategory}</p>
            </div>
        </div>
    `
  });
}

function clearSearchResults() {
  ric.innerHTML = '';
}


//render over meal details page
function getMeal(mealId){
  clearSearchResults();
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(response => response.json())
    .then(data => displayMealDetails(data.meals[0]))
    .catch(error => console.error(error));
}

function displayMealDetails(meal) {
  if (!meal) {
    console.log('No meal data available.');
    return;
  }
    
  clearSearchResults();
  // Accessing each key parameter of the meal
  const id = meal.idMeal;
  const name = meal.strMeal;
  const category = meal.strCategory;
  const area = meal.strArea;
  const instructions = meal.strInstructions;
  const thumbnailURL = meal.strMealThumb;
  const ingredients = [];
  const measures = [];
  
  // Extracting ingredients and measures
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
  
    if (ingredient) {
      ingredients.push(ingredient);
    }
  
    if (measure) {
      measures.push(measure);
    }
  }

  const mealDetails = document.getElementById('mealDetails');

  mealDetails.innerHTML = `
    <div class="head-container">
      <div class="img-container">
        <img src="${thumbnailURL}" alt="no image found">
      </div>
      <div class="detail-container">
        <h1>${name}</h1>
        <h3>Category: ${category}</h3>
        <h3>Area: ${area}</h3>
        <i class="fa-regular fa-heart" id="favBtn" data-id="${id}"></i>
      </div>
    </div>

    <div class="ingredients-container">
      <h3>Ingredients</h3>
      <table>
        <thead>
          <tr>
            <th>Ingredients</th>
            <th>Measures</th>
          </tr>
        </thead>
        <tbody id="tableBody">
        </tbody>
      </table>
    </div>

    <div class="body-container">
      <h3>Instructions</h3>
      <div class="p">${instructions}</div>
    </div> 
  `;

  insertTable(ingredients,measures);
  const favBtn = document.getElementById("favBtn");    
  const iD = favBtn.dataset.id;

  favBtn.addEventListener('click', () =>{
    updateFavorites(iD);
  })

  editButton(iD);
}

function insertTable(ingredients, measures){
  const tableBody = document.getElementById("tableBody");

  tableBody.innerHTML = "";

  for(let i = 0; i<ingredients.length && i<measures.length; i++){
    tableBody.innerHTML += `
      <tr>
        <td>${ingredients[i]}</td>
        <td>${measures[i]}</td>
      </tr>
    `;
  }
}


// add to favorite section  
function updateFavorites(id) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const favBtn = document.getElementById("favBtn");
  if(favorites.includes(id)){
    let arr = favorites.filter( (x) => x !== id);
    favorites = arr;
    favBtn.classList.remove('fa-solid');
    favBtn.classList.add('fa-regular');
  }
  else{
    favorites.push(id);
    favBtn.classList.remove('fa-regualr');
    favBtn.classList.add('fa-solid');
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderFavorite();
}

function renderFavorite(){
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const favoriteContainer = document.getElementById('favoriteContainer');
  favoriteContainer.innerHTML = "";
  if(favorites.length == 0){
        console.log("here");
        favoriteContainer.innerHTML = "<h4>There are no dishes in this section</h4>";
        return;
  }
    
  favorites.forEach(id => {
    getMeal2(id); 
  });
}

renderFavorite();

function getMeal2(id){
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(data => displayFav(data.meals[0]))
    .catch(error => console.error(error));
}

function displayFav(meal){
  const favoriteContainer = document.getElementById('favoriteContainer');
  favoriteContainer.innerHTML += `
      <div class="favorite-dish" id="${"get"+meal.idMeal}" data-id="${meal.idMeal}" onclick="getMeal(${meal.idMeal})">
        <img src="${meal.strMealThumb}" alt="no image found"><br>
        <h3>
            ${meal.strMeal}
        </h3>
      </div>
  `;  
}


function editButton(id){
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const favBtn = document.getElementById("favBtn");
  if(favorites.includes(id)){
    favBtn.classList.remove("fa-regular");
    favBtn.classList.add("fa-solid");
  }
  else{
    favBtn.classList.remove("fa-solid");
    favBtn.classList.add("fa-regular");
  }
}

window.addEventListener('click', ()=>{
  clearSearchResults();
})





