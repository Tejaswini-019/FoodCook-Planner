//get form name
//formEl.elements[1];
//const fullNameEl=formEl.elements[0];//index
//const emailEl=formEl.elements[4];//name
/*const fullNameEl=formEl.elements.fullName;//get by using name..
const typeEl=formEl.elements.type;
const emailEl=formEl.elements.email;
const descriptionEl=formEl.elements.description;
const termsEl=formEl.elements.terms;
// same as const {fullname}=formEl.elements;log(fullname.placeholder)
//const {fullName,type,email,description,terms}=formEl.elements;log(fullname,....)//object destructing*
const handle=(e)=>{
    e.preventDefault();
   // const {fullName,type,email,description,terms}=formEl.elements;
   const formData=new FormData(formEl);
   console.log(formData);
   console.log(formData.get('api-key'));
    
};
/*const handleformdata=(e)=>{
    console.log("form data fired");
    const formData=e.formData;
    //usefull methods
    formData.append('api-key','sadsad');
    console.log([...formData.entries()]);
    console.log([...formData.values()]);
    console.log(formData.get('fullName'));
    console.log(formData.getAll("type"));
    console.log([...formData.keys()]);
    //athula ulla array data 
    console.log(formData);
formData.set('hobbies','learning new things');//set the value
//call the value
formData.delete('terms');
console.log([...formData.values()]);
console.log(formData);
};
//const {fullName,type,email,description,terms}=formEl.elements;
//console.log(fullName,type,email,description,terms);
const formEl=document.forms.feedback;
const btn=document.querySelector('form button');
const handle=(e)=>{
    e.preventDefault();
    const formdata= new FormData(formEl);
    /*const data=[...formdata.entries()];
    console.log(data);
   const datastring= data.map(([key,value])=>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
  // console.log(datastring);//old way 
   const datastring2=new URLSearchParams(formdata).toString();
   console.log('urlsearchparams',datastring2);
  //json
  //for browser understand methods 
    //1.querystring=form url send using content-type:application/x-ww-form-urlencoded
    //2.json
    //const jsondata=Object.fromEntries(formdata); or
    const jsondata=JSON.stringify(Object.fromEntries(formdata));//convert javascript object to json object notation for browser understand 
    console.log(jsondata);

};*/
const formEl=document.forms.feedback;
const btn=document.querySelector('form button');
const handle=(e)=>{
    e.preventDefault();
    const formdata= new FormData(formEl);
    const jsondata=JSON.stringify(Object.fromEntries(formdata));
    //convert javascript object to json object notation for browser understand 
    //console.log('JSON body',jsondata);
    /*let x=new XMLHttpRequest();
    x.open('GET','https://reqres.in/api/users/2',true);
    x.onload=function(){
        const obj=JSON.parse(x.responseText);
        document.getElementById('response').innerText=obj.data.first_name;
    };
    x.send();*/
    //2.fetch() send pana axios()
    fetch('https://reqres.in/api/users?page=2',{
        method:"GET",
        //header:{
           // 'Content-Type':'application/json'
        //},
        //body: new FormData(formEl),

    })
    .then((res ) => res.json())
    .then((data)=>{
        //console.log(data.data);
        document.getElementById('response').innerText = JSON.stringify(data.data);
    });
};
formEl.addEventListener('submit',handle);
