"use strict";

function salaryTotal(companyObj) {
	let subTotal = 0;
	for (const department in companyObj) {
		if(Array.isArray(companyObj[department])) {
			companyObj[department].forEach((employee) => {
				if ('salary' in employee && typeof employee.salary === 'number' && Number.isFinite(employee.salary)) {
					subTotal += employee.salary;
				}
			});
		}
		else if(typeof companyObj[department] === 'object' && companyObj[department] !== null) {
			subTotal += salaryTotal(companyObj[department]);
		}
	}
	return subTotal;
}

let company = {
	sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
	development: {
		web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
		internals: [{name: 'Jack', salary: 1300}]
	},
};

console.log('Monthly salary of all employees is: '+salaryTotal(company));