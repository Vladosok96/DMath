function isContents(arr, target) {
  	for (var i = 0; i < arr.length; i++) {
    	if (arr[i] == target) return true;
  	}
  	return false;
}

function normalize(arr) {
	result = [];
	while (arr.length) {
		if (!isContents(result, arr[0])) {
			result.push(arr[0]);
		}
		arr.shift();
	}
	return result;
}

var input1, input2;
var input1tmp, input2tmp;
var result;

function bruh() {
	alert("bruh");
	return 0;
}

function combination() {
	input1tmp = input1;
	input2tmp = input2;
	result = [];
	while (input1tmp.length) {
		if (!isContents(result, input1tmp[0])) {
			result.push(input1tmp[0]);
		}
		input1tmp.shift();
	}
	while (input2tmp.length) {
		if (!isContents(result, input2tmp[0])) {
			result.push(input2tmp[0]);
		}
		input2tmp.shift();
	}
	console.log(result);
	return result;
}
function intersection() {
	input1tmp = input1;
	input2tmp = input2;
	result = [];
	for (var i = 0; i < input1tmp.length; i++) {
		if (isContents(input2tmp, input1tmp[i])) {
			result.push(input1tmp[i]);
		}
	}
	console.log(result);
	return result;
}
function addition() {
	input1tmp = input1;
	input2tmp = input2;
	result = [];
	for (var i = 0; i < input1tmp.length; i++) {
		if (!isContents(input2tmp, input1tmp[i])) {
			result.push(input1tmp[i]);
		}
	}
	console.log(result);
	return result;
}
function difference() {
	input1tmp = input1;
	input2tmp = input2;
	result = [];
	for (var i = 0; i < input1tmp.length; i++) {
		if (!isContents(input2tmp, input1tmp[i])) {
			result.push(input1tmp[i]);
		}
	}
	for (var i = 0; i < input2tmp.length; i++) {
		if (!isContents(input1tmp, input2tmp[i])) {
			result.push(input2tmp[i]);
		}
	}
	console.log(result);
	return result;
}

function submitello() {
	input1 = document.getElementById("input1").value.split(" ");
	input2 = document.getElementById("input2").value.split(" ");

	input1 = normalize(input1);
	input2 = normalize(input2);

	document.getElementById("intersection").innerHTML = intersection();
	document.getElementById("addition").innerHTML = addition();
	document.getElementById("difference").innerHTML = difference();
	document.getElementById("combination").innerHTML = combination();
	return 0;
}