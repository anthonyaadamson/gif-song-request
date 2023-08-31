var searchEl = document.querySelector('#searchInput');
var searchBtn = document.querySelector('#searchBtn');

function searchInput(event) {
    event.preventDefault();
    var searchResult = searchEl.value;
    console.log(searchResult);
  };
  searchBtn.addEventListener("click", searchInput);

function getGiphyApi() {
  var searchResult = searchResult
  var GIPHY_API_KEY = 'XqV9B07FkKPoAffhSG7aPooSHyN7zfCo'
  var giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=' + GIPHY_API_KEY + '&q=' + searchResult + '&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
  
  fetch(giphyUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  };
  searchBtn.addEventListener("click", getGiphyApi);