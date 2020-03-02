// Getter and setter

const person = {
	firstName: "Ram",
	lastName: "Lee",
	get fullName (){
		return `${person.firstName} ${person.lastName}`		//template leterial
	},
	set fullName(value) {
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
};

person.fullName = 'Ronnie Lee';

// getters => access properties
// setters => change (mutate) them

console.log(person);	