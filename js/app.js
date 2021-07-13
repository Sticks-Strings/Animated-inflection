'use strict';
let arrProd=[];

function Animated (image, pruductName,price){
  this.image=image;
  this.pruductName=pruductName;
  this.price=price;
  arrProd.push(this);
  saveprodToLocalStorage(this);
}
let arrCart=[];
function CartAnimated ( pruductName,price,quant){
  this.pruductName=pruductName;
  this.price=price;
  this.quant=quant;
  arrCart.push(this);
  this.saveToLocalStorage();
}


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

function genarateobject() {
  new Animated('image/violin.1.png','D Z Strad Violin - Model 365' , '200');
  new Animated('image/violin.2.png','D Z Strad N201 Violin with', '250');
  new Animated('image/violin.3.png','D Z Strad Violin - Model 402', '100');
  new Animated('image/violin.4.png','Z Strad 4-string Electric 4/4', '320');
  new Animated('image/violin.5.png','Scott Cao STV017 Violin', '120');
  new Animated('image/violin.6.png','Scott Cao 950 Violin Cannon 1743', '500');
  new Animated('image/violin.7.png','Rene Jacquemin Violin, Mirecourt', '59');
  new Animated('image/piano1.png','piano1', '20.000');
  new Animated('image/piano2.png','piano1', '30.000');
  new Animated('image/piano3.png','piano1',' 30.000');
  new Animated('image/piano4.png','piano1',' 30.000');
  new Animated('image/piano5.png','piano1',' 30.000');
  new Animated('image/piano6.png', 'piano1','30.000');
  new Animated('image/piano7.png','piano1', '30.000');
}
genarateobject();

function saveprodToLocalStorage() {
  let stringObj = JSON.stringify(arrProd);
  localStorage.setItem('prod', stringObj);
}



console.log(arrProd);

// add to local storage
CartAnimated.prototype.saveToLocalStorage = function (indexremove=[]) {
  let removeItemi = indexremove;
  let stringObj;
  let arrs =[];

  if (removeItemi !== undefined )

  {localStorage.removeItem('cart');

    for (let i =0; i<arrCart.length;i++)
    {
      if (removeItemi.indexOf(i) === -1)
      {
        arrs[i]=arrCart[i];
        stringObj = JSON.stringify(arrs);
      }

    }

    // localStorage.setItem('cart', stringObj);
  }
  else{
    stringObj = JSON.stringify(arrCart);


  }
  console.log( stringObj);

  localStorage.setItem('cart', stringObj);
};

