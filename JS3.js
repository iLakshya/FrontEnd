const comp1 = [
    {
      first_name: "Ben",
      last_name: "Almond",
      age: 28,
      position: "Senior Engineer",
      company: "ABC",
      location: "TVM",
      appraisal: 0,
    },
    {
      first_name: "Andrew",
      last_name: "Lords",
      age: 22,
      position: "Engineer",
      company: "ABC",
      location: "TVM",
      appraisal: 3,
    },
    {
      first_name: "Arathi",
      last_name: "A",
      age: 42,
      position: "PM",
      company: "ABC",
      location: "TVM",
      appraisal: 9,
    },
  ];
  
  const comp2 = [
    {
      first_name: "Subin",
      last_name: "Viswa",
      age: 28,
      position: "Engineer",
      company: "ABC",
      location: "Kochi",
      appraisal: 1,
    },
    {
      first_name: "Dev",
      last_name: "Raj",
      age: 21,
      position: "Architect",
      company: "ABC",
      location: "Kochi",
      appraisal: 2,
    },
    {
      first_name: "Thomas",
      last_name: "Mathew",
      age: 28,
      position: "Architect",
      company: "ABC",
      location: "Kochi",
      appraisal: 5,
    },
    {
      first_name: "Deepa",
      last_name: "Thomas",
      age: 31,
      position: "Senior Engineer",
      company: "ABC",
      location: "Kochi",
      appraisal: 4,
    },
    {
      first_name: "Antony",
      last_name: "Thomas",
      age: 31,
      position: "Senior Engineer",
      company: "ABC",
      location: "Kochi",
      appraisal: 4, 
    },
  ];


// Task1 
// Create a new array named employees by merging ‘comp1’ and ‘comp2’ using a spread operator.

const employees = [...comp1, ...comp2];
console.log(employees);

// Task2
// Iter the whole employee list and log the employee's full name by creating a function. (Use spread operator, rest parameters, Object destructuring, array.join)

for(i=0; i < 8; i++){
    console.log(employees[i]);
}

function full_name(){
    for(i=0;i<7;i++){
        const merge = employees[i].first_name + " " + employees[i].last_name;
        console.log(merge);
    }
}
full_name();


console.log(" ");
// Task 3
// List all employees having the role 'Engineer' and age above '25'

for(i=0;i<8;i++){
    if(employees[i].position === 'Engineer' && employees[i].age >25){
        console.log("Engineers that are above 25 are:");
        console.log(employees[i].first_name + " " + employees[i].last_name);
    }
}

console.log(" ");
// Task 4
// Create a filter function to sort employees by position, by default the filter need to sort employee having the role 'Architect'




// Task 5
// Create a function for checking whether all the employees got appraisals once.

function appraisal_status(){
    for(i=0;i<8;i++){
        if(employees[i].appraisal < 1){
            console.log("All employees didn't get their appraisal");
            break;
        }
        else{
            console.log("All employees have got their appraisal atleast once");
        }
    }
}
appraisal_status();

console.log(" ");

// Task 6
// Create a function for checking whether any of the employees got an appraisal.

function appraisal_stats(){
    let count = 0;
    for(i=0;i<8;i++){
       if(employees[i].appraisal > 0){
            count++;
       }
    }
    console.log(count + " number of employees have got a appraisal");
}
appraisal_stats();


// Task 7
// Create a function for setting employee appraisal count. By default, it should be zero.



// Task 8
// Without modifying the existing employee list, set the appraisal count of all employees to 3 and check whether all employees got appraisal 3 times.

let count = 0;
function three_appraisal(){
    for(i=0;i<8;i++){
        employees[i].appraisal = 3;
        if(employees[i].appraisal === 3){
            count++;
        }
    }
}
three_appraisal();
if(count === 8){
    console.log("All employees have 3 appraisals");
}
 
// Task 9
// Calculate the total count of appraisals provided for all employees.

let sum = 0;
for(i=0;i<8;i++){
    sum = sum + employees[i].appraisal;
}
console.log(sum);

// Task 10
// Create a function for listing employees' age as an array list the number of people in each group (age distribution).

function age_dist(){
    let num = 0;
    for(i=0;i<8;i++){
        if(employees[i].age>20 && employees[i].age<=25){
            num++;
        }
    }
    console.log(num + " people are in age group 21-25");
    let num1 = 0
    for(i=0;i<8;i++){
        if(employees[i].age>25 && employees[i].age<=30){
            num1++;
        }
    }
    console.log(num1 + " people are in age group 25-30");
    let num2 = 0
    for(i=0;i<8;i++){
        if(employees[i].age>30 && employees[i].age<=40){
            num2++;
        }
    }
    console.log(num2 + " people are in age group 30-40");
    let num3 = 0
    for(i=0;i<8;i++){
        if(employees[i].age>40 && employees[i].age<=50){
            num3++;
        }
    }
    console.log(num3 + " people are in age group 40-50");
}
age_dist();