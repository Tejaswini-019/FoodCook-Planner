/*let inputFood=document.getElementById("input-food");
let inputbtn=document.getElementById("input-btn");
let foodcontainner=document.getElementById("food-container");
inputbtn.addEventListener("click",()=>{
    const li=document.createElement('li');
    const text=document.createTextNode(inputFood.value);
    li.className="food-item";
    li.append(text);
    foodcontainner.append(li);
});*/
const food=document.getElementById('food-container')
for(let i=1;i<=1000;i++){
    const li=document.createElement('li');
    li.textContent=`Food items:${i}`;
    li.className="food-item";
    food.append(li);
}
    /*foodcontainner.innerHTML +=`<li class="food-item">${inputFood.value.toUpperCase()}</li>`;
});
/* insert value will save in list*/
/*const fooditem=document.getElementsByClassName('food-item');
let allfood=[].map.call(fooditem, (food)=> food.textContent);
console.log(allfood);/* {curd, sambar, rasam}*/
/*const foodItem=document.getElementsByTagName("li");
console.log(`i have ${foodItem.length} item`); /* i have 3 item
const res=document.querySelector("li");
const result=document.querySelectorAll("li");
console.log(res[0].innerText);*/