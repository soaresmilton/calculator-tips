const FIVE_PERCENT = 0.05;
const TEN_PERCENT = 0.1;
const FIFTEEN_PERCENT = 0.15;
const TWENTYFIVE_PERCENT = 0.25;
const FIFTY_PERCENT = 0.5;

const btnFivePercent = document.getElementById('btnFivePercent');
const btnTenPercent = document.getElementById('btnTenPercent');
const btnFifteenPercent = document.getElementById('btnFifteenPercent');
const btnTwentyFivePercent = document.getElementById('btnTwentyFivePercent');
const btnFiftyPercent = document.getElementById('btnFiftyPercent');
const btnCustom = document.getElementById('custom-btn');

// const btnTips = document.querySelectorAll('.btnTips');


const reset = document.getElementById('reset');

const percents = [FIVE_PERCENT, TEN_PERCENT, FIFTEEN_PERCENT, TWENTYFIVE_PERCENT, FIFTY_PERCENT, btnCustom];

class Calculator {

  bill(value) {
    value = document.getElementById('bill-input').value;
    return parseFloat(value, 10);
  }

  numberOfPeople(people) {
    people = document.getElementById('number-of-people-input').value;
    return parseFloat(people, 10);
  }

  totalAmount(bill, numberOfPeople) {
    bill = this.bill() + this.tip;
    numberOfPeople = this.numberOfPeople();
    return `$ ${(bill / numberOfPeople).toFixed(2)}`;
  }

  reset() {
    document.getElementById('bill-input').value = 0;
    document.getElementById('number-of-people-input').value = 0;
    reset.disabled = true;
    tipAmountRes.innerHTML = `$ 0.00`;
    totalAmountRes.innerHTML = `$ 0.00`;
  }

}

const calculator = new Calculator;


const tipAmountRes = document.getElementById('tip-amount-value');
const totalAmountRes = document.getElementById('total-amount');
const numberOfPeopelInput = document.getElementById('number-of-people-input');
const spanNumberOfPeople = document.querySelector('.span-nop');

//FIVE PERCENT

btnFivePercent.addEventListener('click', fivePercentCalc);

function fivePercentCalc(tipAmount, totalAmount) {

  if (calculator.numberOfPeople() === 0 || !calculator.numberOfPeople()) {
    numberOfPeopelInput.style.border = '1px solid rgb(218, 15, 15)';
    numberOfPeopelInput.style.borderRadius = '0.3rem';
    spanNumberOfPeople.classList.remove('sr-only');
    return;
  }

  spanNumberOfPeople.classList.add('sr-only');
  numberOfPeopelInput.style.border = 'none';



  reset.disabled = false;

  tipAmount = (calculator.bill() * FIVE_PERCENT) / calculator.numberOfPeople();
  totalAmount = (calculator.bill() / calculator.numberOfPeople()) + tipAmount;

  return (
    tipAmountRes.innerHTML = `$ ${tipAmount.toFixed(2)}`,
    totalAmountRes.innerHTML = `$ ${totalAmount.toFixed(2)}`
  );
}

//TEN PERCENT

btnTenPercent.addEventListener('click', tenPercentCalc);

function tenPercentCalc(tipAmount, totalAmount) {

  if (calculator.numberOfPeople() === 0 || !calculator.numberOfPeople()) {
    numberOfPeopelInput.style.border = '1px solid rgb(218, 15, 15)';
    numberOfPeopelInput.style.borderRadius = '0.3rem';
    spanNumberOfPeople.classList.remove('sr-only');
    return;
  }

  spanNumberOfPeople.classList.add('sr-only');
  numberOfPeopelInput.style.border = 'none';

  reset.disabled = false;

  tipAmount = (calculator.bill() * TEN_PERCENT) / calculator.numberOfPeople();
  console.log(tipAmount)
  totalAmount = (calculator.bill() / calculator.numberOfPeople()) + tipAmount;

  return (
    tipAmountRes.innerHTML = `$ ${tipAmount.toFixed(2)}`,
    totalAmountRes.innerHTML = `$ ${totalAmount.toFixed(2)}`
  );
}

//FIFTEEN PERCENT

btnFifteenPercent.addEventListener('click', fifteenPercentCalc);

