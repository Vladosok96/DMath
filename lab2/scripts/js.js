function trans(arr) {
	size = arr.length;

	var arr2 = new Array(size);
	for (let i = 0; i < size; i++) {
		arr2[i] = new Array(size);
		for (let j = 0; j < size; j++) {
			arr2[i][j] = 0;
			for (let solve = 0; solve < size; solve++) {
				arr2[i][j] += arr[i][solve] * arr[solve][j];
			}
		}
	}

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			if (arr2[i][j] != 0 && arr[i][j] == 0) {
				return false;
			}
		}
	}
	return true;
}

function refl(arr) {
	size = arr.length;

	for (let i = 0; i < size; i++) {
		if (arr[i][i] != 1) {
			return false;
		}
	}
	return true;
}

function arefl(arr) {
	size = arr.length;

	for (let i = 0; i < size; i++) {
		if (arr[i][i] != 0) {
			return false;
		}
	}
	return true;
}

function simm(arr) {
	size = arr.length;

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			if (arr[i][j] != arr[j][i]) {
				return false;
			}
		}
	}
	return true;
}

function asimm(arr) {
	size = arr.length;

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			if (arr[i][j] == 1 && arr[j][i] == 1) {
				return false;
			}
		}
	}
	return true;
}

function сsimm(arr) {
	size = arr.length;

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			if (arr[i][j] == 1) {
				return false;
			}
		}
	}
	return true;
}

function run() {
	let inputData = document.getElementById("input-field").value.split(/\s/);

	console.log(inputData);

	size = document.getElementById("size-field").value;
	var arr = new Array(size);
	for (let i = 0; i < size; i++) {
		arr[i] = new Array(size);
		for (let j = 0; j < size; j++) {
			arr[i][j] = 0;
		}
	}

	if (inputData[0] == [""] && inputData.length == 1) {
	}
	else if (inputData.length % 2 == 0) {
		for (let i = 0; i < inputData.length; i += 2) {
			arr[inputData[i + 1] - 1][inputData[i] - 1] = 1;
		}
	}
	else {
		confirm("Появились лишние координаты!");
	}

	var output = new String();
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			output += arr[i][j];
			output += " ";
		}
		output += "\n";
	}
	document.getElementById("output-field").value = output;

	document.getElementById("refl").innerHTML = refl(arr);
	document.getElementById("arefl").innerHTML = arefl(arr);
	document.getElementById("simm").innerHTML = simm(arr);
	document.getElementById("asimm").innerHTML = asimm(arr);
	document.getElementById("csimm").innerHTML = сsimm(arr);
	document.getElementById("trans").innerHTML = trans(arr);

	console.log(arr);
}