import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./ContentCard.module.css";
import { Movie } from "../Utils/types";

const ContentCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    let path = movie.title
      ? `/content/movie/${movie.original_title.replace(/\s/g, "%20")}`
      : `/content/tv/${movie.original_name.replace(/\s/g, "%20")}`;
    navigate(path);
  };

  return (
    <div className={style.card} onClick={handleClick}>
      <img
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            : "/noMedia.webp"
        }
        alt={movie.title ? movie.title : movie.name}
        className={style.image}
      />

      <div className={style.title}>
        {movie.title ? movie.title : movie.name}
      </div>
    </div>
  );
};

export default ContentCard;
