'use strict';
let divEL = document.getElementById('drum')
let allProducts = [];
console.log(allProducts)

let Product = function (namepro, imagepro, decription1,price) {
    this.name = namepro;
    this.imagepro = imagepro
    //console.log(this.imagepro)
    this.decription = decription1;
    this.price=price;
    allProducts.push(this);
};

function generateCatalog() {
    new Product('drum1', "image/drum1.png", 'dsada','100');
    new Product('drum2', "image/drum2.png", 'dsada','300');

};

// Initialize the app by creating the big list of products with images and names
generateCatalog();

let arrayofqunt=[]
console.log(allProducts)
let iputEL;
function renderpro() {
    for (let i = 0; i < allProducts.length; i++) {
        let liEL = document.createElement('li')
        let myImage = new Image(100, 33);
        myImage.src = `${allProducts[i].imagepro}`;
        liEL.title = `${allProducts[i].name}`
        liEL.textContent = `${allProducts[i].decription}`
        liEL.appendChild(myImage)
        let btnEL = document.createElement('button')
        btnEL.textContent = 'add to cart'
        btnEL.id = `${allProducts[i].name}`
        btnEL.addEventListener('click', addtocart)
        liEL.appendChild(btnEL)
         iputEL = document.createElement('input')
        iputEL.type='number'
        iputEL.id=i
        liEL.appendChild(iputEL)
        let priceEL = document.createElement('p')
        priceEL.textContent=`${allProducts[i].price}`
        liEL.appendChild(priceEL)
        divEL.appendChild(liEL)

    }


}
renderpro();


function addtocart(event) {

    let clickedbtn = event.target.id
    for(let i=0;i<allProducts.length;i++){
    if(clickedbtn == allProducts[i].name ){
        let qunt1=document.getElementById(`${i}`)

        new Cartpro(allProducts[i].name,allProducts[i].price ,qunt1.value);
    }
    
}

console.log(cartarray)
}

let cartarray = []
let Cartpro = function (nameproc,pricec,qunt) {
    this.namec = nameproc;
    this.pricec=pricec
    this.qunt=qunt
    cartarray.push(this);
    saveToLocalStorage();
};

function saveToLocalStorage() {
    let data = JSON.stringify(cartarray);
    localStorage.setItem('cartobject', data);
}







    // {let tbodyEL = document.getElementById('tbodycart')
    // let trEL= document.createElement('tr')   
    // let tdEL= document.createElement('td')  
    // tdEL.textContent=`${allProducts[i].name}`
    // trEL.appendChild(tdEL)
    // tbodyEL.appendChild(trEL)



    // }


