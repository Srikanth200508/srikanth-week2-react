import { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "React Course",
    description: "Learn React components, props, state and events.",
    price: 999,
    icon: "⚛️",
  },
  {
    id: 2,
    name: "Frontend Toolkit",
    description: "Useful resources for modern frontend development.",
    price: 799,
    icon: "🧰",
  },
  {
    id: 3,
    name: "UI Design Pack",
    description: "A collection of ideas for building responsive interfaces.",
    price: 599,
    icon: "🎨",
  },
];

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="page">
      <div className="page-heading">
        <p className="eyebrow">PRODUCT COMPONENT</p>
        <h1>Products</h1>
        <p>
          Product data is passed from the parent page to reusable
          ProductCard components using props.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={setSelectedProduct}
          />
        ))}
      </div>

      {selectedProduct && (
        <div className="selected-product">
          <h2>Selected Product</h2>

          <p>
            You selected <strong>{selectedProduct.name}</strong>.
          </p>

          <p>Price: ₹{selectedProduct.price}</p>

          <button onClick={() => setSelectedProduct(null)}>
            Close
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;