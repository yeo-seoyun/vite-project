
import { setDocumentTitle } from '/src/lib'
import '/src/pages/detail/detail.css'
import pb from '/src/api/pocketbase'




setDocumentTitle('2.9cm / 디테일');


async function renderProductData(){

  const hash = window.location.hash.slice(1);

  const productData = await pb
  .collection('products')
    // .getFullList({
  //   sort:'price'
  //   // '-price' : 역순으로 뿌려줌
  // })

  // pb제공 기능 -> 하나의 데이터만 나오게 해줌
  .getOne(hash)
  

  console.log( productData );

}




renderProductData();