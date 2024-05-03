import React, { useState } from "react";
import { useAppContext } from "../store/appContext";

const SearchInput: React.FC<{ style: string }> = ({ style }) => {
  const {
    searchBarHandler,
    searchBar,
    findBySearchHandler,
    activeButton,
    searchMoviesHandler,
    searchTvShowsHandler,
  } = useAppContext();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    searchBarHandler(value);

    if (timer) {
      clearTimeout(timer);
    }

    // Set up calling functionality depending on value in search bar
    const newTimer = setTimeout(() => {
      if (value.length >= 3) {
        findBySearchHandler();
      } else {
        if (activeButton === "movies") {
          searchMoviesHandler();
        } else if (activeButton === "tvShows") {
          searchTvShowsHandler();
        }
      }
    }, 1000);

    setTimer(newTimer);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className={style}
      value={searchBar}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
