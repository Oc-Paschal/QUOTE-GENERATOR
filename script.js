const BTN = document.getElementById('btn');
const QUOTE = document.getElementById('quote');
const AUTHORNAME = document.getElementById('authorName');

const quotes = [
{ text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
{ text: "The best way to predict the future is to create it.", author: "Peter Drucker"},
{text:"Success is not final, failure is not fatal: it is the courage to continue that counts.",author: "Winston Churchill"},
{text:"Believe you can and you're halfway there.", author:"Theodore Roosevelt"},
{text:"Do what you can, with what you have, where you are.", author: "Theodore Roosevelt"},
{text:"It always seems impossible until it’s done.", author: "Nelson Mandela"},
{text:"Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
{text:"The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt"},
{text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama"},
{text:"You miss 100% of the shots you don’t take.", author: "Wayne Gretzky"},
{text:"Dream big and dare to fail.", author: "Norman Vaughan"},
{text:"The harder you work for something, the greater you’ll feel when you achieve it.",author: "Unknown"},
{text:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett"},
{text: "The secret of getting ahead is getting started.", author: "Mark Twain"},
{text:"In the middle of every difficulty lies opportunity.", author: "Albert Einstein"},
{text:"Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
{text: "It can only get better", author: "OcPaschal"},

]


function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  QUOTE.textContent = quotes[randomIndex].text;
  AUTHORNAME.textContent = "- " + quotes[randomIndex].author;
}

BTN.addEventListener("click", generateQuote);

// Show first quote on load
generateQuote();
