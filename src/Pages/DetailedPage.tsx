import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./DetailedPage.module.css";
import { options } from "../Utils/options";
import { Movie } from "../Utils/types";

const DetailedPage: React.FC = () => {
  const { type, query } = useParams<{ type: string; query: string }>();
  const [data, setData] = useState<Movie | null>(null);
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${process.env.REACT_APP_URL}/search/${type}?query=${query
          ?.toLocaleLowerCase()
          .replace(/\s/g, "%20")}&include_adult=false&language=en-US&page=1`;
        const response = await axios.get(url, options);
        const result = response.data.results[0];
        setData(result);

        // try to fetch trailer
        if (result?.id && type === "movie") {
          const videoResponse = await axios.get(
            `${process.env.REACT_APP_URL}/movie/${result.id}/videos?language=en-US`,
            options
          );
          const videos = videoResponse.data.results;
          if (videos && videos.length > 0) {
            // it has more trailers
            setVideoId(videos[0].key);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [type, query]);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>
        {"< Back"}
      </Link>
      {data && (
        <div className={styles.content}>
          {videoId ? (
            <iframe
              className={styles.image}
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={
                data.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
                  : "/noMedia.webp"
              }
              alt={data.title}
              className={styles.image}
            />
          )}
          <div className={styles.title}>
            {data.title ? data.title : data.name}
          </div>
          <h4 className={styles.overview}>
            {type === "movie" ? "Movie Overview" : "Tv Show Overview"}
          </h4>
          <div className={styles.description}>{data.overview}</div>
        </div>
      )}
    </div>
  );
};

export default DetailedPage;
