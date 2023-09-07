//using just the main.js as of right now

// var API_KEY = 'XqV9B07FkKPoAffhSG7aPooSHyN7zfCo'

// var searchResult

// var url = 'https://api.giphy.com/v1/gifs/search?api_key=' + API_KEY + '&q=' + searchResult + '&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

var showText = function (target, message, index, interval) {   
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }
  
  $(function () {
    showText("#msg", "Hello, World!", 0, 500);   
  });