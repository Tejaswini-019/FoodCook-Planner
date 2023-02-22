const form=document.querySelector('form');
const div=document.querySelector('form div');
const p=document.querySelector('form p');
/*form.addEventListener('click',(event)=>{
    alert('form');
    console.log(`Target:${event.target.tagName}, this:${form.tagName}`);
});
div.addEventListener('click',(event)=>{
    alert('div');
    //event.stopPropagation();
});

p.addEventListener('click',()=>{
    alert('para');
});
form.addEventListener('click',()=>{
    alert('form');
},{capture:true});*/
for(let ele of document.querySelectorAll('form,form *')){
    console.log(ele);
    ele.addEventListener(
        "click",()=>{
            console.log(`capture phrase:${ele.tagName}`);
        },
        true
    );
    ele.addEventListener(
        "click",()=>{
            console.log(`bubbling phrase:${ele.tagName}`);
        });

}