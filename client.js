const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


function employeeBonuses(employee) {
  let bonusPercentage = 0;
  let totalBonus = 0;

  if (employee.reviewRating === 3) {
    bonusPercentage += 0.04;
  } else if (employee.reviewRating === 4) {
    bonusPercentage += 0.06;
  } else if (employee.reviewRating === 5) {
    bonusPercentage += 0.1;
  }
  // Below, calculate additional 15%
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 0.05;
  }
  if (employee.annualSalary >= 65000) {
    bonusPercentage -= 0.01;
  } 
  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  }
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }
  
totalBonus = Math.round (employee.annualSalary * bonusPercentage);

  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalBonus + Number(employee.annualSalary),
    totalBonus: totalBonus
  }
}


  
for (let i = 0; i < employees.length; i++) {
  console.log(employeeBonuses(employees[i]))
}



console.log( employees );
