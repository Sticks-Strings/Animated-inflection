'use strict';
let divEL = document.getElementById('drum')
let allProducts = [];
console.log(allProducts)

let Product = function (namepro, imagepro, decription1) {
    this.name = namepro;
    this.imagepro = imagepro
    console.log(this.imagepro)
    this.decription = decription1;
    allProducts.push(this);
};

function generateCatalog() {
    new Product('drum1', "image/drum1.png", 'dsada');
    new Product('drum2', "image/drum2.png", 'dsada');

};

// Initialize the app by creating the big list of products with images and names
generateCatalog();


console.log(allProducts[0])
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
        divEL.appendChild(liEL)

    }


}
renderpro();
let cartneedarray = []
let itemofcart = []

function addtocart(event) {

    let clickedbtn = event.target.id
    if(clickedbtn === allProducts )

    {

    }

}
    // {let tbodyEL = document.getElementById('tbodycart')
    // let trEL= document.createElement('tr')   
    // let tdEL= document.createElement('td')  
    // tdEL.textContent=`${allProducts[i].name}`
    // trEL.appendChild(tdEL)
    // tbodyEL.appendChild(trEL)



    // }


