let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");
let nolistel=document.getElementById('no-list');
let foodlist=document.getElementById('food-list-statistics');
document.addEventListener('DOMContentLoaded',()=>{
  const food=[...JSON.parse(localStorage.getItem('foodItem'))];
  food.forEach((item)=>{
    let newFoodItemEl = document.createElement("li");
    let div = document.createElement("div"); //for list-item
    let divBtn = document.createElement("div");
    newFoodItemEl.append(div, divBtn);
    // assigning textContent & className to newFoodItemEl
    div.textContent = item.foodItem;
    newFoodItemEl.className = "food-item";
    divBtn.parentElement.setAttribute("onClick", "removeFoodItem(event)");
    divBtn.innerHTML = `<i class="fa fa-xmark"></i>`;
    newFoodItemEl.append(divBtn);
    // appending newly created element(newFoodItemEl) to foodContainer
    foodContainer.append(newFoodItemEl);
  })
  refreshUI();
});
const handleInputFood = () => {
  // creating li element
  let newFoodItemEl = document.createElement("li");
  let div = document.createElement("div"); //for list-item
  let divBtn = document.createElement("div");
  newFoodItemEl.append(div, divBtn);

  // assigning textContent & className to newFoodItemEl
  div.textContent = inputFood.value;
  newFoodItemEl.className = "food-item";

  divBtn.parentElement.setAttribute("onClick", "removeFoodItem(event)");
  divBtn.innerHTML = `<i class="fa fa-xmark"></i>`;
  newFoodItemEl.append(divBtn);

  // appending newly created element(newFoodItemEl) to foodContainer
  foodContainer.append(newFoodItemEl);

  // resetting the inputFood value
 
  //set localstorage
  localStorage.setItem(
    "foodItem",
    JSON.stringify([...JSON.parse(localStorage.getItem('foodItem') || '[]'),
    {foodItem: inputFood.value},
    ])
  );
  inputFood.value = "";
 //JSON.parse(localStorage.getItem('foodItems') || '[]');
  refreshUI();
};

inputBtn.addEventListener("click", handleInputFood);

inputFood.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleInputFood();
  } else if (event.key === "KeyZ" && (event.ctrlKey || event.metaKey)) {
    // Undo Operations
    inputFood.value = "";
  }
});

// remove Food items
function removeFoodItem(event) {
  const existingList = event.target.parentNode.parentNode;
  //console.log("logging event", event.target.parentNode.parentNode);
  // new way
existingList.remove();
//localStorage.setItem('foodItem','my value');
refreshUI();
// old way
// existingList.parentNode.removeChild(existingList);
}
//so dont show no-list div
function refreshUI(){
  foodlist.innerText=`you have ${foodContainer.children.length} lists`;
  //so dont show no-list div
//if(foodContainer.children.length>0){
//nolistel.hidden=true;
// foodlist.innerText=`you have ${foodContainer.children.length} lists`;
//so dont show no-list div
//}else{
// nolistel.hidden=false;
//children not exist, show no-list
//}
foodContainer.children.length > 0 
?((nolistel.hidden=true),(foodlist.hidden=false)):((nolistel.hidden=false),(foodlist.hidden=true));
};


