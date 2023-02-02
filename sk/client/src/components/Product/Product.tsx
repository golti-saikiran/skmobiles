import React from "react";
import { useParams } from "react-router";
import { useFetchById } from "../hooks/useFetchById";
import { Imobile } from "../AllProducts/mobileTypes";

const Product: React.FC = () => {
  const params = useParams();
  const id = Number(params.id);
  const { loading, error, data } = useFetchById(id);
  if (error) return <p>Something went wrong</p>;

  if (loading) return <h2>Loading...</h2>;
  const mobile: Imobile = data.mobileById;
  return (
    <div>
      <img src={mobile.url2} alt={mobile.name} height="400px" />
      <h1>{mobile.name}</h1>
      <p>{mobile.features.memory}</p>
    </div>
  );
};

export default Product;
