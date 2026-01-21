import React, { useState } from "react";

const AddProductComp = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [category, setCategory] = useState("");

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

    const employee = { productName, price, quantity, category };
    console.log(employee);
  }

  return (
    <div className="container ">
      <div className="row">
        <div className="card col-sm-6 col-lg-6 col-md-3 offset-sm-3 offset-md-3 offset-md-3 mt-5 mb-5">
          <h3 className="text-center ">Add Product</h3>
          <div className="card-body ">
            <form>
              <div className="text-center form-group mb-2">
                <label className="form-label ">Product Name</label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  value={productName}
                  className="form-control border-primary card-header"
                  onChange={(e) => setProductName(e.target.value)}
                ></input>
              </div>

              <div className="text-center form-group mb-2">
                <label className="form-label ">Product Price</label>
                <input
                  type="number"
                  placeholder="Enter product price"
                  value={price ?? ""}
                  className="form-control border-primary text-primary card-header"
                  onChange={handleProductPrice}
                ></input>
              </div>

              <div className="text-center  form-group mb-2">
                <label className="form-label ">Product Quantity</label>
                <input
                  type="number"
                  placeholder="Enter product quantity"
                  value={quantity ?? ""}
                  className="form-control border-primary text-primary card-header"
                  onChange={handleProductQyantity}
                ></input>
              </div>

              <div className="text-center form-group mb-2">
                <label className="form-label ">Product category</label>
                <input
                  type="text"
                  placeholder="Enter product category"
                  value={category}
                  className="form-control border-primary card-header"
                  onChange={handleProductCategory}
                ></input>
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
