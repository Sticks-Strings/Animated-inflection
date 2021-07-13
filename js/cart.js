'use strict';
let table = document.getElementById('table');
console.log(arrCart);
let cartindex=[];
// load from the local storage
function readlocalstorage() {
  let stobj = localStorage.getItem('cart');
  let normalobj = JSON.parse(stobj);

  if (normalobj !== null) {

    for (let x = 0; x < normalobj.length; x++) {
      new CartAnimated(normalobj[x].pruductName, normalobj[x].price, normalobj[x].quant);
      arrCart[x].rendertable();

    }
  }}


let th ;
function creatTable() {
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
  // for (let i = 0; i < arrCart.length; i++) {
  //     let tdEL = document.createElement('td');
  //     th.textContent = arrCart[i].p;
  //     head.appendChild(th);
  // }
  // let thel = document.createElement('th');
  // thel.textContent = 'dailytotal';
  // head.appendChild(thel);
  // table.appendChild(head);
  // let threm = document.createElement('th');
  // threm.textContent = 'remove';
  // head.appendChild(threm);
  // table.appendChild(head);
}

creatTable();
let quanttotal;
let Total;

let tdEl = document.createElement('td');
let removeButton = document.createElement('input');
let removeEl = document.createElement('td');
let key =[];
let x=0;

let text = document.createElement('p');
CartAnimated.prototype.rendertable = function () {
  Total = 0;
  let trEl;
  // table.appendChild(trEl);
  for (let y = 0; y < arrCart.length; y++)
  {
    trEl = document.createElement('tr');
    trEl.setAttribute('id',`r${y}`);
    let td = document.createElement('td');
    td.textContent = arrCart[y].pruductName ;
    trEl.appendChild(td);
    td = document.createElement('td');
    td.textContent = arrCart[y].price ;
    trEl.appendChild(td);
    td = document.createElement('td');
    if(arrCart[y].quant === '')
      td.textContent = '1' ;
    else
      td.textContent = arrCart[y].quant ;
    trEl.appendChild(td);
    td = document.createElement('td');
    if(arrCart[y].quant != ''){
      quanttotal = arrCart[y].quant * arrCart[y].price;
      td.textContent = quanttotal;
      Total += Number(quanttotal);
    }
    else{
      Total +=Number( arrCart[y].price);
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
    removeButton.addEventListener('click',handl);
    // key[y]= y;
    // console.log(key[y]);
    // removeButton.style.textAlign = 'center';
    removeEl.appendChild(removeButton);
    trEl.appendChild(removeEl);

    table.appendChild(trEl);

  }


  this.saveToLocalStorage();
};

// console.log(removeButton);


function handl(event){
  console.log('clicked');
  // event.preventDefault();
  for(let i=0;i<cartindex.length;i++)
  {
    let indext=cartindex[i];
    // console.log(cartindex[i]);
    // console.log(cartindex);
    // let indexcc=indext.substring(1);

    // let indexc=Number(indexcc);
    // console.log(${indexc});
    let ev=event.target.id;
    console.log(ev);
    if(event.target.id === `c${i}`){
      let row = document.getElementById(`r${i}`);
      row.parentNode.removeChild(row);
      

    }

    //  cart = {...cart,pruductName}
  }
  // removeButton.parentElement.parentElement.remove();
  //  localStorage.removeItem();

}
readlocalstorage();


// removeButton.addEventListener('click',handl);
text.textContent = `Your orders grand total is : ${Total}`;
let TotalContainer = document.getElementById('grandTotal');
TotalContainer.appendChild(text);
console.log(Total);