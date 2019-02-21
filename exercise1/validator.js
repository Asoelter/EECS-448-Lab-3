function validate()
{
	let textbox1 = document.getElementById("box1");
	let textbox2 = document.getElementById("box2");

	let password1 = textbox1.value;
	let password2 = textbox2.value;

	let successLabel = document.getElementById("success");


	if(password1 == password2 && !(password1.length < 8 || password2.length < 8))
	{
		alert("Passwords are valid");
	}
	else
	{
		alert("Passwords are invalid");
	}
}
