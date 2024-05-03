import React, { useEffect } from "react";
import SearchComponent from "../Components/SearchComponent";
import ContentList from "../Components/ContentList";
import { useAppContext } from "../store/appContext";

const HomePage: React.FC = () => {
  const { searchTvShowsHandler } = useAppContext();

  // when rendered TV Shows must open
  useEffect(() => {
    // render Tv Shows
    searchTvShowsHandler();
  }, []);

  return (
    <div>
      <SearchComponent />
      <ContentList />
    </div>
  );
};

export default HomePage;
