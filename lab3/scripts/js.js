function run() {
	let inputData = document.getElementById("input-field").value.split("\n");
	console.log(inputData);

	let arrWidth = inputData[0].split(" ").length;
	let isVald = true;
	for (let i = 1; i < inputData.length; i++) {
		let splitPieceOfData = inputData[i].split(" ")
		if (splitPieceOfData.length != arrWidth) {
			isVald = false;
		}
	}

	if (isVald) {
		
	}
	else {
		alert("Матрица не прямоугольная!");
	}
}