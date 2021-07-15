'use strict';

let table = document.getElementById('table');
let cartindex = [];
let removeIndex = [];
// load from the local storage
function readlocalstorage() {
  arrCart = [];
  let stobj = localStorage.getItem('cart');
  let normalobj = JSON.parse(stobj);
  if (normalobj !== null) {

    //update the arrcart[] to have the same data of the localstorge('cart')
    for (let x = 0; x < normalobj.length; x++) {
      new CartAnimated(normalobj[x].pruductName, normalobj[x].price, normalobj[x].quant);

    }


    rendertable();



  }

}


let th;
function creatTable() {//to creat the taple
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
let Total = 0;

let tdEl = document.createElement('td');
let removeButton = document.createElement('input');
let removeEl = document.createElement('td');
let key = [];
let x = 0;

let text = document.createElement('p');

let rendertable = function () {//creat of the final taple of receipt with the price.
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
    // to calculate the total prices
    quanttotal = arrCart[y].quant * arrCart[y].price;
    td.textContent = quanttotal;
    Total += Number(quanttotal);
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
    // if(y==1){
    //   let buyEl=document.createElement("button");
    //   buyEl.id='buy';
    //   buyEl.textContent='Checkout'
    //   let divbtnEL=document.getElementById('but');
    //   divbtnEL.appendChild(buyEl);
    //   divbtnEL.addEventListener()
    // }
    let btn2=document.getElementById('buy');
    btn2.style.display = 'block';
  }
  renderTotal();
  CartAnimated.prototype.saveToLocalStorage();
};



function handl(event) {
  event.preventDefault();
  for (let i = 0; i < cartindex.length; i++) {
    //to remove the selected item & remove it's price from the total
    if (event.target.id === `c${i}`) {

      Total -= Number(arrCart[i].price);
      arrCart.splice(i, 1);

      // of indexes to be removed
    }

  }
  //re-creat whole table from the begining again from the saved data on the localstore!!
  CartAnimated.prototype.saveToLocalStorage();
  creatTable();
  rendertable();
  renderTotal();

}
readlocalstorage();


function renderTotal() {
  if (Total !== null) {
    text.textContent = '';
    if (Total !== 0) {
      //render the grandtotal!!!!
      text.textContent = `Your orders grand total is : ${Total} JOD`;
    } else {
      let btn2=document.getElementById('buy');
      btn2.style.display = 'none';
      let cardshow = document.getElementById('myDIV');
      cardshow.style.display = 'none';
      text.textContent = 'Empty Cart';
      localStorage.removeItem('cartprod');

    }

    let TotalContainer = document.getElementById('grandTotal');
    TotalContainer.textContent = '';
    TotalContainer.appendChild(text);
    let parentEl = document.getElementById('parentamount');
    let amountEl = document.getElementById('amount');
    amountEl.textContent = `${Total}` + ' JOD ';
    parentEl.appendChild(amountEl);
  }


}

let payel = document.getElementById('paybutton');

payel.addEventListener('click', payevent);

function payevent(event) {
  localStorage.removeItem('cart');
  localStorage.removeItem('cartprod');
  let Parent = document.getElementById('table');
  while (Parent.hasChildNodes())
  // to delet hool localstorge of the cart when checkout the payment
  {
    Parent.removeChild(Parent.firstChild);
  }
  if (Total !== 0) {//give the user a sweetalart if there is an itme on the cart or not !!!
    text.textContent = 'Empty cart';
    let parentEl = document.getElementById('parentamount');
    let amountEl = document.getElementById('amount');
    amountEl.textContent = '0 ' + ' JOD';
    parentEl.appendChild(amountEl);
    swal('done!', 'Payment successful!', 'success');
    for (let i = 0; i < 3000; i++) {
      window.location.href = 'index.html';
    }
  } else {
    swal('Empty Cart!!', 'Payment not successful!', 'error');
    for (let i = 0; i < 3000; i++) {
      window.location.href = 'index.html';
    }
  }

}
renderTotal();// to hide the payment bar if there is nothing on the begining of the cart page and apper it when click on the puy botton!!
let btnbuyEL = document.getElementById('buy');
btnbuyEL.addEventListener('click', myFunction);
function myFunction() {
  let cardshow = document.getElementById('myDIV');
  if (cardshow.style.display === 'none') {
    cardshow.style.display = 'block';
    btnbuyEL.removeEventListener();
  } else {
    let btn2=document.getElementById('buy');
    btn2.style.display = 'none';

    cardshow.style.display = 'block';
  }
}
