import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../ReduxFeatures/reduxhooks";
import { Icon } from "@fluentui/react/lib/Icon";
import { useAppDispatch } from "../ReduxFeatures/reduxhooks";
import {
  removeFromCart,
  incrementItem,
  decrementItem,
  resetCart,
} from "../ReduxFeatures/cartSlice";


const CancelIcon = () => <Icon iconName="Cancel" />;
const AddIcon = () => <Icon iconName="Add" />;
const RemoveIcon = () => <Icon iconName="Remove" />;

const Cart= ()=>{
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.Cart.cart);
  const amount = useAppSelector((state) => state.Cart.totalCartAmount);
  const items = useAppSelector((state) => state.Cart.totalCartItems);
  return (
    <>
      <div className="cart-container">
        {data &&
          data.map((item) => {
            return (
              <div className="cart-items">
                <div className="cart-item-buttons">
                  <button
                    className="inc-dec-buttons"
                    onClick={() => dispatch(incrementItem(item.id))}
                  >
                    <AddIcon />
                  </button>
                  <button
                    className="inc-dec-buttons"
                    onClick={() => dispatch(decrementItem(item.id))}
                  >
                    <RemoveIcon />
                  </button>
                </div>
                <img
                  className=""
                  src={item.url1}
                  alt={item.name}
                  height="95px"
                  width="105px"
                />
                <div className="cart-item-properties">
                  <div className="cart-item-features">
                    <h3>{item.name}</h3>
                    <h5> x {item.cartQuantity}</h5>
                    <button
                      className="delete-item-icon"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <CancelIcon />
                    </button>
                  </div>

                  <div className="cart-item-features">
                    <h5>
                      {item.features.ram}GB - {item.features.memory}GB
                    </h5>
                    <h4>Price:Rs.{item.price}/-</h4>
                    <h4>TotalPrice:Rs.{item.price * item.cartQuantity}/-</h4>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="check-out-panel">
        <div>Total Amount: Rs.{amount}/-</div>
        <div>Total Items:{items}</div>
        <button className="dark" onClick={() => dispatch(resetCart())}>
          ClearCart
        </button>
        <button className="dark" onClick={()=>{}}>Checkout</button>
      </div>
    </>
  );
}

export default Cart;
