let carts;
let cartarray = [];
let cartItems;
let tbodyEL = document.getElementById('tbodycart')
let tableEL = document.getElementById('table')
tableEL.appendChild(tbodyEL)

function loadCart() {
    cartItems = JSON.parse(localStorage.getItem('cartobject'));

    console.log(cartItems)

    let Cartpro = function (nameproc, pricec, qunt) {
        this.namec = nameproc
        this.pricec = pricec
        this.qunt = qunt
        cartarray.push(this)
    }

    for (let index = 0; index < cartItems.length; index++) {

        new Cartpro(cartItems[index].namec, cartItems[index].pricec, cartItems[index].qunt);



    }


}
loadCart()

let total
function creattable() {
    //     console.log(cartarray)
total=0
let arraytot=[]
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


        let tdELtotal = document.createElement('td')
        tdELtotal.textContent = `${cartarray[i].qunt * cartarray[i].pricec}`
        total=total+Number(`${cartarray[i].qunt * cartarray[i].pricec}`)
        console.log(total)
        trEL.appendChild(tdELtotal)
        
        
        let pEL = document.createElement('button')
        pEL.textContent = 'x'
        pEL.addEventListener('click', rmove)
        pEL.id = i
        trEL.appendChild(pEL)

        tbodyEL.appendChild(trEL)

    }
    
 
}
creattable();
function renderfooter()
{
 let tdfooter =document.getElementById('footer')
  tdfooter.textContent= `${total}`
}
function rmove(event) {
    //event.preventDefault();

    //cartItems = JSON.parse(localStorage.getItem('cartobject'))
    let clickedbtn = Number(event.target.id)
    
    for (let i = 0; i < cartItems.length; i++) {




        if (i == clickedbtn) {

            // delete cartItems[i] // slice doesn't work not sure why
            cartItems.splice(i,1);
            console.log(cartItems)

        }

    }

    data = JSON.stringify(cartItems);
    localStorage.setItem('cartobject', data);
    console.log(cartItems)
    cartarray = []
    tbodyEL.remove(tableEL)
    tbodyEL=document.createElement('tbody')
    tableEL.appendChild(tbodyEL)
    tbodyEL.id='tbodycart'
    loadCart()
    creattable()
}