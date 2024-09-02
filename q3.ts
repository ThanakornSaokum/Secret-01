/* define interface for Runner objects */
interface Runner {}

/* assign interface/type to the function definition properly */
const q3 = (runners: Runner[]): Runner[] => {
  //your code here
};

//test cases
const input1 = [
  { name: "Bobby", time: 45 },
  { name: "Robert", time: 55 },
  { name: "Wilson", time: 120 },
];

console.log(q3(input1));

export default q3;
