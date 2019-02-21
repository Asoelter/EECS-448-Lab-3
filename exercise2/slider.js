var list=["batman.jpg", "owen.jpg", "michael.jpg", "bjarne.jpg", "dennis.jpg"]
var index = 0;

function nextClicked()
{
	let image = document.getElementById("display");

	index = (index + 1) % 5;
	image.src = list[index];
}

function prevClicked()
{
	let image = document.getElementById("display");

	index--;

	if(index < 0)
	{
		index = 4;
	}

	image.src = list[index];
}
