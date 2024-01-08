import axios from "axios";
import React, { useEffect, useState } from "react";

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
  return <div>AllProducts</div>;
}

export default AllProducts;
