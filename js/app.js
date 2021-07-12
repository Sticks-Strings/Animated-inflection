<<<<<<< HEAD

let arrProd=[];
let arrCart=[];
function Animated (image, pruductName,price){
  this.image=image;
  this.pruductName=pruductName;
  this.price=price;


  arrProd.push(this);
  saveprodToLocalStorage();
}
function CartAnimated ( pruductName,price,quant){
  this.pruductName=pruductName;
  this.price=price;
  this.quant=quant;

  arrCart.push(this);
  savecartToLocalStorage();
}
CartAnimated.prototype.render = function () {
  let container=document.getElementsByName('coco');
  let pEl = document.createElement('h1');
  container.appendChild(pEl);
  pEl.textContent = `${this.pruductName}   price is $${this.price}   quantity ${this.quant} `;
};

let pickProd=function(event) {
  event.preventDefault();
  let whichProd = event.target.id;
  let s = whichProd.substring(1);
  let index = Number(s);

  let qv1=event.target.q.value;



  console.log(arrProd[index].pruductName,arrProd[index].price, qv1);

  new CartAnimated (arrProd[index].pruductName,arrProd[index].price, qv1);
  console.log(arrCart);



};


// runder the pruduct and add eventlistener
let renderPruduct=function()
{
  let orodContainerEl = document.getElementById('pruduct-container');
  for(let i=0;i<7;i++)
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




new Animated('image/violin.1.png','D Z Strad Violin - Model 365' , '200');
new Animated('image/violin.2.png','D Z Strad N201 Violin with', '250');
new Animated('image/violin.3.png','D Z Strad Violin - Model 402', '100');
new Animated('image/violin.4.png','Z Strad 4-string Electric 4/4', '320');
new Animated('image/violin.5.png','Scott Cao STV017 Violin', '120');
new Animated('image/violin.6.png','Scott Cao 950 Violin Cannon 1743', '500');
new Animated('image/violin.7.png','Rene Jacquemin Violin, Mirecourt', '59');
renderPruduct();



function saveprodToLocalStorage() {
  let stringObj = JSON.stringify(arrProd);
  localStorage.setItem('prod', stringObj);
}
function savecartToLocalStorage() {
  let stringOb = JSON.stringify(arrCart);
  localStorage.setItem('cart', stringOb);
}
=======
'use strict';
>>>>>>> 898ff055424d37cd9da553e9dd25b6c22ad1a47e
