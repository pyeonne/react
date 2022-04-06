const person = {
    name: 'pyeonne',
    age: 29,
    height: 164,
};

const personKeys = Object.keys(person);

for (let i = 0; i < personKeys.length; i++) {
    const curKey = personKeys[i];
    const curValue = person[curKey];
    console.log(`${curKey} : ${curValue}`);
}

const personValues = Object.values(person);

for (let i = 0; i < personValues.length; i++) {
    console.log(personValues[i]);
}
