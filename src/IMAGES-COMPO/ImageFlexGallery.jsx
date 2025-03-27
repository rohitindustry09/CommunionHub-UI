import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./ImageFlexGallery.css";

const ImageFlexGallery = () => {
  return (
    <Row className="image-row">
    {["JoinUs1.jpg", "JoinUs2.jpg", "JoinUs3.jpg", "JoinUs4.jpg", "JoinUs5.jpeg"].map((img, index) => (
      <Col key={index} className="image-col">
        <Card className="image-card">
          <Card.Img variant="top" src={img} />
        </Card>
      </Col>
    ))}
  </Row>
  );
};

export default ImageFlexGallery;