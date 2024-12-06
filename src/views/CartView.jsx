import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartView() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={() => addToCart(movie)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default CartView;
