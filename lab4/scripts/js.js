function run() {
	let inputData = document.getElementById("input-field").value.split("\n");
	console.log(inputData);

	let Vald = 0;
	for (let i = 0; i < inputData.length; i++) {
		let splitPieceOfData = inputData[i].split(" ");

		for (let j = 0; j < splitPieceOfData.length; j++) {
			if (isNaN(splitPieceOfData[j]) && splitPieceOfData[j] != "i"){
				Vald = 1;
			}
		}

		if (splitPieceOfData.length != inputData.length) {
			Vald = 2;
		}
	}

	if (Vald == 0) {
		
	}
	else if (Vald == 1){
		alert("В матрице могут быть только числа либо буква \"i\"!");
	}
	else {
		alert("Матрица должна быть квадратной!");
	}
}