function run() {
	let inputData = document.getElementById("input-field").value.split("\n");
	console.log(inputData);

	let arrWidth = inputData[0].split(" ").length;
	let Vald = 0;
	for (let i = 0; i < inputData.length; i++) {
		let splitPieceOfData = inputData[i].split(" ");

		for (let j = 0; j < splitPieceOfData.length; j++) {
			if (!(splitPieceOfData[j] == 0 || splitPieceOfData[j] == 1)){
				Vald = 1;
			}
		}

		if (splitPieceOfData.length != arrWidth) {
			Vald = 2;
		}
	}

	if (Vald == 0) {
		let checkY = true;
		for (let i = 0; i < inputData.length; i++) {
			let checkX = false;
			let splitPieceOfData = inputData[i].split(" ");
			for (let j = 0; j < arrWidth; j++) {
				if (splitPieceOfData[j] == 1) {
					checkX = true;
				}
			}

			if (!checkX) {
				checkY = false;
			}
		}
		if (checkY) {
			document.getElementById("result").innerHTML = "является";
		}
		else {
			document.getElementById("result").innerHTML = "не является";
		}
	}
	else if (Vald == 1){
		alert("В матрице не может быть элементов, отличных от нуля или единицы!");
	}
	else {
		alert("Матрица не прямоугольная!");
	}
}