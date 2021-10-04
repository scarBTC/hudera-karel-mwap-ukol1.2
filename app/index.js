

const Array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];  

let alen = Array.length;
let p = 0;
let po = 5;
let pk = 0;

for (let index = 0; index < alen; index++) {
    console.log(Array[p]);
    p++;
}

for (let index = 0; index < alen; index++) {
    console.log(Array[po]);
    po -=1;
}

Array.sort()
for (let index = 0; index < alen; index++) {
    console.log(Array[pk]);
    pk++;
}



const car = {Brand:"XXXXX", Model:"202000", Year:"20000"};
const Brand = car.Brand
console.log(Brand)

const Model = car.Model
console.log(Model)

const Year = car.Year
console.log(Year)

let random = 0;
random = Math.floor(Math.random() * 556);
console.log("nahodne cislo je" + random)