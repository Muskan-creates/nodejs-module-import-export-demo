// let n= 5;
// for (let i=0; i<=n; i++){
//     console.log("hello",i);
// }
// console.log(process.argv);

// let args=process.argv;
// for (let i=0; i<=args.length;i++){
//     console.log("hii",args[i])
// }

const result=require("./math");
let a=2;
let b=3;
console.log(result.sum(a,b));
console.log(result.mul(a,b));