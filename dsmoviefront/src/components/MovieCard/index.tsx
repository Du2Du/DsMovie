import { MovieScore } from "components/MovieScore";
import React from "react";

export const MovieCard: React.FC = () => {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  const { image, title } = movie;

  return (
    <div>
      <img className="dsmovie-movie-card-image" src={image} alt={title} />
      <div className="dsmovie-card-bottom-container">
        <h3>{title}</h3>
        <MovieScore />
        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
      </div>
    </div>
  );
};
