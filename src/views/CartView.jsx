import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartView() {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={() => removeFromCart(movie)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default CartView;
