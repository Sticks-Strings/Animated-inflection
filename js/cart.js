'use strict';
let table = document.getElementById('table');
console.log(cartArray);

// load from the local storage 
function readlocalstorage() {
    let stobj = localStorage.getItem('cart');
    let normalobj = JSON.parse(stobj);

    if (normalobj !== null) {

        for (let x = 0; x < normalobj.length; x++) {
            new Cart(normalobj[x].addedPro, normalobj[x].price, normalobj[x].quantity);
            cartArray[x].rendertable();
          
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
    th.textContent = 'Quantity';
    head.appendChild(th);
    th = document.createElement('th');
    th.textContent = 'Total';
    head.appendChild(th);
    th = document.createElement('th');
    th.textContent = 'remove from cart';
    head.appendChild(th);
    table.appendChild(head);
    // for (let i = 0; i < cartArray.length; i++) {
    //     let tdEL = document.createElement('td');
    //     th.textContent = cartArray[i].p;
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


let tdEl = document.createElement('td');
let removeButton = document.createElement('input');
let removeEl = document.createElement('td');
let key =[];
let x=0;
Cart.prototype.rendertable = function () {
     let trEl;
    // table.appendChild(trEl);
    for (let y = 0; y < cartArray.length; y++) {
        trEl = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = cartArray[y].addedPro  ;
        trEl.appendChild(td);
       td = document.createElement('td');
        td.textContent = cartArray[y].price ;
        trEl.appendChild(td);
        td = document.createElement('td');
        td.textContent = cartArray[y].quantity ;
        trEl.appendChild(td);
        td = document.createElement('td');
        if(cartArray[y].quantity != "")
        td.textContent = cartArray[y].quantity * cartArray[y].price;
        else
        td.textContent = cartArray[y].price;
        trEl.appendChild(td);
        
        removeEl = document.createElement('td');
        removeButton = document.createElement('input');
        removeButton.type = 'button';
        removeButton.value = 'X';
        removeButton.style.color = 'red';
        removeButton.id="rem";
        key[y]= removeButton;
        // removeButton.style.textAlign = 'center';
        removeEl.appendChild(removeButton);
        trEl.appendChild(removeEl);
      

    }
    table.appendChild(trEl);

    this.saveToLocalStorage();
}

console.log(key);
let target = document.getElementById("rem");
function handl(event){
    console.log('clicked');
    // event.preventDefault();
    removeButton.parentElement.parentElement.remove();
    // localStorage.removeItem('yourKey');

}

readlocalstorage();
for(let i=0;i<key.length;i++){
key[i].addEventListener('click',handl);
}