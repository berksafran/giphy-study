import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";
import { Loading, GifList, Button } from "../../components";
import CONSTANT from "../../constants";
import { NoMatchesFound } from "./styles/styles";

function SearchResults() {
  const { searchKeyword } = useParams();
  const [lastCount, setLastCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(null);
  const history = useHistory();

  // Fetch more searching result data
  const getMoreSearchResult = async () => {
    try {
      setLoading(true);
      const response = await api.getMoreSearchResult(searchKeyword, lastCount);
      if (response.meta.msg === "OK") {
        await setSearchResults(prevState => [...prevState, ...response.data]);
        await setLastCount(prevState => prevState + CONSTANT.LIMIT);
        await setLoading(false);
      }
    } catch (error) {
      history.push("/error/", { error });
    }
  };

  // Initial data of searching
  const getResponseOfSearch = async () => {
    try {
      setLoading(true);
      await setSearchResults(null);
      await setLastCount(0);
      const response = await api.getSearchGifResult(searchKeyword, lastCount);
      if (response.meta.msg === "OK") {
        await setLastCount(prevState => prevState + CONSTANT.LIMIT);
        await setSearchResults(response.data);
        await setLoading(false);
      }
    } catch (error) {
      history.push("/error/", { error });
    }
  };

  useEffect(() => {
    getResponseOfSearch();
  }, [searchKeyword]);

  if (loading && searchResults === null) return <Loading />;
  if (!loading && searchResults && searchResults.length === 0)
    return <NoMatchesFound>No matches found: {searchKeyword}</NoMatchesFound>;
  return (
    <>
      <h1>
        Matches found: {searchKeyword} ({searchResults && searchResults.length})
      </h1>
      {searchResults && <GifList gifData={searchResults} />}
      {loading ? (
        <Loading />
      ) : (
        <Button onClick={getMoreSearchResult} text="LOAD MORE" />
      )}
    </>
  );
}

export default SearchResults;
