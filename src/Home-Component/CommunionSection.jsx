//Packages
import { Container, Row, Col, Button } from "react-bootstrap";

import FeatureCard from './FeatureCard.jsx'


export default function CommunionSection() {
  return (
    <section className="bg-dark text-white py-5">
      <Container>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Why Communion Rocks!</h2>
          <p className="text-light mx-auto" style={{ maxWidth: "660px" }}>
            Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. 
            By promoting collaboration and connection, we’re fostering a world where differences become strengths and unity becomes the norm.
          </p>
          
        </div>

        <Row className="g-4">
          <Col md={4}>
            <FeatureCard
              icon="bi bi-globe-americas"
              title="Unifying Communities"
              description="Communion bridges diverse religious communities, becoming the social hub for meaningful connections."
            />
          </Col>
          <Col md={4}>
            <FeatureCard
              icon="bi bi-stars"
              title="Innovative and Fun"
              description="Experience faith in a fresh way through our interactive features, engaging events, and modern approach."
            />
          </Col>
          <Col md={4}>
            <FeatureCard
              icon="bi bi-graph-up-arrow"
              title="Promoting Unity"
              description="We foster understanding and harmony between different faith communities through connection and dialogue."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
