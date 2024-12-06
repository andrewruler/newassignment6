import Nav from "../components/Header";
import Footer from "../components/Footer";
import Genres from "../components/Genres";
import { Outlet } from "react-router-dom";

function MoviesView() {
  const genreList = [
    { name: "Action", id: 28 },
    { name: "Horror", id: 27 },
    { name: "TV", id: 10770 },
    { name: "Crime", id: 80 },
    { name: "Adventure", id: 12 },
    { name: "Family", id: 10751 },
    { name: "Music", id: 10402 },
    { name: "Thriller", id: 53 },
    { name: "Animation", id: 16 },
    { name: "Fantasy", id: 14 },
    { name: "Mystery", id: 9648 },
    { name: "War", id: 10752 },
  ];

  return (
    <>
      <Nav />
      <div style={{ display: "flex" }}>
        <Genres genreList={genreList} />
        <div className="dynamic-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MoviesView;
