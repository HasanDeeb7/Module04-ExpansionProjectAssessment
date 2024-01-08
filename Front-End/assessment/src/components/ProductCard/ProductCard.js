import axios from "axios";
import style from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ data, dashboard = false, refetch }) {
  const navigate = useNavigate();
  async function handleDelete() {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API}product/delete`,
        { params: { id: data.id } }
      );
      if (res) {
        console.log(res.data);
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className={style.productCard}
      onClick={() => !dashboard && navigate("/single", { state: data })}
    >
      <h4>{data.title}</h4>
      <div className={style.priceCatContainer}>
        <span>{data.price}</span>
        <span>{data.category}</span>
      </div>
      {dashboard && (
        <div className={style.cardsBtnContainer}>
          <button onClick={handleDelete} className={style.deleteBtn}>
            Delete
          </button>
          <button className={style.editBtn}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
