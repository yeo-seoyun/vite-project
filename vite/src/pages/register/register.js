
import '/src/pages/register/register.css'
import { setDocumentTitle, getNode } from "/src/lib/";
import gsap from 'gsap';
import pb from '/src/api/pocketbase'

setDocumentTitle('2.9cm / 회원가입');

function register(){

  const idField = getNode('#idField');
  const pwField = getNode('#pwField');
  const next1 = getNode('.next-1');
  const next2 = getNode('.next-2');

  function validation(e){
    // e.currentTarget(this)) <-> e.target(내가 선택한 대상) 
    const target = e.currentTarget;

    if(target.value.length > 5){
      target.nextElementSibling.disabled = false;
    }else{
      target.nextElementSibling.disabled = true;
    }
  }

  idField.addEventListener('input',validation);
  pwField.addEventListener('input',validation);

  next1.addEventListener('click',()=>{

    gsap.to('.wrapper',{x:-500,ease:'power2.inOut'})
    gsap.to('.line > div',{width:'50%',ease:'none'})
  })

  next2.addEventListener('click',()=>{

    pb.collection('users').create({
      email: idField.value,
      password: pwField.value,
      passwordConfirm: pwField.value    
    })
    .then(()=>{
      alert('회원 가입이 완료되었습니다! 로그인 페이지로 이동합니다!🥳')
      location.href = '/src/pages/login/'
    })
    .catch(()=>{
      alert('동일한 이메일이 존재합니다!!!🫤')
    })
  })

}

register();