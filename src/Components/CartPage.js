import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const CartPage = ({ cartItems, removeFromCart }) => {
  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.randomRupees);
    });
    return total.toFixed(2);
  };

  return (
    <>
      <h2 style={{margin: '1rem 0 1rem 4rem'}}>Cart Page</h2>
      <Row className="d-flex justify-content-center align-items-center">
      {cartItems.length > 0 ? (
        <>
        {cartItems.map((item, index) => (
          <div md={3} key={index} className="d-flex justify-content-center align-items-center mb-4 gap-3">
            <div>
              <img width={160} height={100} src={item.imageUrl} />
            </div>
            <div className="d-flex flex-column">
              Amount: {item.randomRupees}
              <Button variant="danger" onClick={() => handleRemoveItem(item)}>Remove</Button>
            </div>
          </div>
            ))}
          <div className="d-flex justify-content-center align-items-center">
            <h5>Total Price: {calculateTotalPrice()}</h5> 
          </div>
        </>
      ) : (
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <h3 className="text-danger">No items in the cart.</h3>
          </Col>
        </Row>
      )}
        
      </Row>
    </>
  );
};

export default CartPage;
