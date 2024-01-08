

type User = {
  id:number;
  nickName:string;
  auth:string;
  isPayd:boolean;
}

let user1:User = {
  id:1,
  nickName:'tiger',
  auth:'admin',
  isPayd:true
}

let user2:User = {
  id:1,
  nickName:'tiger',
  auth:'admin',
  isPayd:true
}

// 인덱스 시그니처 index signature

let keyCode:{
  // enter:number,
  // backspace:number,
  // tab:number
  [key:string]: number;
  pageUp:number;
} = {
  enter:13,
  backspace:8,
  tab:9,
  pageUp:33
}