function run() {
	var inputData = document.getElementById("input-field").value.split("\n");
	console.log(inputData);

	var size = inputData.length;
	var array = new Array(size);
	var tmpInt

	var Vald = 0;
	for (var i = 0; i < inputData.length; i++) {
		var splitPieceOfData = inputData[i].split(" ").filter(elem => elem != false);

		array[i] = new Array(size);

		for (var j = 0; j < splitPieceOfData.length; j++) {
			if (isNaN(splitPieceOfData[j]) && splitPieceOfData[j] != "z"){
				Vald = 1;
			}
			else if (i == j) {
				array[i][j] = "0";
			}
			else {
				array[i][j] = splitPieceOfData[j];
			}
		}
		console.log(splitPieceOfData);
		if (splitPieceOfData.length != inputData.length) {
			Vald = 2;
		}
	}

	if (Vald == 0) {
		for (var iter = 0; iter < inputData.length; iter++) {
			var arrayTmp = array;
			
			for (var i = 0; i < inputData.length; i++) {
				for (var j = 0; j < inputData.length; j++) {
					if (!isNaN(array[i][iter]) && !isNaN(array[iter][j])) {
						tmpInt = parseInt(array[i][iter], 10) + parseInt(array[iter][j], 10);
						if (tmpInt < array[i][j] || array[i][j] == "z") {
							array[i][j] = tmpInt;
						}
					}
				}
			}

		console.log(array);
		}

		var result = "";
		for (var i = 0; i < size; i++) {
			for (var j = 0; j < size; j++) {
				if (!isNaN(array[i][j])) {
					result += "1 ";
				}
				else {
					result += "0 ";
				}
			}
			result += "\n";
		}

		document.getElementById("output-field").innerHTML = result;
	}
	else if (Vald == 1){
		alert("В матрице могут быть только числа либо буква \"z\"!");
	}
	else {
		alert("Матрица должна быть квадратной!");
	}
}