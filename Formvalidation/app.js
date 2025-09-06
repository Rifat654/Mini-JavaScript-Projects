let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
let form = document.getElementById("form");

let N_error =  document.getElementById("N_error");
let E_error =  document.getElementById("E_error");
let P_error =  document.getElementById("P_error");


form.addEventListener("submit", (e)=>{

     var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
     
    if(name.value === "" || name.value == null){
        e.preventDefault();

          

        N_error.innerHTML = "Name is required";
      

    }

})