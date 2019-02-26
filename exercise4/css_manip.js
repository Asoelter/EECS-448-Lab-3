function update()
{
	let redBorderBox		= document.getElementById("redBorderBox");
	let greenBorderBox		= document.getElementById("greenBorderBox");
	let blueBorderBox		= document.getElementById("blueBorderBox");
	let redBackgroundBox	= document.getElementById("redBackgroundBox");
	let greenBackgroundBox	= document.getElementById("greenBackgroundBox");
	let blueBackgroundBox	= document.getElementById("blueBackgroundBox");
	let widthBox			= document.getElementById("widthBox");

	let redBorderValue			= redBorderBox.value.toString();
	let greenBorderValue		= greenBorderBox.value.toString();
	let blueBorderValue			= blueBorderBox.value.toString();
	let redBackgroundValue		= redBackgroundBox.value.toString();
	let greenBackgroundValue	= greenBackgroundBox.value.toString();
	let blueBackgroundValue		= blueBackgroundBox.value.toString();
	let widthValue				= widthBox.value.toString();

	let text = document.getElementById("outputText");

	let borderColor = redBorderValue;
	borderColor += ", ";
	borderColor += greenBorderValue;
	borderColor += ", ";
	borderColor += blueBorderValue;

	let backgroundColor = redBackgroundValue;
	backgroundColor += ", ";
	backgroundColor += greenBorderValue;
	backgroundColor += ", ";
	backgroundColor += blueBorderValue;

	if(validate(borderColor) && validate(backgroundColor))
	{
		text.style.backgroundColor = "rgb(" + borderColor + ")";
		text.style.borderColor = "rgb(" + backgroundColor + ")";
		widthBox.cols = widthValue;
	}
	else
	{
		alert("No values were entered")
	}
}

function validate(text)
{
	if(text == ", , ")
	{
		return false;
	}

	return true;
}
