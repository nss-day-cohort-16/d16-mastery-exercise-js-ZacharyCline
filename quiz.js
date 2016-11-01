// //create a tree function
// It accepts a single object as an argument. The object should have two key/value pairs.

// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.
// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// Grow your tree
	
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.

var tree ={
	height:
	character:
}

function checkInput (wow){

	tree.height = document.getElementById("HeightInput").value;
	tree.character = document.getElementById("CharacterInput").value;

	if(!tree.height || !tree.character || tree.character.length > 1){
	alert("Please Make Sure You Have The Proper Inputs Before Trying To Grow Your Tree")
} 	else {
	
	growTree(tree)

}

}
function growTree(){
	var blank = " ";
	var charTree= (i * 2) + 1;
	var blankTree= (tree.height - 1) - i;
	for (i = 1; i < tree.height; i++);
		console.log("Here is Your Tree", blank.repeat(blankTree) + tree.character.repeat(charTree));

}




//Get my grow button out of html.
growbtn.document.getElementById("grow");
//when my grow button is clicked run my growTree function
growbtn.addEventListener("click", checkInput);



// function tree(){


// var object ={}
// Height: document.getElementById("HeightInput").value;
// Character: document.getElementById("CharacterInput").value;



// 	if (!object.Height || !object.Character) {
// 		alert("WHOA! We Need to Know How to Grow Your Tree!");
// 	} else {
// 			var emptyspace = " "
// 		for (i = 0; i < object.Height.length; i++) {
// 			var spaces = object.Height - i;
// 			var char = 1 + (2 * i);
// 		}
// 	}
// }

















                

//If user has filled both text boxes and cursor is within one of the input fields, make an event listener for the enter key to run the tree function.
//Make an event listener for the grow your tree button that runs the function.