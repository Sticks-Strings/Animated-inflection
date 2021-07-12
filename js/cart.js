let carts;
let cartarray = [];
let cartItems;


function loadCart() {
    cartItems = JSON.parse(localStorage.getItem('cartobject')) || [];
    console.log(cartItems)


    let Cartpro = function (nameproc, pricec, qunt) {
        this.namec = nameproc
        console.log()
        this.pricec = pricec
        this.qunt = qunt
        cartarray.push(this)
    }

    for (let index = 0; index < cartItems.length; index++) {

        new Cartpro(cartItems[index].namec, cartItems[index].pricec, cartItems[index].qunt);


    }

    console.log(cartarray)


}
loadCart()
function creattable() {
    for (let i = 0; i < cartarray.length; i++) {
        let tbodyEL = document.getElementById('tbodycart')

        let trEL = document.createElement('tr')
        let tdELname = document.createElement('td')
        tdELname.textContent = `${cartarray[i].namec}`
        trEL.appendChild(tdELname)


        let tdELpriceforone = document.createElement('td')
        tdELpriceforone.textContent = `${cartarray[i].pricec}`
        trEL.appendChild(tdELpriceforone)



        let tdELqun = document.createElement('td')
        tdELqun.textContent = `${cartarray[i].qunt}`
        trEL.appendChild(tdELqun)

        let pEL = document.createElement('button')
        pEL.textContent = 'x'
        pEL.addEventListener('click', rmove)
        pEL.id = `${cartarray[i].namec}`
        trEL.appendChild(pEL)

        tbodyEL.appendChild(trEL)

    }
}
creattable();

function rmove(event) {
    cartItems = JSON.parse(localStorage.getItem('cartobject'))
    let clickedbtn = event.target.id
    console.log(clickedbtn)
    for (let i = 0; i < cartItems.length; i++) {
       


     
        if (`${cartarray[i].namec}` == clickedbtn) {

           delete cartItems[i] // slice doesn't work not sure why

        }
    }

    cartnew = JSON.stringify(cartItems);

    localStorage.setItem('cartobject', cartnew);


}   