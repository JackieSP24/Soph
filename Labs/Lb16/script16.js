function submitForum() {
  let userName=document.userform.input_username.value;
  let userEmail=document.userform.input_email.value;
  let usePhone=document.userform.input_phoneNum.value;
    let
userNameResult=document.getElementById("nameResult");
    let 
userEmailResult=document.getElementById("emailResult");
    let 
userPhoneResult=document.getElementById("phoneNumResult");
  
  nameResult.innerHTML = userName;
  emailResult.innerHTML = userEmail;
  phoneResult.innerHTML = userPhone;
  
console.log(userName,userEmail,userPhoneNum);
document.getElementById("before").innerHTML="";
}

var x = document.getElementById("before");
var y = document.getElementById("after");
if (x.style.display === "none")
  x.style.display= "block"
x.style.display="1";
y.style.display