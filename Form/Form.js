const fullName = document.querySelector("#fullName");
const userName = document.querySelector("[data-userName]");
const nameError = document.querySelector("[data-errorName]");
const userNameError = document.querySelector("[data-errorUsername]");
const errorPhone = document.querySelector("[data-errorPhone]");
const phone = document.querySelector("[data-phone]");
const errorEmail =document.querySelector("[data-errorEmail]");
const email = document.querySelector("[data-email]");

const passwordInput = document.querySelector("[data-passwordInput]");
const errorPassword = document.querySelector("[data-errorPassword]");

const confirmPassword =document.querySelector("[data-confirmedPassword]");
const errorConfirmPassword =document.querySelector("[data-passwordNotSame]");



function fullNameCheck(){
    let letters = /^[A-Za-z\s]+$/;
   if(fullName.value.match(letters))
     {
        nameError.classList.remove("active");
     }
   else
     {
        nameError.classList.add("active");
     }
}

function userNameCheck(){
    let letters = /^[A-Za-z0-9_]+$/;
    if(userName.value.match(letters)){
        userNameError.classList.remove("active");
    }
    else{
        userNameError.classList.add("active");
    }
}

function checkPhone(){
    let numb = /^\d{10}$/;
    if(phone.value.match(numb)){
        errorPhone.classList.remove("active");
    }else{
        errorPhone.classList.add("active");

    }
}

function checkEmail(){
    let emailArray = ['@gmail.com','@charusat.edu.in','@charusat.org'];
    let count = 0; 
    emailArray.forEach((index) => {
         if(email.value.match(index)){
               count++;
           console.log("its present");
               
           }
           else{
               console.log("its not present");
           }
       })    
    if(count === 1){
      errorEmail.classList.remove("active");
    }
    else{
        errorEmail.classList.add("active");
    }
    
}

function checkPassword(){
    let pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
    if(passwordInput.value.match(pass)){
        console.log("password is good")
        errorPassword.classList.remove("active");
    }
    else{
        console.log("password is bad");

        errorPassword.classList.add("active");

    }
}

function confirmationPassword(){
    if(confirmPassword.value === passwordInput.value)
    {
        errorConfirmPassword.classList.remove("active");
    }
    else{
        errorConfirmPassword.classList.add("active");

    }
}

fullName.addEventListener("input",fullNameCheck);
userName.addEventListener("input",userNameCheck);
phone.addEventListener("input",checkPhone);
email.addEventListener("blur",checkEmail);
passwordInput.addEventListener("input",checkPassword);
confirmPassword.addEventListener("blur",confirmationPassword);
