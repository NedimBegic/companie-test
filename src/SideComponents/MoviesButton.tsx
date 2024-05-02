import React from "react";
import { ButtonProps } from "../Utils/types";
import { useAppContext } from "../store/appContext";

const MoviesButton: React.FC<ButtonProps> = ({ style }) => {
  const { searchMoviesHandler, setActiveButton } = useAppContext();

  const handleClick = async () => {
    // change active button to Movies
    setActiveButton("movies");
    // fetch data for Movies button
    searchMoviesHandler();
  };

  return (
    <button className={style} onClick={handleClick}>
      Movies
    </button>
  );
};

export default MoviesButton;
