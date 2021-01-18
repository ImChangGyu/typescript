const names = "ImChangGyu",
    age = 18,
    gender = "male";

const sayHi = (names, age, gender?) => {
    console.log(`hello ${names}, you are ${age}, you are a ${gender}`)
}

sayHi(names, age);

export {};