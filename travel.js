var emailError=document.getElementById('email-error');
var passwordError=document.getElementById('password-error');
var submitError=document.getElementById('submit-error');

function validateEmail(){
    var email=document.getElementById('condact-email').value;
   if(email.length==0){
    emailError.innerHTML="eamil must required";
    return false;
}
if(!email.match(/^[A-za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  emailError.innerHTML='Email invalid';
  return false;
}
emailError.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #2c511f;"></i>';
return true;
}

function validatepassword(){
    var password=document.getElementById('contact-password').value;
    if(password.length == 0){
        passwordError.innerHTML="password must required";
    return false;
    }
    if(!password.match(/^[A-Za-z]\w{7,14}$/)){
        passwordError.innerHTML='password invalid';
        return false;
    }
    passwordError.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #2c511f;"></i>';
return true;
}
function validateForm(){
    if(  !validateEmail() || !validatepassword()){
     submitError.style.display='block';
     submitError.innerHTML='please fix error to submit';
     setTimeout(function(){submitError.style.display='none'},3000);
     return false;
    }
   
   }

