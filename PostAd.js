const input = document.getElementById("input");
const submitBtn = document.querySelector('.submit');

input.addEventListener("keyup",(e)=>{
    const value = e.currentTarget.value;
    if(value == ""){
        submitBtn.disabled = true;
    }
    else{
        submitBtn.disabled = false;
    }
});

        function pop(){
        alert("Payment Successfull");
        open ("index.html");
    }
    