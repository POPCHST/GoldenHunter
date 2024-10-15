import { useEffect, useState } from "react";
import { appApi } from "../../data/globle";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get('http://localhost:3000/api/products'); // URL ของ API
        const response = await appApi.get("api/products"); // URL ของ API

        setProducts(response.data);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.product_id}>
          <img
            src={product.image_url}
            alt={product.product_name}
            className="product-image"
          />
          <div className="product-info">
            <h2 className="product-name">{product.product_name}</h2>
            <p className="product-price">THB{product.price.toFixed(2)}</p>
            <p className="product-description">{product.product_desc}</p>
            <button className="product-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
