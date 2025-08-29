// login button
document.getElementById("login-button")
.addEventListener("click", function() {
//    console.log("Login button clicked");
const mobileNumber = 12345678901;
const pinNumber = 1234;
const mobileNumberValue = document.getElementById('mobile-number').value;
const mobileNumberValueConvert = parseInt(mobileNumberValue);

const pinNumberValue = document.getElementById("pin-number").value
const pinNumberValueConvert = parseInt(pinNumberValue);
if(mobileNumberValueConvert === mobileNumber && pinNumberValueConvert === pinNumber){
window.location.href ="./about.html";
}
else{
    alert("Login failed. Please check your mobile number and pin.");
}
});