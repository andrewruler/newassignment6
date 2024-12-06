import { Link } from "react-router-dom";
import "./Feature.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Feature() {
  const [movies, setMovies] = useState([]);

  function shuffleArray(array) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      const shuffledMovies = shuffleArray(response.data.results);
      const featuredMovies = [
        shuffledMovies.pop(),
        shuffledMovies.pop(),
        shuffledMovies.pop(),
      ];
      setMovies(featuredMovies);
    }
    getMovies();
  }, []);

  return (
    <div className="hero">
      <div className="movie-cards-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movies/Detail/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
