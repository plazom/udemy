const createPerson = (name, surname, fieldName, fieldPostfix) => {
    const fullname = name + ' ' + surname;
    return {
        fullname,
        name,
        surname,
        getJob() {
            return 'Front End 1';
        },
        [fieldName + fieldPostfix]: 100
    };
};

const person = createPerson('WFM', 'WFM2', 'car', '-model');
console.log(person);