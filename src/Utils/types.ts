import { Dispatch, SetStateAction } from "react";

// Props of button components
export interface ButtonProps {
  style: string;
}

// Data of the context
export interface AppContextData {
  activeButton: string;
  setActiveButton: Dispatch<SetStateAction<string>>;
  searchBar: string;
  data: Movie[];
  detailedPageId: number;
  findBySearchHandler: () => Promise<void>;
  setDetailedPageId: Dispatch<SetStateAction<number>>;
  searchMoviesHandler: () => Promise<void>;
  searchTvShowsHandler: () => Promise<void>;
  searchBarHandler: (value: string) => void;
  loading: boolean;
}

// For movies data from API
export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title?: string;
  name?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
}
