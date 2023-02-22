const formel=document.forms.feedback;
const select=formel.elements.country;
const handle=(e)=>{
    e.preventDefault();
    const formData=new FormData(formel);
};
formel.addEventListener('submit',handle);
console.log(select);
console.log(select.value);//get
//select.value='IND';//set
//selected index
//console.log(select[2].value);
//select.selectedIndex=3;
//selected by using dom*/
console.log(select.options[select.selectedIndex].value);
console.log(select.options.selectedIndex);
select.addEventListener('change',(e)=>{
    console.log(e.target.options[e.target.selectedIndex]);
    console.log(e.target.options[e.target.selectedIndex].value);
    console.log(e.target.options[e.target.selectedIndex].text);
});
//<-- dynamically add options-->
const optionel=document.createElement('option');
optionel.value='faz';
optionel.text='south africa';
select.add(optionel,2);//add text to option or
const option2=new Option('indonesia','IDN');
select.add(option2,4);
select.remove(3);
console.log(select);
