// constants
const BASE_URL = 'http://data.fixer.io/api/';
const API_KEY = '14c529a79f00dcfec77a5bd042c0a5d1';

// variable
let listData, currencyData;

// cached element references
const $list = $('#list');
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
  $.ajax(`${BASE_URL}symbols?access_key=${API_KEY}`)
    .then(function (data) {
      listData = data;
      render();
    }, function (error) {
      console.log('error', error);
    });
};

function handleSelect() {
  alert('selection has been made');
};

function generateList() {

  for (const [key, value] of Object.entries(listData.symbols)) {

    return `
          <option value="${key}">${value}</option>
          `

  };

};


function render() {
  $list.html(generateList())
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