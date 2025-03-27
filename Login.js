let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let proceedBtn = document.querySelector('.proceed');
let input = document.querySelector("input");
let remove = document.querySelector(".remove");

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';

    title.innerHTML = 'Sign In'
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    proceedBtn.onclick=()=>{
        window.alert(" Logged in Successful");
        window.open ("home.html");
    }
});
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '60px';

    title.innerHTML = 'Sign Up'
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    
});

function show_message(){
    alert("Sign Up Successful")
    
}
