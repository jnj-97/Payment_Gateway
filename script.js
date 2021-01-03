

var payment_method
var name
var email
var amount
document.getElementById("Credit-Card").addEventListener("click",function(){
	payment_method="Credit Card"
});
document.getElementById("Debit-Card").addEventListener("click",function(){
	payment_method="Debit Card"
});
document.getElementById("Paypal").addEventListener("click",function(){
	payment_method="Paypal"
});
document.getElementById("UPI").addEventListener("click",function(){
	payment_method="UPI"
});
document.getElementById("Net-Banking").addEventListener("click",function(){
	payment_method="Net Banking"
});
var final=document.getElementsByClassName("Final-Button");
final[0].onclick=function(){
name=document.getElementsByClassName("name-input")[0].value;
email=document.getElementsByClassName("email-input")[0].value;
amount=document.getElementsByClassName("amount-input")[0].value;
if (name=="")
{
	document.getElementsByClassName("Extra")[0].innerHTML="Name Field is Empty. Please Fill Proper name and click SUBMIT button again";
}
else if (email=="" || !email.includes('@'))
{
	document.getElementsByClassName("Extra")[0].innerHTML="Invalid Email ID. Please Fill Proper email and click SUBMIT button again";
}
else if (payment_method==undefined)
	{
		document.getElementsByClassName("Extra")[0].innerHTML="Payment Method not Selected. Please Select a Payment Method and Try Again";
	}
else
{
	console.log("Hi")
	document.getElementsByClassName("Extra")[0].innerHTML="";
	var templateParams = {
    Name: name ,
    Email: email,
    Amount: amount,
    Payment_Method: payment_method
};
 
emailjs.send('service_rxupdva', 'template_80m5zlm', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}
}
