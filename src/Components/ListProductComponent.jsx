const ListProductComponent = () => {
  const dummyData = [
    {
      id: 1,
      name: "watches",
      price: 23.4,
    },
    {
      id: 2,
      name: "clothes",
      email: 34.2,
      price: 4463,
    },
    {
      id: 3,
      name: "phones",
      email: 483.3,
      price: 674,
    },
  ];

  return (
    <div className="container ">
      <h2>Products Details</h2>
      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProductComponent;
