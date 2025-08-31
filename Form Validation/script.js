let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#loginForm");

form.addEventListener("submit", (dets)=>{
    dets.preventDefault(); 

    document.querySelector("#emailError").textContent= "";
    document.querySelector("#passwordError").textContent= "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


   const  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   let emailans = emailRegex.test(email.value);
  let passwordans =  passwordRegex.test(password.value);

  let isValid =true

  if(!emailans){
    document.querySelector("#emailError").textContent= "Email is incorrect";
    document.querySelector("#emailError").style.display = "Initial";
    isValid=false
  }

    if(!passwordans){
    document.querySelector("#passwordError").textContent= "password is wrong";
     document.querySelector("#passwordError").style.display = "Initial";
     isValid = false

  }

if(isValid){
    document.querySelector("#resultMessage").textContent= "login Successfull";
    document.querySelector("#resultMessage").style.display = "Initial";
}




})