var apiKey = '0f99adf35f5007a56997d29bd724ab23'
var searchEl = document.querySelector('#searchInput');
var searchBtn = document.querySelector('#searchBtn');


var searchResult = '';

function searchInput(event) {
    event.preventDefault();
    var searchResult = searchEl.value;
    if (searchResult) {
      getMusicApi(searchResult);
    }
};
function getMusicApi(searchreult); {
    var apiKey = '0f99adf35f5007a56997d29bd724ab23';

}



