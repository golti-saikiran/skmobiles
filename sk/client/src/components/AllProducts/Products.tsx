import { useFetch } from "../hooks";
import { Imobile } from "./mobileTypes";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../ReduxFeatures/reduxhooks";
import { addToCart } from "../ReduxFeatures/cartSlice";
// import { useAppSelector } from "../ReduxFeatures/reduxhooks";

export default function Products(): JSX.Element {
  const dispatch = useAppDispatch();
  // const cart = useAppSelector((state) => state.Cart.cart);
  const navigate = useNavigate();
  const { error, loading, data } = useFetch();

  if (error) return <p>Something went wrong</p>;

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="container">
      {data &&
        data.mobiles.map((mobile: Imobile): JSX.Element => {
          return (
            <div className="card" key={mobile.id}>
              <div onClick={() => navigate(`/products/${mobile.id}`)}>
                <img className="image" src={mobile.url1} alt={mobile.name} />

                <div className="cardinfo">
                  <p className="title">{mobile.name}</p>
                  <p>
                    {mobile.features.ram}GB - {mobile.features.memory}GB{" "}
                  </p>
                  <p className="price">Rs.{mobile.price}/-</p>
                </div>
              </div>
              <button
                className="btn"
                onClick={() => dispatch(addToCart(mobile))}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
    </div>
  );
}
