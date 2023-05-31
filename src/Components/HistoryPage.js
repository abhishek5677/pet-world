import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";

const HistoryPage = () => {
  const historyData = JSON.parse(localStorage.getItem('historyData'));

  return (
    <div>
      <h2 style={{margin: '1rem 0 1rem 4rem'}}>History page</h2>
  
      {historyData ? (
        <Row >
          {historyData.imageUrls.map((url, index) => (
            <Col md={3} className='mb-4' key={index}>
              <Card
                className="p-2 d-flex justify-content-center align-items-center flex-column shadow" 
                style={{ width: '20rem' }}
              >
                <Card.Img 
                  variant="top" 
                  src={url} 
                  width={400} 
                  height={250} 
                  alt={`Dog ${index}`}
                />
                <Card.Body>
                  <Card.Text>
                    Rupees: {historyData.randomRupees[index]}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <h3 className="text-danger">No history to show</h3>
          </Col>
        </Row>
      )}
  
    </div>
  );
};

export default HistoryPage;
