import { useEffect, useState } from "react";
import React from "react";
import { listProducts } from "../services/ProductService";
import { useNavigate } from "react-router-dom";

const ListProductComponent = () => {
  const [products, setProducts] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addNewProduct() {
    navigator("/add-product");
  }

  return (
    <div className="container">
      <h2 className="text-center">Product Details</h2>
      <button
        className="btn btn-primary text-start mb-3"
        onClick={addNewProduct}
      >
        Add New Product
      </button>
      <table className="table table-striped table-bordered text-center">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Product Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProductComponent;
