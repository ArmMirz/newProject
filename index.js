function rotateArrayRight(arr){
	let newArr = [];
	let middArr = [];
	for(let i = 0; i < arr[i].length; i++){
		for(let k = arr.length-1; k >= 0; k--){
			newArr.push(arr[k][i]);
		}
		middArr.push(newArr);
		newArr = [];
	}
	return middArr;

}
rotateArrayRight([[1,2,3], [4,5,6], [7,8,9], [3,2,1], [6,5,4], [9,8,7]]);



function rotateArrayLeft(arr){
	let newArr = [];
	let middArr = [];
	for(let i = 2; i >= 0; i--){
		for(let k = 0; k < arr.length; k++){
			newArr.push(arr[k][i]);
		}
		middArr.push(newArr);
		newArr = [];
	}
	return middArr;

}
rotateArrayLeft([[1,2,3], [4,5,6], [7,8,9], [3,2,1], [6,5,4], [9,8,7]]);

function moveDown(arr){
	let x = 4, y = 0;
	for(let i = y + 4; i > y; i--){
		for(let j = x; j < x+4; j++){
			arr[i][j] = arr[i-1][j];
			arr[i-1][j] = 0;
		}
	}
y++;
}
