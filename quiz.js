
var heightInput = document.getElementById("HeightInput");
var characterInput = document.getElementById("CharacterInput");

	function checkInput (click){
	//console.log("Greg Says", tree.height);
		if(!heightInput.value || !characterInput.value || characterInput.value.length > 1){
		alert("Please Make Sure You Have The Proper Inputs Before Trying To Grow Your Tree")
		} 	else { 
		var tree ={
		height: heightInput.value,
		character: characterInput.value
}
		growTree(tree);
}	

}

	//console.log("Tree.height", tree.height.value);
	function growTree(tree){
		var blank = " ";
		for (i = 0; i < tree.height; i++){
		//console.log("TreeHeight", tree.height);
			var charTree= (i * 2) + 1;
			var blankTree= (tree.height - 1) - i;
			console.log("Here is Your Tree", blank.repeat(blankTree) + tree.character.repeat(charTree));
}
}


	//Get my grow button out of html.
growbtn = document.getElementById("grow");
	//when my grow button is clicked run my checkInput function
growbtn.addEventListener("click", checkInput);














