

// object 'literal' type

let user:{
  id?:number; //optional property 선택적 프로퍼티
  nickName:string
} = {
  id:1,
  nickName:'tiger'
}

user = {
  nickName:'kindtiger'
}

let config:{
  readonly apiKey:string;
} = {
  apiKey:'MY API KEY IS ...'
}

// readonly => 읽기 전용 속성
