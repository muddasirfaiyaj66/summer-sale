// total price  
let total = 0;
function totalPrice(price) {
    total = total + price;
    const totalPrice = document.getElementById('total-price');
    const totalPriceTwoDigit = total.toFixed(2);
    totalPrice.innerText = totalPriceTwoDigit;
    const finalPrice = document.getElementById('total');
    finalPrice.innerText = totalPriceTwoDigit;
    // pass total price in discount section 
    discountPrice(totalPriceTwoDigit);

}
function finalPrice(total,discount) {
    const price = total - discount;
    const priceTwoDigit = price.toFixed(2);
    const initPrice = document.getElementById('total');
    initPrice.innerText = priceTwoDigit;
}


function discountPrice(totalPrice) {

    if (totalPrice >= 200) {
        const couponBtn = document.getElementById('discount-btn');
        couponBtn.removeAttribute('disabled');
    }

}


document.getElementById('discount-btn').addEventListener('click', function () {

    const couponField = document.getElementById('coupon');
    const coupon = couponField.value;
    couponField.value = '';

    if (coupon === 'SELL200') {
        const totalPrice = total;
        const discount = (totalPrice * 20) / 100;
        const discountTwoDigit = discount.toFixed(2);
        const initDicount = document.getElementById('discount-price');
        initDicount.innerText = discountTwoDigit;

        finalPrice(totalPrice , discountTwoDigit);



    } else {
        alert("Invalid Coupon");
    }
})







