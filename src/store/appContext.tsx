import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { options } from "../Utils/options";
import { AppContextData, Movie } from "../Utils/types";

const AppContext = createContext<AppContextData>({
  activeButton: "",
  setActiveButton: () => {},
  searchBar: "",
  detailedPageId: 0,
  setDetailedPageId: () => {},
  searchMoviesHandler: async () => {},
  searchTvShowsHandler: async () => {},
  searchBarHandler: () => {},
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchBar, setSearchBar] = useState<string>("");
  const [detailedPageId, setDetailedPageId] = useState<number>(0);
  const [activeButton, setActiveButton] = useState<string>("tvShows");
  const [data, setData] = useState<Movie[]>([]);

  console.log(data);
  // For searching with Movies button
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

  // For searching with TvShows button
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

  const searchBarHandler = (value: string) => {
    setSearchBar(value);
    // Perform any other actions you want when the search bar value changes
  };

  const contextValue: AppContextData = {
    activeButton,
    setActiveButton,
    searchBar,
    detailedPageId,
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
