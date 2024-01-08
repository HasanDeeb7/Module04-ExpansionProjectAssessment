import { useState } from "react";
import style from "./Modal.module.css";
import axios from "axios";

function Modal({ closeModal, refetch }) {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    supplier: "",
    price: 0,
    category: "",
  });
  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }
  async function submit() {
    console.log(product);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}product/create`,
        product
      );
      if (response) {
        console.log(response.data);
        refetch();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={style.modalContainer}>
      <div className={style.modalForm}>
        <div className={style.inputWrapper}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="supplier">Supplier Name</label>
          <input
            type="text"
            id="supplier"
            name="supplier"
            value={product.supplier}
            onChange={handleChange}
          />
        </div>
        <div className={style.btnContainer}>
          <button className={style.cancelBtn} onClick={closeModal}>
            Cancel
          </button>
          <button className={style.submitBtn} onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
