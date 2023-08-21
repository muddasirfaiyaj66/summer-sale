

// add to cart entry 

function handleClick(target){
    const itemName =target.parentNode.parentNode.childNodes[3].childNodes[3].innerText ;
     const itemPrice =target.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[0].innerText;
    //  add to cart entry 
    addToCartEntry(itemName, itemPrice);
    const itemPriceValue = parseFloat(itemPrice);

    // total price 
    totalPrice(itemPriceValue);
    if(itemPriceValue > 0){
        const buyNowBtn = document.getElementById('buy-btn');
        buyNowBtn.removeAttribute('disabled');
    }


}


function addToCartEntry(productName, price){
    const cartEntry = document.getElementById('cart-entry');
    const count = cartEntry.childElementCount;
    const p =document.createElement('p');
    p.classList.add('my-2','text-lg','font-medium');
    p.innerHTML = ` ${count + 1}.${productName} ${price+'TK'}`;
    cartEntry.appendChild(p);

}


// Go Home Btn 
document.getElementById('go-home-btn').addEventListener('click', function(){
    window.location='index.html';
})
