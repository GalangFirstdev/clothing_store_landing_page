import React from "react";
import "../Products_F/Product.css";
import { ProductData } from "../../Data/Product";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
// jangan lupoa untuk menambahkan data image di folder data
const Product = () => {
  const [parent] = useAutoAnimate();

  const [Menudata, setMenudata] = useState(ProductData);

  const Filter = (type) => {
    setMenudata(ProductData.filter((product) => product.type === type));
  };
  return (
    <div className="Container_F">
      <h1>Our Featured Product</h1>

      <div className="Products">
        <ul className="menu">
          <li onClick={() => setMenudata(ProductData)}>All</li>
          <li onClick={() => Filter("DTF")}>DTF</li>
          <li onClick={() => Filter("DTG")}>DTG</li>
        </ul>

        <div className="list" ref={parent}>
          {Menudata.map((product, i) => (
            <div className="Product">
              <div className="left_s">
                <div className="name">
                  <span>{product.nama}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div>Show Now</div>
              </div>
              <img src={product.img} alt="" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
