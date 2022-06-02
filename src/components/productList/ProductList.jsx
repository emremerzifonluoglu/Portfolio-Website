import "./productList.css"
import Product from "../product/Prodcut"
import {products} from "../../data";
function ProductList() {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Projects & Blogs </h1>
            <p className="pl-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dolore aut perferendis sint reprehenderit suscipit perspiciatis adipisci, eligendi quia unde. 
            </p>
        </div>
        <div className="pl-list">
            {products.map((item)=>(
            <Product key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>

    </div>
  )
}

export default ProductList