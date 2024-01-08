
// array type

let arr:number[] = [1,2,3];

let str:string[] = ["a","b","c"];

// 제네릭 generic type -> 타입의 변수 : '함수'에 많이 씀
let bool:Array<boolean> = [true,false]

let mulit:(string|number|boolean)[] = [1,'hi',true];

// 튜플 tuple type -> 길이와 타입이 고정된 배열

let tupleA:[number,number] = [1,2];

tupleA = [4,3]


let tupleB:[number,string,boolean] = [1,'2',true];



const users:[string,number][] = [
  ['심선범',15],
  ['신선범',25],
  ['신성범',30],
  // [35,'신석범']
]



