import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { options } from "../Utils/options";
import { AppContextData, Movie } from "../Utils/types";

const AppContext = createContext<AppContextData>({
  activeButton: "",
  setActiveButton: () => {},
  searchBar: "",
  data: [],
  detailedPageId: 0,
  findBySearchHandler: async () => {},
  setDetailedPageId: () => {},
  searchMoviesHandler: async () => {},
  searchTvShowsHandler: async () => {},
  searchBarHandler: () => {},
});

/* PROVIDER */
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchBar, setSearchBar] = useState<string>("");
  const [detailedPageId, setDetailedPageId] = useState<number>(0);
  const [activeButton, setActiveButton] = useState<string>("tvShows");
  const [data, setData] = useState<Movie[] | []>([]);

  //++++++++++++ For searching with Movies button
  const searchMoviesHandler = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc`,
        options
      );
      const dataArray = response.data.results.slice(0, 10);
      setData(dataArray);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  //++++++++++++++ For searching with TvShows button
  const searchTvShowsHandler = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_count.desc`,
        options
      );
      const dataArray = response.data.results.slice(0, 10);
      setData(dataArray);
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    }
  };

  // Change search bar value
  const searchBarHandler = (value: string) => {
    setSearchBar(value);
  };

  //+++++++++++++++ Triger a fetch with typed letters
  const findBySearchHandler = async () => {
    try {
      let url = `${process.env.REACT_APP_URL}/search/${
        activeButton === "movies" ? "movie" : "tv"
      }?query=${searchBar}&include_adult=false&language=en-US&page=1`;
      const response = await axios.get(url, options);
      const dataArray = response.data.results.slice(0, 10);
      setData(dataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const contextValue: AppContextData = {
    activeButton,
    data,
    setActiveButton,
    searchBar,
    detailedPageId,
    findBySearchHandler,
    setDetailedPageId,
    searchMoviesHandler,
    searchTvShowsHandler,
    searchBarHandler,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
