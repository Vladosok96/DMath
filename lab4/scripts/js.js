function run() {
	let inputData = document.getElementById("input-field").value.split("\n");
	console.log(inputData);

	let arrWidth = inputData[0].split(" ").length;
	let Vald = 0;
	for (let i = 0; i < inputData.length; i++) {
		let splitPieceOfData = inputData[i].split(" ");

		for (let j = 0; j < splitPieceOfData.length; j++) {
			if (Number.isInteger(splitPieceOfData[j])){
				Vald = 1;
			}
		}

		if (splitPieceOfData.length != arrWidth) {
			Vald = 2;
		}
	}

	if (Vald == 0) {
		
	}
	else if (Vald == 1){
		alert("В матрице не может быть элементов, отличных от нуля или единицы!");
	}
	else {
		alert("Матрица не прямоугольная!");
	}
}