let carts;
let cartarray = [];
let cartItems;
let tbodyEL = document.getElementById('tbodycart')
let tableEL = document.getElementById('table')
tableEL.appendChild(tbodyEL)

function loadCart() {
    cartItems = JSON.parse(localStorage.getItem('cartobject')) || [];
    


    let Cartpro = function (nameproc, pricec, qunt) {
        this.namec = nameproc
        this.pricec = pricec
        this.qunt = qunt
        cartarray.push(this)
    }

    for (let index = 0; index < cartItems.length; index++) {
        if (cartItems[index] == null) { index++ } else {
            new Cartpro(cartItems[index].namec, cartItems[index].pricec, cartItems[index].qunt);
        }


    }

    console.log(cartarray)


}
loadCart()


function creattable() {
   
 
    for (let i = 0; i < cartarray.length; i++) {

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
        pEL.id = i
        trEL.appendChild(pEL)

        tbodyEL.appendChild(trEL)

    }
}
creattable();

function rmove(event) {
    cartItems = JSON.parse(localStorage.getItem('cartobject'))
    let clickedbtn = event.target.id
    console.log(clickedbtn)
    for (let i = 0; i < cartarray.length; i++) {




         if (i == clickedbtn) {

            delete cartItems[i] // slice doesn't work not sure why

        }

    }

    cartnew = JSON.stringify(cartItems);

    localStorage.setItem('cartobject', cartnew);
    
    cartarray = []
    tbodyEL.remove(tableEL)
    loadCart()
    creattable()
}