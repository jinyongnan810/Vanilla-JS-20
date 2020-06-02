const searchInput = document.getElementById('search');
const searchForm = document.getElementById('submit');
const searchRandom = document.getElementById('random-btn');
const mealsHeading = document.getElementById('result-heading');
const mealsEl = document.getElementById('meals');
const mealsSingleEl = document.getElementById('single-meal');

// functions
const searchMeals = () => {
  // clear single meal
  mealsSingleEl.innerHTML = '';
  // search term
  const term = searchInput.value;
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term.trim()}`)
      .then((res) => res.json())
      .then((data) => {
        mealsHeading.innerHTML = `
            <h2>Search result for '${term.trim()}':</h2>
          `;
        if (data.meals) {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) => `<div class="meal">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            <div class="meal-info" data-mealId="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
            </div>
            
        </div>`
            )
            .join('');
        } else {
          mealsHeading.innerHTML = `
            <h2>There a no result for '${term.trim()}:'</h2>
          `;
        }
      });
  }
};
const fetchById = (id) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      addMealToDOM(meal);
    });
};
const addMealToDOM = (meal) => {};

// event listeners
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchMeals();
});
mealsEl.addEventListener('click', (e) => {
  const mealInfo = e.path.find((el) => {
    if (el.classList) {
      return el.classList.contains('meal-info');
    } else {
      return false;
    }
  });
  if (mealInfo) {
    const id = mealInfo.getAttribute('data-mealId');
    fetchById(id);
  }
});
