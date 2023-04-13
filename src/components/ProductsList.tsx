import React from "react";
import axios from "axios";
import Product from "./Product";
import { Row } from "react-bootstrap";
import { Context } from "../store/context";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(
    "https://fakestoreapi.com/products?limit=20"
  );
  return response.data;
};

const ProductsList = () => {
  const [context, setContext] = React.useContext(Context);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [newProducts, setNewProducts] = React.useState(products);
  const activeCat = React.useContext(Context);

  React.useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setNewProducts(productsData);
      // console.log(products);
    };
    getProducts();
  }, []);

  React.useEffect(() => {
    const prods = products.filter(
      (el) =>
        el.category == context.activeCat || context.activeCat == "all products"
    );
    setNewProducts(prods);
    console.log(newProducts, "<==");
  }, [context.activeCat]);

  return (
    <Row>
      {newProducts &&
        newProducts.map((el) => (
          <Product
            key={el.id}
            id={el.id}
            title={el.title}
            price={el.price}
            image={el.image}
            cat={el.category}
          />
        ))}
    </Row>
  );
};

export default ProductsList;
