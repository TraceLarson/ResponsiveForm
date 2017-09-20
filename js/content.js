/**
 * Created by tracelarson on 9/19/17.
 */
//Order Form controls and event listeners
const orderShirtImage = document.querySelector('#order-display-shirt');

const orderSelectSize = document.getElementsByName('size');
for (let i = 0; i < orderSelectSize.length; i++) {
	orderSelectSize[i].addEventListener('click', () => {
		populateOrderSummary();
	});
}

const orderSelectColor = document.getElementsByName('color');
for (let i = 0; i < orderSelectColor.length; i++) {
	orderSelectColor[i].addEventListener('click', () => {
		populateOrderSummary();
		changeShirtImage(orderSelectColor[i].value);
	});
}

//Shipping Details controls
const shippingName = document.querySelector('#name-input');
if (shippingName) {
	shippingName.addEventListener('change', () => {
		checkoutAddressName.value = shippingName.value;
	});
}

const shippingEmail = document.querySelector('#email-input');

const shippingAddressOne = document.querySelector('#address1-input');
if (shippingAddressOne) {
	shippingAddressOne.addEventListener('change', () => {
		checkoutAddressOne.value = shippingAddressOne.value;
	});
}

const shippingAddressTwo = document.querySelector('#address2-input');
if (shippingAddressTwo) {
	shippingAddressTwo.addEventListener('change', () => {
		checkoutAddressOne.value += ' , ' + shippingAddressTwo.value;
	});
}

const shippingCity = document.querySelector('#city-input');
if (shippingCity) {
	shippingCity.addEventListener('change', () => {
		checkoutAddressCityStateZip.value = shippingCity.value + ', ';
	});
}

const shippingState = document.querySelector('#state-input');
if (shippingState) {
	shippingState.addEventListener('change', () => {
		checkoutAddressCityStateZip.value += shippingState.value + ' ';
	});
}

const shippingZip = document.querySelector('#zip-input');
if (shippingZip) {
	shippingZip.addEventListener('change', () => {
		checkoutAddressCityStateZip.value += shippingZip.value;
	});
}

//Checkout Summary controls
const checkoutProductName = document.querySelector('#checkout-product-name');
//const checkoutShipping = document.querySelector('#checkout-shipping');
//const checkoutTotal = document.querySelector('#checkout-total');
const checkoutAddressName = document.querySelector('#checkout-address-name');
const checkoutAddressOne = document.querySelector('#checkout-address1');
const checkoutAddressCityStateZip = document.querySelector('#checkout-address-city-state-zip');
const completeOrderButton = document.querySelector('#complete-order');


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

function changeShirtImage(color) {
	orderShirtImage.setAttribute('src', 'images/' + color + '-v-neck.jpg');
	orderShirtImage.setAttribute('alt', color + '-v-neck');
}


//Class to validate form inputs
class IsValid {
	constructor(input, type) {
		this.input = input;
		this.type = type;
		this.errors = [];
	}

	addError(error) {
		this.errors.push(error);
	}

	getErrorMessages() {
		const status = this.input.validity;

		if (status.valueMissing){
			this.addError('This is a required field');
		}
		if (status.typeMismatch) {
			this.addError('This entry does not match the field type.');
		}
		if (status.tooLong) {
			this.addError('This entry is too long');
		}
		if (status.tooShort) {
			this.addError('This entry is too short');
		}

		return this.errors;
	}

}

if (completeOrderButton) {
	completeOrderButton.addEventListener('click', (event) => {
		event.preventDefault();

		let validateArray = [shippingName, shippingEmail, shippingAddressOne, shippingCity, shippingState, shippingZip];
		validateArray.forEach((control) => {
			let validate = new IsValid(control, control.getAttribute('type'));
			let errorMessages = validate.getErrorMessages();

			if (errorMessages.length > 0) {
				errorMessages.forEach((err) => {
					control.insertAdjacentHTML('afterend', '<p class="error">' + err + '</p>');
				})
			}else if(errorMessages.length == 0 && document.getElementsByClassName('error')){
				//let parentNode = document.getElementsByClassName('shipping-info');
				let parentNode = control.parentNode;
				for(let i = 0; i < parentNode.getElementsByTagName('p').length; i++){
					parentNode.removeChild(parentNode.getElementsByTagName('p')[i]);
				}
			}
		})


	});
}