var searchEl = document.querySelector('#searchInput');
var searchBtn = document.querySelector('#searchBtn');
var gifEl = document.querySelector('#gif')

var searchResult = 'banana';


function searchInput(event) {
    event.preventDefault();
    var searchResult = searchEl.value;
    if (searchResult) {
      getGiphyApi(searchResult);
    }
};



function getGiphyApi(searchResult) {
var GIPHY_API_KEY = 'XqV9B07FkKPoAffhSG7aPooSHyN7zfCo'
var MUSIC_API_KEY = ' 0f99adf35f5007a56997d29bd724ab23'
var giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=' + GIPHY_API_KEY + '&q=' + searchResult + '&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
var musicUrl = 'http://api.musixmatch.com/ws/1.1/track.search?q_track=' + searchResult + '&apikey=' + MUSIC_API_KEY +'&page_size=3&page=1&s_track_rating=desc'
  console.log(giphyUrl);
  fetch(giphyUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      gifEl.src = data.data[0].embed_url;
    })
    .then(fetch (musicUrl, {mode:'no-cors'}))
    .then(function (response) {

      console.log(response)
      // return response.json();
    })
  };
  searchBtn.addEventListener("click", searchInput);
