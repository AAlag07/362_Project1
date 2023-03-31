const generateQuoteOfTheDay = function() {
  const quotes = [
      {
        quote: "Some people are happy campers, me? I have the happy camper van.",
        author: "John Camper"
      },
      {
        quote: "Baseball is life. This means I have never left my homebase of my basement.",
        author: "John Baseball"
      },
      {
        quote: "We have to change the weatherman everyday or else we might get it wrong.",
        author: "John Weather"
      },
      {
        quote: "Road work ahead? It better work.",
        author: "John Driver"
      }
    ];
    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}
window.onload = function() {
  generateQuoteOfTheDay;
  document.getElementById("quote").addEventListener('click', generateQuoteOfTheDay);
}
