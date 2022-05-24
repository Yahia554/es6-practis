//  Practic es6 90% success
// 1 const and let variable decliar
const frinds = ['salman', 'sami', 'rasel', 'akash', 'josim', 'nabila', 'rubina', 'rasel'];
const product = ['jam', 'lechu', 'jaam', 'apple']
let sum = 9;
const total = sum * 3;
sum = 2;
// console.log(frinds, product, sum)

// 2 task templete string a daynamic value
const count = 4;
const number = {
    name: 'aplle', wight: 2, price: 120, color: 'green', web: {
        name: 'js', wark: 'devlop', fremwark: 'react'
    }
}

const products = `${number.web.fremwark}
${number.color} this foods item.
is total result ${count}
`
// console.log(products)

//3.1 task  on perameter arrow function
const dev = num => num / 5;
const result = dev(100)
// console.log(result)

//3.2 task  -two prameter  result multiply
const addmulty = (x, y) => (x + 2) * (y + 2);
const resultAddmulty = addmulty(12, 12);
// console.log(resultAddmulty);

//3.3 task  three prameter result multiply
const multiplyTree = (x, y, z) => x * y * z;
const threeMulty = multiplyTree(10, 12, 23);
// console.log(threeMulty);

//3.4  task  per peramiter + 2 and result multyply
const multiply = (num1, num2) => {
    const fist = num1 + 2;
    const second = num2 + 2;
    const result = fist + second;
    const mult = result * result;
    return mult;
}
const output = multiply(12, 12)
// console.log(output);

//5 task  array map use the element multyple by 5 result
const numbers = [12, 34, 56, 65, 78, 45, 67, 45];
const fiveMaltiply = numbers.map(number => number * 5);
// console.log(fiveMaltiply);

//6 task  filter use is a odd number in arry
const arr = [2, 5, 6, 9, 78, 34, 65, 22, 33, 27, 89];
const oddArr = arr.filter((n) => n % 2 == 1)
// console.log(oddArr)

//7  task  in array find object 5000 
const fiveThousand = [
    { name: 'asad', adrees: 'barishal', work: 'field maneger', salary: 3000, age: 23 },
    { name: 'sami', adrees: 'magura', work: 'ass eng', salary: 20000, age: 23 },
    { name: 'akash', adrees: 'jamalpur', work: 'developer', salary: 25000, age: 23 },
    { name: 'salman', adrees: 'barishal', work: 'jun.deve', salary: 5000, age: 23 }

]
const findFiveThousand = fiveThousand.find(num => num.salary == 5000);
// console.log(findFiveThousand);

/*
7.5 task  map, forEach, and filter ,find
map() element ar warking and retrn
forEach() element warking but not a retern
filter() array  condition felap and new array retern
find() on condition felap and on element retrn
 */

// 8  task destructuring use and tow property veriable decliar
const books = {
    name: 'JavaScript', writer: 'Toom Heray', pages: 200, Relice: {
        first: 2012, second: 2016, name: 'Es6'
    }, price: 500
}
const { writer } = books
const { second, name } = books.Relice
// console.log(writer, name);

//9  task  not a complete
/* const destructuringArr = [
    { name: 'sami', age: 22, education: 'diploma in engneer', },
    { name: 'akash', age: 22, education: 'diploma in engneer', subject: 'computer' },
    { name: 'salman', age: 23, education: 'diploma in engneer', subject: 'computer' },
    { name: 'akil', age: 19, education: 'diploma in rannig ', subject: 'cevil' }
];

const { education, subject } = destructuringArr.filter(x => x.subject)
console.log([education, subject])
 */

//10 task  defold perameter 
const threePr = (x, y, z = 7) => x + y + z;
const plus = threePr(12, 10)
// console.log(plus)