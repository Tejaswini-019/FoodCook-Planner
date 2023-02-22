const form=document.querySelector('form');
const input=document.querySelector('form input');
const check=document.querySelector("form input[type='checkbox']");
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(!check.checked){
        alert("please check the terms");
        return ;
    }
        alert("name length must be 3 char ");
        return ;
    //event.preventDefault();
    console.log('form submitted',input.value,check.checked);
    console.log('default prevent',event.defaultPrevented);
});
form>Form
            <div>
                <input type="text" placeholder="Full Name">
            </div>
            <div>
                <label for="terms" style="font-size:10px;">
                    <input type="checkbox" id="terms">I accept the<a href="" onclick="return false">Terms & conditions</a>
                </label>
            </div>
            <button>submit</button>
    </form>