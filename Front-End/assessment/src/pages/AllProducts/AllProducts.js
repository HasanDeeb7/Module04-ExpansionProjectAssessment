import axios from "axios";
import { useEffect, useState } from "react";
import style from "./AllProducts.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";

function AllProducts() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  async function getProducts() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}product/`);
      if (response) {
        console.log(response.data);
        setProducts(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>All Products</h1>
      {!isLoading && (
        <div className={style.allProductsContainer}>
          {products.map((item) => {
            return <ProductCard data={item} />;
          })}
        </div>
      )}
    </div>
  );
}

export default AllProducts;
