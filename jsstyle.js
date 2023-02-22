// <button style="padding:6px 10px;font-size: 10px;background-color: royalblue;border:none;border-radius:5px;color:#FFF;text-transform:uppercase;">submit</button></div>
//const inputname=document.querySelector('.container input');
//const inputbtn=document.querySelector('.container button');
//inputbtn.setAttribute("     style","padding:6px 10px;font-size: 10px;background-color: royalblue;border:none;border-radius:5px;color:#FFF;text-transform:uppercase;"
//);
//console.log(inputname.className);
//console.log(inputname.classList);
//inputname.setAttribute('class','newclassname');
//inputname.className +=" newcls newcls2 newcls3";
//onsole.log(inputname.classList);
//for (let attr of inputname.classList){
  //  console.log(attr);
//}
/*const inputname=document.querySelector('.container');
const showBtn=document.querySelector('#showBtn');
showBtn.addEventListener('click',()=>{
    if(inputname.classList.contains('hide')){
        showBtn.innerText="Hide div";
        showBtn.style.backgroundColor="gray";
        //inputname.style.display="block";
        inputname.classList.remove('hide');
    }
    else{
        inputname.classList.add('hide');
        showBtn.innerText="Show Div";
        showBtn.style.backgroundColor="royalblue";
    }
});
const credit=document.querySelector('.header span');
credit.onclick=function () {
    alert("author by trisha");
};
const credit=document.querySelector('.header span');
credit.setAttribute('onclick','alert("hii")');
console.log(credit);
console.log(credit);
const credit=document.querySelector('.header span');
credit.addEventListener('click',()=>{
    alert('bye');
});
credit.addEventListener('click',()=>{
    alert('goodbye');
});

function handle(){
    alert('goodbye');
}
function handle2(){
    alert('goodbye');
}
credit.addEventListener('click',handle);
credit.addEventListener('click',handle2);*/
const credit=document.querySelector('.header span');
//credit.addEventListener('click',handle);
function handle(){
    console.log('bye');
};
//setTimeout(()=>{
   // credit.removeEventListener('click',handle);
//},5000);
credit.addEventListener('click',handle,{once:true});