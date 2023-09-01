var searchEl = document.querySelector('#searchInput');
var searchBtn = document.querySelector('#searchBtn');
var gifContainerEl = document.querySelector('#gifContainer')

var searchResult = '';


function searchInput(event) {
    event.preventDefault();
    var searchResult = searchEl.value;
    if (searchResult) {
      getGiphyApi(searchResult);
    }
};
function getGiphyApi(searchResult) {
  var GIPHY_API_KEY = 'XqV9B07FkKPoAffhSG7aPooSHyN7zfCo'
  var giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=' + GIPHY_API_KEY + '&q=' + searchResult + '&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
    console.log(giphyUrl);
    fetch(giphyUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var image = data.data[0].url;

        var gif = document.createElement('iframe');
        gif.src = data.data[0].embed_url;
        gifContainerEl.append(gif)
    
        console.log(image)
      });
    };

  searchBtn.addEventListener("click", searchInput);
