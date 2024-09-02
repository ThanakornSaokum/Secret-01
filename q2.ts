/* assign interface/type to the function definition properly */
const q2 = (m: number, n: number): number => {
  /* Your code here */
  let sum : number = 0;
  for(let i = m; i <= n; i++){
    if(i % 2 !== 0){
      sum += i;
    }
  }
  return sum;
};

//test cases
console.log(q2(1, 5));
console.log(q2(10, 20));

export default q2;
