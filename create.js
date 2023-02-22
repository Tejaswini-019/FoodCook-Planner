/*const foodfrag=document.getElementById('food-container');
const  favfood=
[   "chicken briyani" ,
    "veg briyani",
    "fish briyani",
    " prawn briyani",
];
const frag=document.createDocumentFragment();
favfood.forEach((food)=> {
    const li=document.createElement("li");
    li.textContent=food;
    li.className="food-item";
    foodfrag.append(li);
});
food.append(foodfrag);
*/
const foodfrag=document.getElementById('food-container');
const li=document.createElement("li");
    li.textContent='food';
    li.className="food-item";
    foodfrag.append(li);//append
    foodfrag.prepend(li);
    foodfrag.parentNode.insertBefore(li,foodfrag.nextSibling);