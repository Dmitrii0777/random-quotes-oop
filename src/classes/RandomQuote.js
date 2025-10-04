import quotes from "../data/quotes.js";
import Quote from "./Quote.js";
import MathUtils from "../utils/MathUtils.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
}

export default RandomQuote;
