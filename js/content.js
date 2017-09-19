//Order Form controls
var orderSelectColor = document.querySelector('#order-select-color');

//Shipping Details controls
var shippingName = document.querySelector('#name-input');
var shippingEmail = document.querySelector('#email-input');
var shippingAddressOne = document.querySelector('#address1-input');
var shippingAddressTwo = document.querySelector('#address2-input');
var shippingCity = document.querySelector('#city-input');
var shippingState = document.querySelector('#state-input');
var shippingZip = document.querySelector('#zip-input');

//Checkout Summary controls
var checkoutProductName = document.querySelector('#checkout-product-name');
var checkoutShipping = document.querySelector('#checkout-shipping');
var checkoutTotal = document.querySelector('#checkout-total');
var checkoutAddressName = document.querySelector('#checkout-address-name');
var checkoutAddressOne = document.querySelector('#checkout-address1');
var checkoutAddressCityStateZip = document.querySelector('#checkout-address-city-state-zip');var varcompleteOrderButton = document.querySelector('#complete-order');




function populateProductInfo(){
    console.log(orderSelectColor.value);
    console.log(orderSelectSize.value);
}

// completeOrderButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     populateProductInfo();
// })
console.log("test");