/* define interface for Hero objects */
interface Hero {}

/* assign interface/type to the function definition properly */
const q1 = (hero) => {
  //your code here
};

//test cases
const input1 = { name: "Batman", hp: 78 };
const input2 = { name: "Superman", hp: 95 };

console.log(q1(input1));
console.log(q1(input2));

export default q1;
