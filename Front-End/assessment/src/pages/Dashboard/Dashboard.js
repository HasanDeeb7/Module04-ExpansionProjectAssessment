import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Dashboard.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Modal from "../../components/Modal/Modal";
function Dashboard() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
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
    <>
      {modalOpen && (
        <Modal closeModal={() => setModalOpen(false)} refetch={getProducts} />
      )}
      <div className={style.dashboardContainer}>
        <button className={style.addBtn} onClick={() => setModalOpen(true)}>
          Add Product
        </button>
        {!isLoading &&
          products.map((item) => {
            return <ProductCard data={item} dashboard refetch={getProducts} />;
          })}
      </div>
    </>
  );
}

export default Dashboard;
