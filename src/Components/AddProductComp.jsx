import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct } from "../services/ProductService";

const AddProductComp = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [category, setCategory] = useState("");

  const { id } = useParams();

  const [errors, setErrors] = useState({
    productName: "",
    price: "",
    quantity: "",
    category: "",
  });

  const navigator = useNavigate();

  const handleProductName = (e) => setProductName(e.target.value);

  function handleProductPrice(e) {
    setPrice(e.target.value === "" ? null : Number(e.target.value));
  }

  function handleProductQyantity(e) {
    setQuantity(e.target.value === "" ? null : Number(e.target.value));
  }

  function handleProductCategory(e) {
    setCategory(e.target.value);
  }

  function saveProduct(e) {
    e.preventDefault();

    if (validateForm()) {
      const product = { productName, price, quantity, category };
      console.log(product);

      createProduct(product).then((response) => {
        console.log(response.data);
        navigator("/products");
      });
    }
  }

  function validateForm() {
    let valid = true;

    const errorCopy = { ...errors };

    if (productName.trim()) {
      errorCopy.productName = "";
    } else {
      errorCopy.productName = "Product name is required.";
      valid = false;
    }

    if (price === "" || price === null) {
      errorCopy.price = "Price is required.";
      valid = false;
    } else if (isNaN(price)) {
      errorCopy.price = "Price must be a number.";
      valid = false;
    } else if (Number(price) <= 0) {
      errorCopy.price = "Price must be greater than 0.";
      valid = false;
    } else {
      errorCopy.price = "";
    }

    if (quantity === "" || quantity === null) {
      errorCopy.quantity = "Quantity is required.";
      valid = false;
    } else if (isNaN(quantity)) {
      errorCopy.quantity = "Quantity must be a number.";
      valid = false;
    } else if (Number(quantity) <= 0) {
      errorCopy.quantity = "Quantity must be greater than 0.";
      valid = false;
    } else {
      errorCopy.quantity = "";
    }

    if (category.trim()) {
      errorCopy.category = "";
    } else {
      errorCopy.category = "Category is required.";
      valid = false;
    }

    setErrors(errorCopy);

    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h3 className="text-center ">Upadte Product</h3>;
    } else {
      return <h3 className="text-center ">Add Product</h3>;
    }
  }

  return (
    <div className="container ">
      <div className="row">
        <div className="card col-sm-6 col-lg-6 col-md-3 offset-sm-3 offset-md-3 offset-md-3 mt-5 mb-5">
          {pageTitle()}
          <div className="card-body ">
            <form>
              <div className="text-center form-group mb-2">
                <label className="form-label ">Product Name</label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  value={productName}
                  className={`form-control card-header ${errors.productName ? "is-invalid" : ""}`}
                  onChange={(e) => setProductName(e.target.value)}
                ></input>
                {errors.productName && (
                  <div className="invalid-feedback">{errors.productName}</div>
                )}
              </div>

              <div className="text-center form-group mb-2">
                <label className="form-label ">Product Price</label>
                <input
                  type="number"
                  placeholder="Enter product price"
                  value={price ?? ""}
                  className={`form-control text-primary card-header ${errors.price ? "is-invalid" : ""}`}
                  onChange={handleProductPrice}
                ></input>
                {errors.price && (
                  <div className="invalid-feedback">{errors.price}</div>
                )}
              </div>

              <div className="text-center  form-group mb-2">
                <label className="form-label ">Product Quantity</label>
                <input
                  type="number"
                  placeholder="Enter product quantity"
                  value={quantity ?? ""}
                  className={`form-control text-primary card-header ${errors.quantity ? "is-invalid" : ""}`}
                  onChange={handleProductQyantity}
                ></input>
                {errors.quantity && (
                  <div className="invalid-feedback">{errors.quantity}</div>
                )}
              </div>

              <div className="text-center form-group mb-2">
                <label className="form-label ">Product category</label>
                <input
                  type="text"
                  placeholder="Enter product category"
                  value={category}
                  className={`form-control card-header ${errors.category ? "is-invalid" : ""}`}
                  onChange={handleProductCategory}
                ></input>
                {errors.category && (
                  <div className="invalid-feedback">{errors.category}</div>
                )}
              </div>
              <div className="text-center mb-2 mt-2" onClick={saveProduct}>
                <button className="text-center btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductComp;
