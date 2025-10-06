import Quote from "./Quote.js";
import RandomQuote from "./RandomQuote.js";

class RandomQuoteApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuotePublicAPIBtn = document.getElementById(
      "random-quote-public-api-btn"
    );
    this.randomQuoteOwnAPIBtn = document.getElementById(
      "random-quote-own-api-btn"
    );
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.currentQuote = null;
    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async handleRandomQuoteViaAPI(source) {
    const quoteViaAPI = await RandomQuote.getRandomQuoteViaAPI(source);
    this.changeCurrentQuote(quoteViaAPI);
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () =>
      this.randomQuoteHandler()
    );

    this.randomQuotePublicAPIBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaAPI("PUBLIC_API_URL")
    );

    this.randomQuoteOwnAPIBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaAPI("API_URL")
    );
  }
}

export default RandomQuoteApp;
