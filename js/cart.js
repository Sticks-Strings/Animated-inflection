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
let Total;
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
    removeButton.value = 'X';
    removeButton.style.color = 'red';
    removeButton.id = `c${y}`;
    cartindex.push(removeButton.id);
    removeButton.addEventListener('click', handl);
    removeEl.appendChild(removeButton);
    trEl.appendChild(removeEl);
    table.appendChild(trEl);
  }
  renderTotal();
  // CartAnimated.prototype.saveToLocalStorage(removeIndex);
  CartAnimated.prototype.saveToLocalStorage();
};
function handl(event) {
  console.log('clicked');
  event.preventDefault();
  for (let i = 0; i < arrCart.length; i++) {
    // let indext=cartindex[i];
    let ev = event.target.id;
    console.log(ev);
    if (event.target.id === `c${i}`) {
      Total -= Number(arrCart[i].price);
      arrCart.splice(i,1);
    //   let row = document.getElementById(`r${i}`);
    //   row.parentNode.removeChild(row);
      // removeIndex.push(i);
    }
  }
  // CartAnimated.prototype.saveToLocalStorage(removeIndex);
  CartAnimated.prototype.saveToLocalStorage();
  arrCart = []
  trEl.remove(table)
  tbodyEL=document.createElement('tr')
  tableEL.appendChild(tbodyEL)
  tbodyEL.id='tbodycart'
  rendertable();
  creattable()
  renderTotal();
}
readlocalstorage();
function renderTotal() {
  text.textContent ='';
  text.textContent = `Your orders grand total is : ${Total}`;
  let TotalContainer = document.getElementById('grandTotal');
  TotalContainer.textContent = '';
  TotalContainer.appendChild(text);
}