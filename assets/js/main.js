var searchEl = document.querySelector('#searchInput');
var searchBtn = document.querySelector('#searchBtn');
var gifEl = document.querySelector('#gif')
var firstDefinitionEl = document.querySelector('#firstdef')
var secondDefinitionEl = document.querySelector('#seconddef')

var searchResult = '';


function searchInput(event) {
    event.preventDefault();
    var searchResult = searchEl.value;
    if (searchResult) {
      fetchGiphyApi(searchResult);
      fetchDictionaryApi(searchResult)
    }
};

async function fetchGiphyApi(searchResult) {
  var GIPHY_API_KEY = 'XqV9B07FkKPoAffhSG7aPooSHyN7zfCo'
  var giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=' + GIPHY_API_KEY + '&q=' + searchResult + '&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
  const response = await fetch(giphyUrl);
  var data = await response.json();
  console.log(data);
  gifEl.src = data.data[0].embed_url;
  
}


// function getGiphyApi(searchResult) {
  
  
//   // var musicUrl = 'https://api.musixmatch.com/ws/1.1/track.search?q_track=' + searchResult + '&apikey=' + MUSIC_API_KEY +'&page_size=3&page=1&s_track_rating=desc'


//   console.log(giphyUrl);
//   fetch(giphyUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       gifEl.src = data.data[0].embed_url;
//     })
// };

async function fetchDictionaryApi(searchResult) {
  var dictionaryUrl = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + searchResult + '?key=' + '8f09496c-afb1-4519-863a-02f6646d1b9a'
  const response = await fetch(dictionaryUrl);
  var data = await response.json();
  console.log(data);
  
  var wordDefinition = data[0].shortdef[0];
  if (wordDefinition) {
    firstDefinitionEl.textContent = '1. ' + wordDefinition;
  };
  var secondWordDefinition = data[0].shortdef[1];
  if (secondWordDefinition) {
    secondDefinitionEl.textContent = '2. ' + secondWordDefinition;
  }
};

  searchBtn.addEventListener("click", searchInput);
