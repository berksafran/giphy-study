import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import CONSTANT from "../../constants";
import { Loading, GifList, Button } from "../../components";
import useInfiniteScroll from "../../services/customHooks/useInfinitive";
import { HomeWrapper } from "./styles/styles";

function Home() {
  const [trendingGifs, setTrendingGifs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastCount, setLastCount] = useState(CONSTANT.LIMIT);
  const history = useHistory();

  useEffect(() => {
    // Get initial data of trending gifs
    const getTrendingGifs = async () => {
      try {
        const response = await api.getTrendingGifs();
        await setTrendingGifs(response.data);
        await setLoading(false);
      } catch (error) {
        history.push("/error/", { error });
      }
    };
    getTrendingGifs();
  }, [history]);

  // Get more trending gifs data
  const getMoreTrendingGifs = async () => {
    try {
      setLoading(true);
      const response = await api.getMoreTrendingGifs(lastCount);
      await setLastCount(prevState => prevState + CONSTANT.LIMIT);
      await setTrendingGifs(prevState => {
        return [...prevState, ...response.data];
      });
      await setLoading(false);
    } catch (error) {
      history.push("/error");
    }
  };

  // Infinitive scroll
  useInfiniteScroll(callback);
  function callback() {
    getMoreTrendingGifs();
    document.getElementById("trendingList").style.height =
      parseInt(
        document.getElementById("trendingList").style.height.replace("px", ""),
        10
      ) +
      600 +
      "px";
  }

  // Render
  if (loading && trendingGifs === null) return <Loading padding={50} />;
  return (
    <HomeWrapper id="trendingList">
      <h1>Trending GIFs ({lastCount}) </h1>
      {trendingGifs && <GifList gifData={trendingGifs} />}
      {loading ? (
        <Loading />
      ) : (
        <Button onClick={getMoreTrendingGifs} text="LOAD MORE" />
      )}
    </HomeWrapper>
  );
}

export default Home;
