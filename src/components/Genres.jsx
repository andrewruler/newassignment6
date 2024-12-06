import './Genres.css';
import { useNavigate } from 'react-router-dom';

function Genres(props) {
  const navigate = useNavigate();

  function goToGenreView(genre) {
    navigate(`./Genres/${genre?.id}`);
  }

  return (
    <div className="genres-container">
      <h1>Genres</h1>
      <ul>
        {props.genreList.map((genre) => (
          <li key={genre?.id} onClick={() => goToGenreView(genre)}>
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;
