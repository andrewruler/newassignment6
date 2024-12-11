import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './GenreView.css';

function GenreView() {
  const navigate = useNavigate();
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    async function getMoviesData() {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    getMoviesData();
  }, [genreId, API_KEY]);

  function goToDetailView(movie) {
    navigate(`../Detail/${movie.id}`);
  }

  return (
    <>
      <div className="pagination">
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate(1)}>Next</button>
      </div>
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              onClick={() => goToDetailView(movie)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default GenreView;
