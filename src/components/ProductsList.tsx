import React from "react";
import axios from "axios";
import Product from "./Product";
import { Row } from "react-bootstrap";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(
    "https://fakestoreapi.com/products?limit=20"
  );
  return response.data;
};

const ProductsList = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      console.log(products);
    };
    getProducts();
  }, []);

  return (
    <Row>
      {products &&
        products.map((el) => (
          <Product
            key={el.id}
            id={el.id}
            title={el.title}
            price={el.price}
            image={el.image}
          />
        ))}
    </Row>
  );
};

export default ProductsList;
