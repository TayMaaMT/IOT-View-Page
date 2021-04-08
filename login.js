var token = localStorage.getItem('token');

if(!token){
var email = document.getElementById('email');
var password = document.getElementById('password');
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('password');

    // entered data from the login-form
    var email = document.getElementById('email');
    var password = document.getElementById('password');
   
    // check if stored data from register-form is equal to data from login form
    if(email.value !== 'admin@gmail.com' || password.value !== 'admin') {
        alert('ERROR');
    }else {
        localStorage.setItem('token', 'wellcom to IOT site admin');
      
        window.location.href='index.html'
       
        
       
       
    }
}}else{
    window.location.href='index.html'
  }
 