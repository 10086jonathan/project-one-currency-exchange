// constants
const BASE_URL = 'http://data.fixer.io/api/';
const API_KEY = '14c529a79f00dcfec77a5bd042c0a5d1';

// variable
let listData, currencyData;

// cached element references
const $listFrom = $('#list-from');
const $listTo = $('#list-to')
const $currencyFrom = $('.from');
const $currencyTo = $('.to');

// event listeners
$currencyFrom.change(handleSelect);

// functions
init();

function init() {
  getListData();
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

function handleSelect() {
  // function to get currency rate and store it in a variable
  $.ajax(`${BASE_URL}latest?access_key=${API_KEY}`)
    .then(function (data) {
      currencyData = data;

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