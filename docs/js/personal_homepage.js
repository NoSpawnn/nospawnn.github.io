const date_options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
const baseSearchURL = "https://duckduckgo.com/?q=";
const searchElement = document.getElementById("search-box");

function search() {
  var searchTerm = searchElement.value;

  if (searchTerm) {
    var searchURL = baseSearchURL + encodeURIComponent(searchTerm);
    open(searchURL, "_blank");
    searchElement.value = "";
  }

};

document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for enter key to search box
  const searchElement = document.getElementById("search-box");
  searchElement.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      search();
    }
  });

  // Set welcome text with current date
  const welcomeElement = document.getElementById("date");
  welcomeElement.innerHTML = new Date().toLocaleDateString(undefined, date_options);

  // Get and keep clock element updated
  const clockElement = document.getElementById("clock");
  function updateClock(clock) {
    clock.innerHTML = new Date().toLocaleTimeString();
  }

  updateClock(clockElement);
  setInterval(function () {
    updateClock(clockElement);
  }, 1000);

});
