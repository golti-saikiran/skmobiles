import React from "react";
import { useNavigate, useParams } from "react-router";
import { useFetchById } from "../hooks/useFetchById";
import { Imobile } from "../AllProducts/mobileTypes";
import { useAppDispatch } from "../ReduxFeatures/reduxhooks";
import { addToCart } from "../ReduxFeatures/cartSlice";


const Product: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = Number(params.id);
  const { loading, error, data } = useFetchById(id);
  if (error) return <p>Something went wrong</p>;

  if (loading) return <h2>Loading...</h2>;
  const mobile: Imobile = data.mobileById;
  return (
    <div className="product-container">
      <img
        className="product-img"
        src={mobile.url2}
        alt={mobile.name}
        height="400px"
      />
      <div className="product-info">
        <h1>{mobile.name}</h1>
        <p>{`${mobile.features.ram}GB RAM - ${mobile.features.memory}GB Memory`}</p>
        <p>{`Available Colors : ${mobile.colors}`}</p>
        <br />
        <div className="product-btn-container">
          <button className="product-btn" onClick={()=>navigate("/products")}>Back</button>
          <button
            className="product-btn"
            onClick={() => dispatch(addToCart(mobile))}
          >
            Add to cart
          </button>
        </div>

        <h4>Features--</h4>
        <p>{`Processor: ${mobile.features.processor}`}</p>
        <p>{`Battery Capacity:${mobile.features.battery}mAh`}</p>
        <p>{`Operating System:${mobile.features.os}`}</p>
        <p>{`ScreenSize:${mobile.features.screensize} In`}</p>
        <p>{`Display Quality:${mobile.features.display}`}</p>
        <p>{`Mobile Weight:${mobile.features.weight}`}</p>
        <p>{`Mobile Warrenty:${mobile.features.warranty} months`}</p>
      </div>
    </div>
  );
};

export default Product;
