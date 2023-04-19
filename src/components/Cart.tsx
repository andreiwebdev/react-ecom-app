import React from "react";
import { BsFillCartFill, BsFillTrashFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";

type Props = {};

const Cart = (props: Props) => {
  const [showCart, setShowCart] = React.useState(false);
  const [hideAnimation, setHideAnimation] = React.useState(true);

  React.useEffect(() => {
    setHideAnimation(false);
  }, []);

  const displayCart = () => {
    setShowCart(true);
    document.body.style.overflowY = "hidden";
  };

  const hideCart = () => {
    setShowCart(false);
    setHideAnimation(true);
    document.body.style.overflowY = "auto";
  };

  return (
    <div>
      <CartIcon onClick={displayCart} />
      <CartItems
        className={
          showCart
            ? "slide-in"
            : `transform-x-110 ${!hideAnimation ? "" : "slide-out"}`
        }
      >
        <GrClose onClick={hideCart} className="close-icon" />
        <h3>Cart</h3>
        <div className="cart-items-ctn">
          <div className="cart-item">
            <div>
              <span className="me-2">Product</span>
              <span>$9.99</span>
            </div>{" "}
            <BsFillTrashFill className="trash-icon" />
          </div>
        </div>
        <div className="checkout">
          <div className="total">
            <span>Total: $9.99</span>
          </div>
          <button>Checkout</button>
        </div>
      </CartItems>
    </div>
  );
};

export default Cart;

const CartIcon = styled(BsFillCartFill)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
`;

const CartItems = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2);
  padding: 20px;
  .close-icon {
    font-size: 30px;
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
  h3 {
    border-bottom: 1px solid #000000;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }
  .cart-items-ctn {
    max-height: 80%;
    overflow-y: auto;
    padding-right: 10px;
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    svg {
      font-size: 20px;
      color: tomato;
      cursor: pointer;
    }
    span {
      font-size: 18px;
    }
  }
  .checkout {
    background-color: #fff;
    position: absolute;
    bottom: 20px;
    left: 5%;
    width: 90%;
    .total {
      font-size: 20px;
      margin-bottom: 20px;
    }
    button {
      width: 100%;
      padding: 10px;
      border: none;
      background-color: #000000;
      text-transform: uppercase;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
