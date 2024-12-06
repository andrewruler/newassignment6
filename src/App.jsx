import HomeView from "./views/HomeView";
import GenreView from "./views/GenreView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import MovieView from "./views/MoviesView";
import DetailView from "./views/DetailView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <AppProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="Home" element={<HomeView />} />
              <Route path="Movies" element={<MovieView />}>
                <Route path="Genres" element={<GenreView />} />
                <Route path="Genres/:genreId" element={<GenreView />} />
                <Route path="Detail/:movieId" element={<DetailView />} />
              </Route>
              <Route path="Register" element={<RegisterView />} />
              <Route path="Login" element={<LoginView />} />
            </Routes>
          </Router>
        </AppProvider>
      </CartProvider>
    </>
  );
}

export default App;
