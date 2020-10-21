// constants
const BASE_URL = 'https://proj-proxify.herokuapp.com';
// const API_KEY = CONFIG.fixerAPIKey;

// variable
let listData, currencyData, currencyConversion;

// cached element references
const $listFrom = $('#list-from');
const $listTo = $('#list-to')
const $currencyFrom = $('.from');
const $currencyTo = $('.to');
const $userInput = $('#user-input');

// event listeners
$currencyTo.change(handleSelect);

// functions
init();

function init() {
  getListData();
  getSymbols();
};

function getListData() {
  // function to get currency list data and store it in a variable
  $.ajax(BASE_URL + '/symbols?')
    .then(function (data) {
      listData = data;
      render();
    }, function (error) {
      console.log('error', error);
    });
};

function getSymbols() {
  // function to get currency rate and store it in a variable
  $.ajax(BASE_URL + '/latest?')
    .then(function (data) {
      currencyData = data.rates
    }, function (error) {
      console.log('error: ', error);
    });
};
function generateList() {
  // function to create currency list for select element
  
  for (const [key, value] of Object.entries(listData.symbols)) {
    $listFrom.append( `
    <option value="${key}">${value}</option>
    `)
    $listTo.append( `
    <option value="${key}">${value}</option>
    `)
  };
};

function handleSelect() {
  const fromRate = currencyData[$currencyFrom.val()];
  const toRate = currencyData[$currencyTo.val()];
  const rateConversion = toRate / fromRate;

  currencyConversion = rateConversion * $userInput;
};

function render() {
  $listFrom.html(generateList());
  $listTo.html(generateList());
  
  if(currencyConversion) {
    document.getElementById('result').innerHTML = currencyConversion;
  }

};