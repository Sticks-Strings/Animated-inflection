'use strict';
function readlocalstorage() {
    let stobj = localStorage.getItem('cart');
    let normalobj = JSON.parse(stobj);

    if (normalobj !== null) {

        for (let x = 0; x < normalobj.length; x++) {
            new Cart(normalobj[x].addedPro, normalobj[x].price, normalobj[x].quantity);
           
          
        }
    }
}



//  Create an event listener for the Add to cart buttons
for (let s = 0; s < ProductArr.length; s++) {
    buttons[s].addEventListener('click', toSelectbutton);
}
readlocalstorage();