/*console.time("normal way")
const food=document.getElementById('food-container');
const container=document.createDocumentFragment();
for(let i=0;i<=100;i++){
    const li=document.createElement('li');
    li.className="food-item";
    li.textContent=`food items:${i}`;
    container.append(li);
}
food.append(container);
console.timeEnd("normal way")*/
/*const num=document.querySelector(".container input");
console.log(num.type);
console.log(num.name);
console.log(num.id);
console.log(num.placeholder);
//num.value="tejas";
//console.log(num.value);
//const name=prompt("what is ur name");
num.setAttribute("value",name);
const hi=parseInt(num.value, 10);

console.log(typeof num.value);
console.log( typeof hi);*/
const num=document.querySelector(".container input");
/*snum.setAttribute("value","shalu");
const isalive=num.getAttribute("isAlive");
console.log(isalive);
const inter =num.getAttribute('interest');
console.log(inter);
console.log(num.attributes);
console.log(num.attributes[4].nodeValue);
num.removeAttribute('isAlive');
console.log(num.style);*/
console.log(num.dataset['interest']);
    
