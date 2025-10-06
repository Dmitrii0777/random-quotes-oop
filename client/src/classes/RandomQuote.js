import quotes from "../data/quotes.js";
import Quote from "./Quote.js";
import MathUtils from "../utils/MathUtils.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaAPI(source = "public") {
    // Dictionary with URLs for different buttons/sources
    const urls = {
      public: "https://quoteslate.vercel.app/api/quotes/random",
      local: "http://localhost:3000/quotes/random-single",
    };
    const url = urls[source]; // select URL by parameter
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
