import React from "react";
import { useAppContext } from "../store/appContext";
import SearchInput from "../SideComponents/SearchInput";
import MoviesButton from "../SideComponents/MoviesButton";
import TvShowsButton from "../SideComponents/TvShowsButton";
import styles from "./SearchComponent.module.css";

const SearchComponent: React.FC = () => {
  // context to check which button is active
  const { activeButton } = useAppContext();

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        <MoviesButton
          style={`${styles.button} ${
            activeButton === "movies" ? styles.active : ""
          }`}
        />
        <TvShowsButton
          style={`${styles.button} ${
            activeButton === "tvShows" ? styles.active : ""
          }`}
        />
      </div>
      <SearchInput style={styles.searchBar} />
    </div>
  );
};

export default SearchComponent;
