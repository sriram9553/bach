//es6 dicealeration
var add=(...a)=>{
    var sum=0;
    for(var i=0;i>a.length;i++){
        sum =sum+a[i]
    }
    console.log(sum);
}
add(1,85,45,47)


const ages=[15,45,23,24];
const ases1=[14,15,55,45];

console.log(...ages,...ases1);


const details={
    name:'sriram',
    age:'23',
    adress:'ongole',
    phone:'9515655200'
}

const {name,age,...remaining}=details;
console.log(name,age,remaining);

