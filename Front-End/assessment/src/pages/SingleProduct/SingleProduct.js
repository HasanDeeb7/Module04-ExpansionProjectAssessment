import style from "./SingleProduct.module.css";
import { useLocation } from "react-router-dom";

function SingleProduct() {
  const data = useLocation().state;
  return (
    <div className={style.singleProductContainer}>
      <h2>Product Name : {data.title}</h2>
      <span className={style.dataSpan}>Product Price: {data.price}</span>
      <span className={style.dataSpan}>
        {" "}
        Product Supplier : {data.supplier}
      </span>
      <span className={style.dataSpan}>
        Product Description : {data.description}
      </span>
    </div>
  );
}

export default SingleProduct;
