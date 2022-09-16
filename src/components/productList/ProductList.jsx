import "./productList.css";
import Product from "../product/Prodcut";
import { products } from "../../data";
function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Hi you can visit my github account to see my projects and more.
          <br />
          <br />
          <a href="https://github.com/emremerzifonluoglu" target="_blank">
            <button>Github Link</button>
          </a>
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
