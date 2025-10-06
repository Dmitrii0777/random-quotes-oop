import quotes from "../data/quotes.js";
import Quote from "./Quote.js";
import MathUtils from "../utils/MathUtils.js";
import config from "../../config.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaAPI(source = "PUBLIC_API_URL") {
    // Dictionary with URLs for different buttons/sources
    const url =
      source === "PUBLIC_API_URL"
        ? `${config[source]}/api/quotes/random`
        : `${config[source]}/quotes/random-single`;
    const options = { headers: { "Content-Type": "application/json" } };

    try {
      const response = await fetch(url, options);
      const quote = await response.json();
      const id = quote.id;
      const author = quote.author;
      const text = quote.text || quote.quote;
      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
