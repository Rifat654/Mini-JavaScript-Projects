let nam = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
let form = document.getElementById("form");

// error text 
let N_error =  document.getElementById("N_error");
let E_error =  document.getElementById("E_error");
let P_error =  document.getElementById("P_error");


form.addEventListener("submit", (e)=>{

     var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
     
    if(nam.value === "" || nam.value == null){

        e.preventDefault();
        N_error.innerHTML = "Name is required";
      

    } else{
          N_error.innerHTML = " ";
    }
    
    if(!email.value.match( email_check)){

          e.preventDefault();
        E_error.innerHTML = "Valid Email is required";

    } else{
          E_error.innerHTML = " ";
    }
    
    if(password.value.length <= 5 ){

          e.preventDefault();
        P_error.innerHTML = "Password must be more than 6 character";

    } else{
         P_error.innerHTML = " ";
    }
     if(password.value.length >= 20 ){

          e.preventDefault();
        P_error.innerHTML = "Password must be less than 20 character";

    }
    
     if(password.value === "password" ){

          e.preventDefault();
        P_error.innerHTML = "Password can't be password";

    }
    

});