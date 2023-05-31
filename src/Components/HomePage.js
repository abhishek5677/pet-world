import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';


const HomePage = ({ addToCart }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [randomRupees, setRandomRupees] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const storedHistoryData = localStorage.getItem("historyData");
    if (storedHistoryData) {
      const parsedHistoryData = JSON.parse(storedHistoryData);
      const { imageUrls, randomRupees } = parsedHistoryData;
      setImageUrl(imageUrls[imageUrls.length - 1]);
      setRandomRupees(randomRupees[randomRupees.length - 1]);
    } else {
      fetchImage();
    }
  }, []);

  const fetchImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const newImageUrl = data.message;
        setImageUrl(newImageUrl);

        const randomAmount = Math.floor(
          Math.random() * (10000 - 1000 + 1) + 1000
        );
        setRandomRupees(randomAmount);

        const storedHistoryData = localStorage.getItem("historyData");
        if (storedHistoryData) {
          const parsedHistoryData = JSON.parse(storedHistoryData);
          const { imageUrls, randomRupees } = parsedHistoryData;
          const updatedImageUrls = [...imageUrls, newImageUrl];
          const updatedRandomRupees = [...randomRupees, randomAmount];
          const updatedHistoryData = {
            imageUrls: updatedImageUrls,
            randomRupees: updatedRandomRupees,
          };
          localStorage.setItem(
            "historyData",
            JSON.stringify(updatedHistoryData)
          );
        } else {
          const initialHistoryData = {
            imageUrls: [newImageUrl],
            randomRupees: [randomAmount],
          };
          localStorage.setItem(
            "historyData",
            JSON.stringify(initialHistoryData)
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  };

  const handleAddToCart = () => {
    const newItem = {
      imageUrl,
      randomRupees,
    };
    addToCart(newItem);
    navigate("/cart");
  };

  return (
    <>
    <h2 style={{margin: '1rem 0 1rem 4rem'}}>Home page</h2>
    <Row className="d-flex justify-content-center align-items-center flex-column">
      <Button   
        className="mb-3 mt-3" 
        style={{width: 'fit-content'}} 
        variant="secondary" 
        onClick={fetchImage} 
        >
          Next
      </Button>
      <Card 
        className="p-2 d-flex justify-content-center align-items-center flex-column shadow" 
        style={{ width: '20rem' }}
      >
          <Card.Img 
            variant="top" 
            src={imageUrl} 
            width={400} 
            height={300} 
          />
          <Card.Body>
            <Card.Text>
              Amount: {randomRupees}
            </Card.Text>
            <Button 
              onClick={handleAddToCart} 
              variant="primary"
            >
              Add to cart
            </Button>
          </Card.Body>
      </Card>
    </Row>
      
    </>
  );
};

export default HomePage;
