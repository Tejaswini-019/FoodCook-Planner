/*const main=document.getElementById('main');
const div=document.createElement('div');
div.className="jiji";
div.textContent="food is updated";
console.log(div);
const textnode=document.createTextNode('fppp');
div.append(textnode);
console.log(div);
/*div.innerText="hiii";
main.append(div);
main.prepend(div);
createAlertViaDOM('food is updated');*/
/*console.log(alert.innerText);
const alertEl=document.querySelector(".alert .alert-msg");
console.log(alert.innerHTML);
console.log(alert.textContent);/*same as innnerText
alert.innerHTML="<strong>hello</strong>i have been";
alertEl.textContent="<i>hello</i>have been";
alert.innerText="<strong>hello</strong>i have been";*/
/*function createAlertViaDOM(msg) {
    const main=document.getElementById("main");
    const div=document.createElement('div');
    const textnode=document.createTextNode(msg);/*('food is updated');
    div.className="alert";
    div.append(textnode);
    main.prepend(div);
}*/
const main=document.getElementById("main");
function createAlertViaDOM(msg) {
    const div=document.createElement('div');
    const textnode=document.createTextNode(msg);/*('food is updated');*/
    div.className="alert";
    div.append(textnode);
    main.prepend(div);
}
createAlertViaDOM("hello i was created by createdElement");
function create(msg){
    const temp=`
<div class="alert">
    ${msg}
</div>
`;
console.log(typeof temp);
main.innerHTML += temp;
}
create('Hello i was created by innerHTML');