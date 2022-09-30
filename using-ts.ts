// function add(number1: number|string, number2:number|string){
//   let result;
//   if(typeof number1==='string' && typeof number2==='string'){
//     result = number1+number2;
//   }
//   if(typeof number1==='string' && typeof number2==='number'){
//     return result=number1+ number2;
//   }
// }

// let a:any;

// console.log("result",add("Mai",50));

// No type annotations here, but TypeScript can spot the bug
// const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
// names.forEach(function  (s) {
//   console.log(s.toUpperCase());
// });

// function printCoordinate(pt:{x:number,y?:number}){
//   console.log('x:' ,pt.x);
//   console.log('y:', pt.y);
// }
// printCoordinate({x:5});

// type cor = {
//   first: string;
//   last?: string;
// }

// interface Icor {
//   first: string;
//   last?: string;
// }
// function printName(obj: Icor) {
//   console.log('first:',obj.first);
//   console.log('last:', obj.last?.toUpperCase());

// }
// Both OK
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });

// function printText(s:string, alignment:'left'|'right'|'center'){

// }

// printText("hello","left");
// printText("helloooo",'center');
// function liveDangerously(x?: number | null) {
//   // No error

//   console.log(x.toFixed());
// }
// liveDangerously();
// function printAll(strs: string | string[] | null) {
//   if (strs && typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   }else{
//     console.log("null rooi");

//   }
// }
// printAll(null);

// type Bird = {
//   fly: () => void;
// }
// type Fish = {
//   swim: ()=> void;
// }
// let obj:Fish={
//   swim(){}
// }
// function move(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim();
//   }

//   return animal.fly();
// }
// move();

// interface Circle {
//   kind: "circle";
//   radius: number;
// }
// interface Square{
//   kind:"square";
//   sideLength:number;
// }

// type Shape=Circle|Square;

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//   }
// }

// const area = getArea({kind:"circle",radius:10});
// console.log(area);
// type greetFunction = (a: string) => void //has 1 variable, type string and non-return value
// function greeter(fn:greetFunction ) {
//   fn("Hello");
// }
 
// function printToConsole(s: string) {
//   console.log(s);
// }
 
// greeter(printToConsole);

// type DesFunction ={
//   description:string;
//   (someArg:number) : boolean;
// }

// function doST(fn:DesFunction){
//   console.log(fn.description+" "+fn(6));
// }

// const test = (someArg) =>{
//   return someArg > 0;
// }
// test.description="Mieu ta ne "
// doST(test);

