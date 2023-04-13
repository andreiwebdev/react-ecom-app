import { Col } from "react-bootstrap";
import styled from "styled-components";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
  cat: string;
}

const Product = ({ id, title, price, image, cat }: ProductProps) => {
  const smallerTitle = title.split(" ").slice(0, 4).join(" ");

  return (
    <ProductContainer className="mb-3" sm={6} md={4} xl={3}>
      <ProductImage className="mb-3" src={image} alt={title} />
      <div>
        <ProductTitle>{smallerTitle}</ProductTitle>
        <ProductPrice>${price}</ProductPrice>
      </div>
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled(Col)``;

const ProductImage = styled.img`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 260px;
  max-height: 200px;
  object-fit: cover;
  object-position: top;
`;

const ProductTitle = styled.h5`
  font-size: 18px;
  text-transform: uppercase;
  color: gray;
`;

const ProductPrice = styled.h4`
  color: #ff2f2f;
  font-size: 18px;
`;
