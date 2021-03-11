function run() {
	let inputData = document.getElementById("input-field").value.split("\n");
	console.log(inputData);

	let size = inputData.length;
	var array = new Array(size);
	let tmpInt

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
			
			for (let i = 0; i < inputData.length; i++) {
				for (let j = 0; j < inputData.length; j++) {
					if (!isNaN(array[i][iter]) && !isNaN(array[iter][j])) {
						tmpInt = parseInt(array[i][iter], 10) + parseInt(array[iter][j], 10);
						if (tmpInt < array[i][j] || array[i][j] == "i") {
							array[i][j] = tmpInt;
						}
					}
				}
			}

		console.log(array);
		}

		let a, b;
		a = document.getElementById("a-input").value;
		b = document.getElementById("b-input").value;

		document.getElementById("a").innerHTML = a;
		document.getElementById("b").innerHTML = b;
		if (array[a - 1][b - 1] != "i") {
			document.getElementById("result").innerHTML = array[a - 1][b - 1];
		}
		else {
			document.getElementById("result").innerHTML = "нет дороги";
		}
	}
	else if (Vald == 1){
		alert("В матрице могут быть только числа либо буква \"i\"!");
	}
	else {
		alert("Матрица должна быть квадратной!");
	}
}