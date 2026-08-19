const div=document.getElementById('contaier')
const buttton=document.getElementById('btm')


console.log(div);
async function display(){

  const serverdata=fetch('https://fakestoreapi.com/products');
  const jsonData =await serverdata 


  


div.innerHTML="<h2> hello using DOm</<h2>";
}
button.addeventistener("click",display)