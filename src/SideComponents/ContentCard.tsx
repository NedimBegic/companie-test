import React from "react";
import style from "./ContentCard.module.css";
import { Movie } from "../Utils/types";

const ContentCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className={style.card}>
      {movie.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title ? movie.title : movie.name}
          className={style.image}
        />
      )}
      <div className={style.title}>
        {movie.title ? movie.title : movie.name}
      </div>
    </div>
  );
};

export default ContentCard;
