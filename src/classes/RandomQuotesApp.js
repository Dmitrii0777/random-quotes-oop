import RandomQuote from "./RandomQuote.js";

class RandomQuoteApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.currentQuote = null;
    this.init();
  }

  displayCurrentQuote() {
    // const { text, author } = this.currentQuote;
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayCurrentQuote();
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => this.getRandomQuote());
  }
}

export default RandomQuoteApp;
