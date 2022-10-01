const netToGross = document.getElementById('net-to-gross');
const grossToNet = document.getElementById('gross-to-net');
const percent_19 = document.getElementById('19%');
const percent_7 = document.getElementById('7%');
const enteredAmount = document.getElementById('amount');
const submit = document.getElementById('submit');
const displayTax = document.getElementById('display-tax');
const displayAmount = document.getElementById('display-amount');
const amountGross = document.getElementById('amount-gross');
const amountNet = document.getElementById('amount-net');
const title = document.getElementById('title');

let result = null;
let tax = null;
const title1 = 'Nettobetrag(Preis ohne Mehrwertsteuer) in Euro';
const title2 = 'Bruttobetrag(Preis inklusive Mehrwertsteuer) in Euro';

const showText1 = () => {
    title.innerHTML = title1;
    amountNet.style.display = 'none';
    amountGross.style.display = 'block';
    amountGross.innerHTML = ' Bruttobetrag(Endpreis)';
};

const showText2 = () => {
    title.innerHTML = title2;
    amountGross.style.display = 'none';
    amountNet.style.display = 'block';
    amountNet.innerHTML = ' Nettobetrag';
};

//  put this block of code in a function to avoid code repetition
const displayGrossAndTax = () => {
    displayTax.innerHTML = tax.toFixed(2) + ' €';
    result = +enteredAmount.value + tax;
    displayAmount.innerHTML = result.toFixed(2) + ' €';
};

//  put this block of code in a function to avoid code repetition
const displayNetAndTax = () => {
    displayAmount.innerHTML = result.toFixed(2) + ' €';
    tax = +enteredAmount.value - result;
    displayTax.innerHTML = tax.toFixed(2) + ' €';
};

const calculate = () => {
    if (
        netToGross.checked &&
        percent_19.checked &&
        enteredAmount.value.trim() !== ''
    ) {
        tax = (enteredAmount.value * 19) / 100;
        displayGrossAndTax();
    } else if (
        netToGross.checked &&
        percent_7.checked &&
        enteredAmount.value.trim() !== ''
    ) {
        tax = (enteredAmount.value * 7) / 100;
        displayGrossAndTax();
    } else if (
        grossToNet.checked &&
        percent_19.checked &&
        enteredAmount.value.trim() !== ''
    ) {
        result = enteredAmount.value / 1.19;
        displayNetAndTax();
    } else if (
        grossToNet.checked &&
        percent_7.checked &&
        enteredAmount.value.trim() !== ''
    ) {
        result = enteredAmount.value / 1.07;
        displayNetAndTax();
    }
};
