function run() {
	let inputData = document.getElementById("input-field").value.split("\n");
	console.log(inputData);

	size = inputData.length;
	var array = new Array(size);

	let Vald = 0;
	for (let i = 0; i < inputData.length; i++) {
		let splitPieceOfData = inputData[i].split(" ");

		array[i] = new Array(size);

		for (let j = 0; j < splitPieceOfData.length; j++) {
			if (isNaN(splitPieceOfData[j]) && splitPieceOfData[j] != "i"){
				Vald = 1;
			}
			else if (i == j) {
				array[i][j] = "0";
			}
			else {
				array[i][j] = splitPieceOfData[j];
			}
		}

		if (splitPieceOfData.length != inputData.length) {
			Vald = 2;
		}
	}

	if (Vald == 0) {
		for (let iter = 0; iter < inputData.length; iter++) {
			var arrayTmp = array;
			console.log(arrayTmp);
		}
	}
	else if (Vald == 1){
		alert("В матрице могут быть только числа либо буква \"i\"!");
	}
	else {
		alert("Матрица должна быть квадратной!");
	}
}