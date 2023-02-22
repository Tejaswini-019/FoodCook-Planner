/*document.addEventListener('mousedown',(event)=>{
   console.log('mousedown',event);
});
document.addEventListener('mouseup',(event)=>{
   console.log('Mouseup',event);
});
document.addEventListener('mouseenter',(event)=>{
   console.log('mouseenter',event);
});
const foodcontainer=document.getElementById('food-container');
foodcontainer.addEventListener('mouseenter',(e)=>{
   console.log('mou',e);
});
document.addEventListener('mouseleave',(e)=>{
   console.log('mouseleave',e);
});
document.addEventListener('mousemove',(e)=>{
   console.log('mousemove',e);
});
document.addEventListener('mouseout',(e)=>{
   console.log('mouseout',e);
});
document.addEventListener('mouseover',(e)=>{
   console.log('mouseover',e);
});
document.addEventListener('dblclick',(e)=>{
   console.log('dblclick',e);
});
document.addEventListener('mouseup',(e)=>{
   switch(e.which){
      case 1:
         alert("left click");
         break;
      case 2:
         alert("middle click");
         break;
      case 3:
         alert("right click");
         break;
      default:
         alert("unknow click"+event.which+'is pressed');
   }
});
document.addEventListener('keypress',(e)=>{
   console.log('keypress',e);
});
document.addEventListener('keyup',(e)=>{
   console.log('keyup',e);
});
document.addEventListener('keydown',(e)=>{
   console.log(`keydown ${e.key} code ${e.code}`);
});*/
document.addEventListener('keyup',(e)=>{
   switch(e.key){
      case "ArrowUp":
         alert('up');
         break;
      case "ArrowDown":
         alert('douwn');
         break;
         case "ArrowRight":
         alert('right');
         break;
         case "ArrowLeft":
         alert('left');
         break;
      default:
         alert("unknown");
         break;
   }
});