var searchEl = document.querySelector('#searchInput');
var searchBtn = document.querySelector('#searchBtn');

function searchInput(event) {
    event.preventDefault();
    var search = searchEl.value;
    console.log(search);
  }
  searchBtn.addEventListener("click", searchInput);