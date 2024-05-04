import React, { useEffect } from "react";
import SearchComponent from "../Components/SearchComponent";
import ContentList from "../Components/ContentList";
import { useAppContext } from "../store/appContext";

const HomePage: React.FC = () => {
  const { searchTvShowsHandler, data } = useAppContext();

  // Initial render of the data
  useEffect(() => {
    // check if a search already trigered
    if (data.length > 0) {
      return;
    } else {
      // when the page opens for the first time
      searchTvShowsHandler();
    }
  }, [data, searchTvShowsHandler]);

  return (
    <div>
      <SearchComponent />
      <ContentList />
    </div>
  );
};

export default HomePage;
