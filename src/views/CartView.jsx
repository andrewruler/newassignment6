import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCartContext } from "../contexts/CartContext";
import "./CartView.css";

function CartView() {
  const { cart, setCart } = useCartContext();

  return (
    <>
      <Header />
      <div className="cart-view">
        <h1>Movie Cart</h1>

        <div className="cart-items">
          {cart.entrySeq().map(([key, value]) => {
            return (
              <div className="cart-item" key={key}>
                <img src={`https://image.tmdb.org/t/p/w500${value.url}`} />
                <h1>{value.title}</h1>
                <button
                  onClick={() => setCart((prevCart) => prevCart.delete(key))}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div className = 'extraText'><h1>Looks like your cart could use a few more movies!</h1></div>
      </div>
      <Footer />
    </>
  );
}

export default CartView;
