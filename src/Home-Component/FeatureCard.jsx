import { Card, Button } from "react-bootstrap";
import './FeatureCard.css'

export default function FeatureCard({ icon, title, description }) {
    return (
      <Card className="text-white text-center p-3 card-featured">
        <Card.Body>
          <div className="fs-2"><i className={icon}></i></div>
          <Card.Title className="mt-3">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button>Learn More <div className="right-arrow"><i class="bi bi-arrow-right"></i></div></Button>
        </Card.Body>
      </Card>
    );
  }