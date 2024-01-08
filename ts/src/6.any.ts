
// any type -> 너무 관대함! 모든 타입을 다 허용하기 때문에!! js써라~!

let obj:any = {x:10};

obj = 123;
obj = ()=>{};
obj.toUpperCase();

// unKnown type -> any 보다 안전하게 사용가능

let arr: unknown;

arr = 1;
arr = 'hi'

// 타입 좁히기 (정제) narrowing

if(typeof arr === 'number'){
  arr.toFixed()
}