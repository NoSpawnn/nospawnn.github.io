const date_options = { dateStyle: "full" };
const time_options = { hourCycle: "h24", timeZone: "Europe/London" };
const baseSearchURL = "https://duckduckgo.com/?q=";
const searchBox = document.querySelector(".search-box");

function search() {
  var searchTerm = searchBox.value;

  if (searchTerm) {
    var searchURL = baseSearchURL + encodeURIComponent(searchTerm);
    open(searchURL, "_blank");
    searchBox.value = "";
  }

};

document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for enter key to search box
  searchBox.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      search();
    }
  });

  // Set welcome text with current date
  const dateElement = document.querySelector(".date");
  dateElement.innerHTML = new Date().toLocaleDateString(undefined, date_options);

  // Get and keep clock element updated
  const clockElement = document.querySelector(".clock");
  function updateClock(clock) {
    clock.innerHTML = new Date().toLocaleTimeString(undefined, time_options);
  }

  updateClock(clockElement);
  setInterval(function () {
    updateClock(clockElement);
  }, 1000);

});
