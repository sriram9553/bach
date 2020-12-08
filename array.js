var arr=[0,1,2,3,4,5,6,7,8];
arr.pop();
arr.shift();
arr.push(9,10,11,12,13,14,15);
arr.unshift(0,-1,-2,-3,-4);
arr.splice(0,5);
arr.splice(7,0,8);
console.log(arr);
document.write(arr);



var arr=[1,2,3,4,5,6];
var arr1=[7,8,9,10,11];
console.log(arr.concat(arr1)); 