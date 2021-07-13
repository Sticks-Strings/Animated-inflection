'use strict';

function readlocalstorage() {
  let stobj = localStorage.getItem('cart');
  let normalobj = JSON.parse(stobj);

  if (normalobj !== null) {

    for (let x = 0; x < normalobj.length; x++) {
      new CartAnimated(normalobj[x].pruductName, normalobj[x].price, normalobj[x].quant);


    }
  }
}

let renderPruduct=function()
{
  let orodContainerEl = document.getElementById('pruduct-container');
  for(let i=0;i<arrProd.length;i++)
  {
    let productEl = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', `${arrProd[i].image}`);
    let hpE1= document.createElement('h3');
    hpE1.textContent= arrProd[i].pruductName;
    let hpE2= document.createElement('h3');
    hpE2.textContent= arrProd[i].price;
    let formEl = document.createElement('form');
    formEl.setAttribute('id',`p${i}`);
    let newInput = document.createElement('input');
    newInput.setAttribute('id', `q${i}`);
    newInput.setAttribute('name','q');
    newInput.setAttribute('type','number');
    newInput.setAttribute('placeholder', 'Quantity');
    let submitInput =document.createElement('input');
    submitInput.setAttribute('type','submit');
    submitInput.setAttribute('value','Add to Cart');
    formEl.appendChild(newInput);
    formEl.appendChild(submitInput);
    productEl.appendChild(img);
    productEl.appendChild(hpE1);
    productEl.appendChild(hpE2);
    productEl.appendChild(formEl);
    orodContainerEl.appendChild(productEl);
    formEl.addEventListener('submit',pickProd);
  }
};
renderPruduct();
//  Create an event listener for the Add to cart buttons
// for (let s = 0; s < arrProd.length; s++) {
//     buttons[s].addEventListener('click', toSelectbutton);
// }
readlocalstorage();