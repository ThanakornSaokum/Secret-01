/* define interface for Runner objects */
interface Runner {
  name: string;
  time: number;
}

/* assign interface/type to the function definition properly */
const q3 = (runners: Runner[]): Runner[] => {
  const avg = runners.reduce((curr, runner) => runner.time + curr, 0) / runners.length;

  return runners.filter(runner => runner.time <= avg);
};

//test cases
const input1 = [
  { name: "Bobby", time: 45 },
  { name: "Robert", time: 55 },
  { name: "Wilson", time: 120 },
];

console.log(q3(input1));

export default q3;