function fifteenPercentCalc(tipAmount, totalAmount) {

  if (calculator.numberOfPeople() === 0 || !calculator.numberOfPeople()) {
    numberOfPeopelInput.style.border = '1px solid rgb(218, 15, 15)';
    numberOfPeopelInput.style.borderRadius = '0.3rem';
    spanNumberOfPeople.classList.remove('sr-only');
    return;
  }

  spanNumberOfPeople.classList.add('sr-only');
  numberOfPeopelInput.style.border = 'none';

  reset.disabled = false;

  tipAmount = (calculator.bill() * FIFTEEN_PERCENT) / calculator.numberOfPeople();
  totalAmount = (calculator.bill() / calculator.numberOfPeople()) + tipAmount;

  return (
    tipAmountRes.innerHTML = `$ ${tipAmount.toFixed(2)}`,
    totalAmountRes.innerHTML = `$ ${totalAmount.toFixed(2)}`
  );
}

//TWENTY FIVE PERCENT

btnTwentyFivePercent.addEventListener('click', twentyFivePercentCalc);

function twentyFivePercentCalc(tipAmount, totalAmount) {

  if (calculator.numberOfPeople() === 0 || !calculator.numberOfPeople()) {
    numberOfPeopelInput.style.border = '1px solid rgb(218, 15, 15)';
    numberOfPeopelInput.style.borderRadius = '0.3rem';
    spanNumberOfPeople.classList.remove('sr-only');
    return;
  }

  spanNumberOfPeople.classList.add('sr-only');
  numberOfPeopelInput.style.border = 'none';

  reset.disabled = false;

  tipAmount = (calculator.bill() * TWENTYFIVE_PERCENT) / calculator.numberOfPeople();
  totalAmount = (calculator.bill() / calculator.numberOfPeople()) + tipAmount;

  return (
    tipAmountRes.innerHTML = `$ ${tipAmount.toFixed(2)}`,
    totalAmountRes.innerHTML = `$ ${totalAmount.toFixed(2)}`
  );
}

//FIFTY PERCENT

btnFiftyPercent.addEventListener('click', fiftyPercentCalc);

function fiftyPercentCalc(tipAmount, totalAmount) {

  if (calculator.numberOfPeople() === 0 || !calculator.numberOfPeople()) {
    numberOfPeopelInput.style.border = '1px solid rgb(218, 15, 15)';
    numberOfPeopelInput.style.borderRadius = '0.3rem';
    spanNumberOfPeople.classList.remove('sr-only');
    return;
  }

  spanNumberOfPeople.classList.add('sr-only');
  numberOfPeopelInput.style.border = 'none';
  reset.disabled = false;

  tipAmount = (calculator.bill() * FIFTY_PERCENT) / calculator.numberOfPeople();
  totalAmount = (calculator.bill() / calculator.numberOfPeople()) + tipAmount;

  return (
    tipAmountRes.innerHTML = `$ ${tipAmount.toFixed(2)}`,
    totalAmountRes.innerHTML = `$ ${totalAmount.toFixed(2)}`
  );
}

//CUSTOM BUTTON

btnCustom.addEventListener('click', customPercentCalc);

function customPercentCalc(tipAmount, totalAmount) {

  if (calculator.numberOfPeople() === 0 || !calculator.numberOfPeople()) {
    numberOfPeopelInput.style.border = '1px solid rgb(218, 15, 15)';
    numberOfPeopelInput.style.borderRadius = '0.3rem';
    spanNumberOfPeople.classList.remove('sr-only');
    return;
  }

  spanNumberOfPeople.classList.add('sr-only');
  numberOfPeopelInput.style.border = 'none';
  reset.disabled = false;

  let customValue = Number(window.prompt('Please, inform a TIP value (%):'));
  customValue = customValue / 100;

  tipAmount = (calculator.bill() * customValue) / calculator.numberOfPeople();
  totalAmount = (calculator.bill() / calculator.numberOfPeople()) + tipAmount;
  ;
  return (
    tipAmountRes.innerHTML = `$ ${tipAmount.toFixed(2)}`,
    totalAmountRes.innerHTML = `$ ${totalAmount.toFixed(2)}`
  );
}


// btnTips.forEach((btn) => {
//   btn.addEventListener('click', tipCalc)
// })


if (reset.disabled) {
  reset.addEventListener('click', () => {
    calculator.reset();
  })
}


