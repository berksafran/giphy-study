import axios from "axios";
import CONSTANT from "../../constants";

class Api {
  // Get Trending Gifs
  async getTrendingGifs(lastCount) {
    const offset = lastCount === (null || undefined) ? 0 : lastCount;
    try {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending",
        {
          params: {
            api_key: CONSTANT.API_KEY,
            limit: CONSTANT.LIMIT,
            offset
          }
        }
      );
      if (response.data.meta.msg === "OK") {
        return response.data;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  // Get more Trending Gifs with infinitive scroll, care to offset
  async getMoreTrendingGifs(lastCount) {
    return await this.getTrendingGifs(lastCount);
  }

  // Search Gif and fetch data from GIPHY Api
  async getSearchGifResult(searchWord, lastCount) {
    const offset = lastCount;
    try {
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: CONSTANT.API_KEY,
          limit: CONSTANT.LIMIT,
          offset,
          q: searchWord
        }
      });
      if (response.data.meta.msg === "OK") {
        return response.data;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async getMoreSearchResult(searchWord, lastCount) {
    return await this.getSearchGifResult(searchWord, lastCount);
  }
}

export default new Api();
