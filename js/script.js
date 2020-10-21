// constants
const BASE_URL = 'http://data.fixer.io/api/';
const API_KEY = CONFIG.fixerAPIKey;

// variable
let listData, currencyData;

// cached element references
const $listFrom = $('#list-from');
const $listTo = $('#list-to')
const $currencyFrom = $('.from');
const $currencyTo = $('.to');

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
  $.ajax(`${BASE_URL}symbols?access_key=${API_KEY}`)
    .then(function (data) {
      listData = data;
      render();
    }, function (error) {
      console.log('error', error);
    });
};

function getSymbols() {
  // function to get currency rate and store it in a variable
  $.ajax(`${BASE_URL}latest?access_key=${API_KEY}`)
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
  const fromRate = currencyData[$currencyFrom.val()]
  const toRate = currencyData[$currencyTo.val()]
  console.log(fromRate, toRate);

  // make the calculation
  // take final calculation value and display to the DOM
  // ....
}


function render() {
  $listFrom.html(generateList());
  $listTo.html(generateList());
  // console.log('data', listData);
  // console.log('generateList', generateList());
};



// function getDropDownList() {
//     $.ajax(BASE_URL)
//       .then(function(data){
//         console.log(data);
//       })

// };

// function generateList() {
// return 
// }


// jQuery.each(currencyList, function(i, val) {
// $('#currencyfromlist' + i).append($currencyFromList.val(val));
// console.log(value, key)
// $currencyFromList.val(currencyFrom)
// });