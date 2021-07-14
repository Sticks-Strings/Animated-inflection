'use strict';

let table = document.getElementById('table');
console.log(arrCart);
let cartindex = [];
let removeIndex = [];
// load from the local storage
function readlocalstorage() {
  arrCart = [];
  let stobj = localStorage.getItem('cart');
  let normalobj = JSON.parse(stobj);
  if (normalobj !== null) {


    for (let x = 0; x < normalobj.length; x++) {
      new CartAnimated(normalobj[x].pruductName, normalobj[x].price, normalobj[x].quant);

    }


    rendertable();



  }

}


let th;
function creatTable() {
  table.textContent = '';
  let head = document.createElement('tr');
  th = document.createElement('th');
  th.textContent = 'Product name';
  head.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'price';
  head.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'quant';
  head.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'Piece Total price';
  head.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'remove from cart';
  head.appendChild(th);
  table.appendChild(head);
}

creatTable();
let quanttotal;
let Total=0;

let tdEl = document.createElement('td');
let removeButton = document.createElement('input');
let removeEl = document.createElement('td');
let key = [];
let x = 0;

let text = document.createElement('p');
let rendertable = function () {
  Total = 0;
  let trEl;
  // table.appendChild(trEl);
  for (let y = 0; y < arrCart.length; y++) {
    trEl = document.createElement('tr');
    trEl.setAttribute('id', `r${y}`);
    let td = document.createElement('td');
    td.textContent = arrCart[y].pruductName;
    trEl.appendChild(td);
    td = document.createElement('td');
    td.textContent = arrCart[y].price;
    trEl.appendChild(td);
    td = document.createElement('td');
    if (arrCart[y].quant === '')
      td.textContent = '1';
    else
      td.textContent = arrCart[y].quant;
    trEl.appendChild(td);
    td = document.createElement('td');
    if (arrCart[y].quant !== '') {
      quanttotal = arrCart[y].quant * arrCart[y].price;
      td.textContent = quanttotal;
      Total += Number(quanttotal);
    }
    else {
      Total += Number(arrCart[y].price);
      td.textContent = arrCart[y].price;

    }
    trEl.appendChild(td);
    removeEl = document.createElement('td');

    removeButton = document.createElement('input');
    removeButton.type = 'button';
    removeButton.value = 'Remove';
    removeButton.style.color = 'white';
    removeButton.id = `c${y}`;
    cartindex.push(removeButton.id);

    removeButton.addEventListener('click', handl);

    removeEl.appendChild(removeButton);
    trEl.appendChild(removeEl);

    table.appendChild(trEl);

  }
  renderTotal();
  CartAnimated.prototype.saveToLocalStorage();
};



function handl(event) {
  console.log('clicked');
  event.preventDefault();
  for (let i = 0; i < cartindex.length; i++) {

    if (event.target.id === `c${i}`) {

      Total -= Number(arrCart[i].price);
      arrCart.splice(i, 1);

      // [0,1] splice(0,1) -> 0 is the starting index, 1 is the number of indexes to be removed
      // => [1] -> 1 will now have index 0 -> splice(0,1)
      // => []

    }

  }
  CartAnimated.prototype.saveToLocalStorage();
  creatTable();
  rendertable();
  renderTotal();

}
readlocalstorage();


function renderTotal() {
  if(Total!==null){
    text.textContent = '';
    if(Total!==0){

      text.textContent = `Your orders grand total is : ${Total} JOD`;
    }else{
      text.textContent = 'Empty Cart';
      localStorage.removeItem('cartprod');

    }

    let TotalContainer = document.getElementById('grandTotal');
    TotalContainer.textContent = '';
    TotalContainer.appendChild(text);
    let parentEl = document.getElementById('parentamount');
    let amountEl = document.getElementById('amount');
    amountEl.textContent = `${Total}`+' JOD ';
    parentEl.appendChild(amountEl);
  }


}

let payel = document.getElementById('paybutton');

payel.addEventListener('click',payevent);

function payevent(event){
  localStorage.removeItem('cart');
  localStorage.removeItem('cartprod');
  let Parent = document.getElementById('table');
  while(Parent.hasChildNodes())
  {
    Parent.removeChild(Parent.firstChild);
  }
  if(Total!==0){
    text.textContent='Empty cart';
    let parentEl = document.getElementById('parentamount');
    let amountEl = document.getElementById('amount');
    amountEl.textContent = '0 '+' JOD';
    parentEl.appendChild(amountEl);
    swal("done!", "Payment successful!", "success");
    for(let i=0 ; i<3000 ; i++){
      window.location.href = 'index.html';
    }
  } else{
    swal("Empty Cart!!", "Payment not successful!", "error");
    for(let i=0 ; i<3000 ; i++){
      window.location.href = 'index.html';
    }
  }
  // window.location.href = 'index.html';
  // renderTotal();
  // alert('payment')


}
renderTotal();
let btnbuyEL=document.getElementById('buy')
            btnbuyEL.addEventListener("click", myFunction)
            function myFunction() {
              let cardshow = document.getElementById("myDIV");
              if (cardshow.style.display === "none") {
                cardshow.style.display = "block";
                btnbuyEL.removeEventListener();
              } else {
                cardshow.style.display = "block"
              }
            }