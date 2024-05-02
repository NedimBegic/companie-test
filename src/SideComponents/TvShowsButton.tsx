import React from "react";
import { ButtonProps } from "../Utils/types";
import { useAppContext } from "../store/appContext";

const TvShowsButton: React.FC<ButtonProps> = ({ style }) => {
  const { searchTvShowsHandler, setActiveButton } = useAppContext();

  const handleClick = async () => {
    // change active button to Movies
    setActiveButton("tvShows");
    // fetch data for TvShows button
    searchTvShowsHandler();
  };

  return (
    <button className={style} onClick={handleClick}>
      TV Shows
    </button>
  );
};

export default TvShowsButton;
