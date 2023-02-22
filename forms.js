/*const table=document.querySelector('table');
let selectid;
table.addEventListener('click',(event)=>{
    const target=event.target;
    const closestTr=target.closest('tr');
    if(target.tagName=='TH') return ;//ignore th element
    if(selectid!=undefined){
        selectid.classList.remove('active');
    }
    selectid=closestTr;
    //target.parentNode.style.backgroundColor='red';
 closestTr.classList.add('active');
 alert(`hello ${closestTr.children[0].textContent}`) ;
});change color of table row>
<!--
*/
document.addEventListener('click',(event)=>{
    const id=event.target.dataset.toggleId;
  if(!id) return;
  const el=document.getElementById(id);
 el.hidden=!el.hidden;
});
const formel=document.querySelector("#donate-form");
formel.addEventListener('submit',(e)=>{
    e.preventDefault();
    const even=e.target.querySelector('input').value;
    alert(`thanks for your donation ${even}`);
});
