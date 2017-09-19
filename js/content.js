//Order Form controls
var orderShirtImage = document.querySelector('#order-display-shirt');

var orderSelectSize = document.getElementsByName('size');
for (let i = 0; i < orderSelectSize.length; i++) {
	orderSelectSize[i].addEventListener('click', () => {
		populateOrderSummary();
	});
}

var orderSelectColor = document.getElementsByName('color');
for (let i = 0; i < orderSelectColor.length; i++) {
	orderSelectColor[i].addEventListener('click', () => {
		populateOrderSummary();
		changeShirtImage(orderSelectColor[i].value);
	});
}

//Shipping Details controls
var shippingName = document.querySelector('#name-input');
shippingName.addEventListener('change', () => {
	checkoutAddressName.value = shippingName.value;
});

var shippingEmail = document.querySelector('#email-input');

var shippingAddressOne = document.querySelector('#address1-input');
shippingAddressOne.addEventListener('change', () => {
	checkoutAddressOne.value = shippingAddressOne.value;
});

var shippingAddressTwo = document.querySelector('#address2-input');
shippingAddressTwo.addEventListener('change', () => {
	checkoutAddressOne.value += ' , ' + shippingAddressTwo.value;
})

var shippingCity = document.querySelector('#city-input');
shippingCity.addEventListener('change', () => {
	checkoutAddressCityStateZip.value = shippingCity.value + ', ';
})

var shippingState = document.querySelector('#state-input');
shippingState.addEventListener('change', () => {
	checkoutAddressCityStateZip.value += shippingState.value + ' ';
})

var shippingZip = document.querySelector('#zip-input');
shippingZip.addEventListener('change', () => {
	checkoutAddressCityStateZip.value += shippingZip.value;
});

//Checkout Summary controls
var checkoutProductName = document.querySelector('#checkout-product-name');
var checkoutShipping = document.querySelector('#checkout-shipping');
var checkoutTotal = document.querySelector('#checkout-total');
var checkoutAddressName = document.querySelector('#checkout-address-name');
var checkoutAddressOne = document.querySelector('#checkout-address1');
var checkoutAddressCityStateZip = document.querySelector('#checkout-address-city-state-zip');
var completeOrderButton = document.querySelector('#complete-order');


function getSize() {
	for (let i = 0; i < orderSelectSize.length; i++) {
		if (orderSelectSize[i].checked)
			return orderSelectSize[i].value;
	}
}

function getColor() {
	for (let i = 0; i < orderSelectColor.length; i++) {
		if (orderSelectColor[i].checked)
			return orderSelectColor[i].value;
	}
}

function populateOrderSummary() {
	checkoutProductName.value = getSize() + ' Basic V-Neck Tee ' + getColor();

}

function changeShirtImage(color){
	orderShirtImage.setAttribute('src','images/' + color + '-v-neck.jpg');
	orderShirtImage.setAttribute('alt', color + '-v-neck' );
}

completeOrderButton.addEventListener('click', (event) => {
	event.preventDefault();
	//populateOrderSummary(){

});
