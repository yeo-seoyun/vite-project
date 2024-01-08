

// union type

let str: 'name' | 'age' | 'address' ;

type CompanyA = {
  companyName : string;
  since : number
}

type CompanyB = {
  companyName : string;
  ceo : string
}

type Company = CompanyA | CompanyB;

let company1:Company ={
  companyName:'like-lion',
  since:2010
}

let company2:Company ={
  companyName:'8b-studio',
  ceo:'신석범',
  since:2022
}




type Intersection = CompanyA & CompanyB; // 모두 포함


let company4:Intersection = {
  companyName:'MS',
  since:1990,
  ceo:'사티아 나델라'
}