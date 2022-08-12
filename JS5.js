
// Question 1

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
let new_array=[...new Set(array)];
console.log(new_array);

// Question 2

const firstArray = [2, 2, 4, 1];
const secondArray = [1, 2, 0, 2];

function intersection(firstArray, secondArray){
    const intersectionResult = firstArray.filter(i => secondArray.indexOf(i) !== -1);
    return intersectionResult;
}

const result = intersection(firstArray, secondArray);
console.log(result);

// Question 3

const array1 = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,]
var filterArray = array1.filter(function (el) {
    return el != null;
});
console.log(filterArray);


// Question 4

const cricket = [{
    name: 'Sachin Tendulkar',
    nationality: 'India',
    retired: true
    }, {
    name: 'Shane Warne',
    nationality: 'Australia',
    retired: true
    }, {
    name: 'Virat Kohli',
    nationality: 'India',
    retired: false
}];

for(i=0;i<cricket.length;i++){
    if(cricket[i].retired === true){
        console.log(cricket[i]);
    }
}


// Question 5

function first(array,n){
    for (i=0;i<n;i++){
        if (n>0){
            return array.slice(0,n);}
    }
}

// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// Question 6

function checkValue(value, arr) {
    var status = 'Not exist';

    for (var i = 0; i < arr.length; i++) {
        var name = arr[i];
        if (name == value) {
            status = 'Exist';
            break;
        }
    }

    return status;
}

console.log(checkValue(2, [1,2,3,4,5]));


// Question 7

const arrayy = [1, 2, 3];

let popped = arrayy.pop();

console.log(arrayy);

// Question 8


function check_five(array){
    for(i=0;i<array.length;i++){
        if(array[i] > 5){
            console.log("Array contains atleast one element greater than 5");
            break;
        }
    }
}
check_five([1,2,3,4,5,8]);


// Question 9

const obj1 = {
    'testable': true,
    'removable': false,
    'printable': false,
    'changeable': true
}
let newEle = {completed: false};
const obj2 = Object.assign(obj1, newEle);

console.log(obj2);

// Question 10

function remove(array, position){
    for(i=0;i<array.length;i++){
        array.splice(position,1);
    }
}
remove([1,2,3,4,5], 3);