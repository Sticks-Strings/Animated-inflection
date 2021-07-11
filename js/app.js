'use strict';

let ProductArr = [];

//Product constructer
function Product(productname, price) {

    this.productname = productname;
    this.price = price;
    this.quant = 0;
    ProductArr.push(this);
}

let cartArray = [];
function Cart(addedPro, price, quantity) {
    this.addedPro = addedPro;
    this.price = price;
    this.quantity = quantity;
    cartArray.push(this);
    this.saveToLocalStorage();
};

function genarateobject() {
    new Product('piano1', 20.000);
    new Product('piano2', 30.000);
    new Product('piano3', 30.000);
    new Product('piano4', 30.000);
    new Product('piano5', 30.000);
    new Product('piano6', 30.000);
    new Product('piano7', 30.000);

}
genarateobject();
console.log(ProductArr);

// add to local storage
Cart.prototype.saveToLocalStorage = function () {
    let stringObj = JSON.stringify(cartArray);
    localStorage.setItem('cart', stringObj);
}

//get element by id for the buttons
let index = [];
let buttons = [];
for (let i = 0; i < ProductArr.length; i++) {
    index[i] = 'button' + i;
    buttons[i] = document.getElementById(index[i]);
    // console.log(buttons[i]);
}

//get element by id for the inputes
let index2 = [];
let input = [];
for (let i = 0; i < ProductArr.length; i++) {
    index2[i] = 'input' + i;
    input[i] = document.getElementById(index2[i]);
    // console.log(input[i]);
}

// function handlre for buttons
function toSelectbutton(event) {
    // let buttonlist = ['button0', 'button1','button1','button1','button1'];
    for (let i = 0; i < ProductArr.length; i++) {
        if (index[i] === event.target.id) {

            //   console.log('yes');
            let Pname = ProductArr[i].productname;
            let pprice = ProductArr[i].price;
            let Quantity = input[i].value;
            new Cart(Pname, pprice, Quantity);
            input[i].value = " ";
            console.log(cartArray);
            // console.log(Pname);
            // console.log(pprice);
            // console.log(Quantity);
        }

    }

}


// load from the local storage 
