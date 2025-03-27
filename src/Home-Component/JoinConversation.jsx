import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import CounterTab from "../Counter-Compo/CounterTab";

export default function JoinConversation() {

  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Heading Section */}
        <div className="mb-4">
          <h2 className="fw-bold">Join the Conversation</h2>
          <h4 className="text-primary ">
            <i className="bi bi-stars"></i> <span className="fw-bold">Build Connections</span>
          </h4>
          <p className="text-secondary  " style={{ maxWidth: "600px" }}>
            Discover a vibrant community, share your thoughts, and connect with like-minded individuals. Together, we grow.
          </p>
          <Button variant="primary">Join Conversations <div className="right-arrow"><i class="bi bi-arrow-right"></i></div></Button>
        </div>

        {/* Image Section */}
        <Row className="g-4">
          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Img src='togatherBG.jpg' alt="Community Connection" />
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Img src="join2.jpg" alt="Online Discussion" style={{ height: '100%', transform: 'scale(1)'}}/>
            </Card>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="mt-4 text-center stats-section">
          <Col md={4}>
            <h5 className="fw-bold"><i className="bi bi-emoji-grin"></i> Happy Community</h5>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold"><i className="bi bi-graph-up-arrow"></i> <CounterTab start={0} end={210}/>% Boost in Engagement</h5>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold"><i className="bi bi-globe-americas"></i> <CounterTab start={0} end={172}/>+ Ranked Communities</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
}