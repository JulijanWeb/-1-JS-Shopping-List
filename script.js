var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var resetButton = document.getElementById("reset");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	resetButton.style.display = "block";
	
	var removeButton = document.createElement("button");
	removeButton.appendChild(document.createTextNode("x"));
	removeButton.classList.add("deleteButton");
    li.appendChild(removeButton);
	removeButton.addEventListener("click", function(){
		li.remove();
		if (ul.children.length === 0) {
            resetButton.style.display = "none";
        }
	});
	if (ul.children.length === 0) {
        resetButton.style.display = "none";
    } else {
        resetButton.style.display = "block";
    }

}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



enter.addEventListener("click", addListAfterClick);
userinput.addEventListener("keypress", addListAfterKeypress);
resetButton.addEventListener("click", resetList);


function resetList() {

	while (ul.li) { // petlja prolazi kroz sve elemente i briše ih
	  ul.removeChild(ul.li);
	}
	resetButton.classList.add("hidden"); // skriva gumb reset
	ul.innerHTML = "";
	resetButton.style.display = "none";
}

