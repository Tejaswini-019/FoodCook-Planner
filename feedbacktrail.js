
/*console.log(nameel);
nameel.addEventListener('focus',()=>{//it will used for input field
    console.log('focused');
})
nameel.addEventListener('blur',()=>{
    console.log('blur');
});
nameel.addEventListener('input',(e)=>{
    console.log(`you have entered: ${e.target.value}`);
})
nameel.addEventListener('change',(e)=>{
    console.log(`change event:${e.target.value} `);
})
nameel.addEventListener('cut',(e)=>{
    console.log(`cut:`);
})
nameel.addEventListener('copy',(e)=>{
    console.log(`copy:`);
})
nameel.addEventListener('paste',(e)=>{
    console.log(`paste:`);
})
const handle=(e)=>{
    e.preventDefault();
   // nameel.value='anbu';//change value
    //console.log(nameel.value);
    //console.log(nameel.value.min);
    //nameel.disabled=true;
    //nameel.readOnly=true

    const formData=new FormData(formel);
};
formel.addEventListener('submit',handle);*/
const formel=document.forms.feedback;
//checkbox
const hobbiesel=formel.elements.hobbies;
const terms=formel.elements.terms;
//const list=[...hobbiesel];
console.log(terms);
//attributes check box
console.log(terms.value);
//2.events
formel.addEventListener('change',(e)=>{
    console.log(e.target.checked);
});
terms.addEventListener('click',(e)=>{
    if(e.target.checked){
        let confir=confirm('here are some terms do you accept?');
        if(!confir){
            e.preventDefault();
        }
    }
});
//term.select();
//term.checked=true;
//list.forEach((e)=>{
   // console.log(e.checked);
//});
//radio
const nameel=formel.elements.fullName;
const categoryEl=formel.elements.type;
const inputcategory=document.querySelector('#input-categories');
const allcategories=[...categoryEl];
//console.log(inputcategory);
inputcategory.addEventListener('change',(cat)=>{
    const checked=allcategories.find((cat)=>{
        return cat.checked;
    });
    console.log('selected:',checked.value);
    console.log(cat.target.value);//same as checked.value
});
//allcategories[1].select();// allcategories[1].checked=true;
allcategories.forEach(category=>{
   // console.log(category);
    //console.log(category.value);
    //console.log(category.checked);
});
//inputcategory.addEventListener('click',(e)=>{
//    alert(`Thank you for ${e.target.value}`)
//})
inputcategory.addEventListener('change',(e)=>{
    //const checked=allcategories.find((category)=>category.checked);//array
    const checked=e.target;//event
    if(checked.value==='contribution'){
       setTimeout(()=>{
        alert('thank you for your contribution')
       },500);
    }
    
});

const namegreet=document.querySelector('#nameGreet');
nameel.addEventListener('input',(event)=>{
    namegreet.innerText=`Hello ${event.target.value},`;
});

