'use strict';
// global values
let prodtot=[];
let arrProd=[];
//A constructer object for products, second will be readed

function Animated (image, pruductName,price){
  this.image=image;
  this.pruductName=pruductName;
  this.price=price;
  arrProd.push(this); // pushthe array to be an array of object
  saveprodToLocalStorage(this); //store the products in our local storage
}

let arrCart=[];
// constructer object for adding new products
function CartAnimated ( pruductName,price,quant){
  this.pruductName=pruductName;
  this.price=price;
  this.quant=quant;
  arrCart.push(this);
  this.saveToLocalStorage();//store new products
}


//to store the added number of items in the cart, third thing item will be readed
function savecartToLocalStorage() {
  let cartOB = JSON.stringify(prodtot);
  localStorage.setItem('cartprod', cartOB);
}

//
function cartreadlocalstorage() {//to read the the total number
  let cartstobj = localStorage.getItem('cartprod');

  let cartnormalobj = JSON.parse(cartstobj);
  if (cartnormalobj !== null)
  {
    prodtot=cartnormalobj;
  }
}
cartreadlocalstorage();

let pickProd=function(event) {
  event.preventDefault();
  let whichProd = event.target.id;
  let s = whichProd.substring(1);
  let index = Number(s);
  let qv1=event.target.q.value;
  console.log(arrProd[index].pruductName,arrProd[index].price, qv1);
  new CartAnimated (arrProd[index].pruductName,arrProd[index].price, qv1);
  prodtot.push(1);
  document.querySelector('.cart span').textContent=prodtot.length;
  savecartToLocalStorage();
};


function genarateobject() {
  new Animated('image/violin.1.png','D Z Strad Violin - Model 365' , '220');
  new Animated('image/violin.2.png','D Z Strad N201 Violin ', '210');
  new Animated('image/violin.3.png','D Z Strad Violin - Model 402', '310');
  new Animated('image/violin.4.png','Z Strad 4-string Electric 4/4', '323');
  new Animated('image/violin.5.png','Scott Cao STV017 Violin', '227');
  new Animated('image/violin.6.png','Scott Cao Violin Cannon 1743', '232');
  new Animated('image/violin.7.png','Rene Jacquemin Violin', '177');
  new Animated('image/piano1.png','Williams Digital Piano', '870');
  new Animated('image/piano2.png','Williams Allegro III Piano', '1200');
  new Animated('image/piano3.png','Suzuki VG Digital Piano',' 1197');
  new Animated('image/piano4.png','Suzuki CTP Digital Piano',' 1260');
  new Animated('image/piano5.png','legeto II Digital Piano',' 1124');
  new Animated('image/piano6.png', 'Williams Micro Grand piano','1324');
  new Animated('image/piano7.png','Williams Allegro II piano', '1145');
  new Animated('image/gu1.png','Rogue Starter Acoustic Guitar', '106');
  new Animated('image/gu2.png','Rogue RA-090-Electric Guitar', '117');
  new Animated('image/gu3.png','Rogue RA-099 ConcertGuitar', '141');
  new Animated('image/gu4.png','Angelico\'s Deluxe Atlantic guitar', '120.5');
  new Animated('image/gu5.png','The Rocketeer RRE electric guitar', '185');
  new Animated('image/gu6.png','Shorty Electric Travel Guitar', '321');
  new Animated('image/gu7.png','Rogue RD80 Acoustic Guitar', '111');
  new Animated('image/drum1.png','The G5422G-12 serves guitar', '111');
  new Animated('image/drum2.png','The G5422G-12 serves guitar', '999');
  new Animated('image/drum3.png','The G5422G-12 serves guitar', '420');
  new Animated('image/drum4.png','The G5422G-12 serves guitar', '200');
  new Animated('image/drum5.png','The G5422G-12 serves guitar', '110');
  new Animated('image/drum6.png','The G5422G-12 serves guitar', '98');
  new Animated('image/drum7.png','The G5422G-12 serves guitar', '100');


}
genarateobject();//first line will be readed

function saveprodToLocalStorage() {//save the total number
  let stringObj = JSON.stringify(arrProd);
  localStorage.setItem('prod', stringObj);
}
CartAnimated.prototype.saveToLocalStorage = function () {
  let stringObj;
  stringObj = JSON.stringify(arrCart);//stringfy array of products
  localStorage.setItem('cart', stringObj); //insert to local storage
};
