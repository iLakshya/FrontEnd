// Question 1



// part a
const array = [1, 2, 3, 1, 4, 10, 15, 16, 5, 12, 18, 19, 2, 20];

let multiple = [];
for(i=0;i<array.length;i++){
    if(array[i]%2===0){
        multiple.push(array[i]);
    }
}
console.log(multiple);

// part b

array.length = 0;
console.log(array);

array.splice(0, array.length);
console.log(array);

// part c
let repeatingele = [...new Set(array)];
console.log(repeatingele);

// part d
var array1 = [1,2,3,1,4,10,15,16,5,12,18,19,2,20];
var array2 = [];
array1 = [1,2,3,1,4,10,15,16,5,12,18,19,2,20];
array2 = array1;
if(array2.indexOf(3)!==-1)
{
    console.log("Value Exists");
}
else
{
    console.log("Value doesn't Exists");
}

// Question 2

const students = [
    { name: "A", age: 17, college: "UVCE",stream:'CSE',currentYear:1 },
    { name: "B", age: 19, college: "KEAM",stream:'ECE',currentYear:2 },
    { name: "C", age: 23, college: "UVCE",stream:'EEE',currentYear:4 },
    { name: "D", age: 18, college: "UVCE",stream:'CSE',currentYear:3 },
    { name: "E", age: 22, college: "KEAM",stream:'AEI',currentYear:4 },
    { name: "F", age: 21, college: "NETE",stream:'EEE',currentYear:3 }
]

// task a
let electioncandidates = [];
for(i=0;i<students.length;i++){
    if(students[i].currentYear === 4){
        electioncandidates.push(students[i]);
    }
}
console.log(electioncandidates);

// task b

const arr = students[1];
const index = arr.indexOf('KEAM');
if(index !== -1){
    arr[index] = 'NETE';
}
console.log(arr);


