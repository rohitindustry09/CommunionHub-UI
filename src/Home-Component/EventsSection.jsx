import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './EventsSection.css'
import ImageFlexGallery from '../IMAGES-COMPO/ImageFlexGallery';
import CounterTab from '../Counter-Compo/CounterTab';

const EventsSection = () => {

  return (
    <Container fluid className="text-center my-5 px-5 EventJoinContainer" style={{ background: 'linear-gradient(to bottom, #2C3E50, #BDC3C7)', color: 'white', padding: '50px' }}>
      <h2>Uniting Communities Through</h2>
      <h3 style={{ color: '#a2d2ff' }} className='with-bg-to-text'><i className="bi bi-stars"></i> Inspiring Events</h3>
      <p>
        At Communion, we're committed to organizing events that foster connections, inspire personal and professional growth, and bring people together to share meaningful experiences.
      </p>
      
      <ImageFlexGallery />
    
      
      <p className="mt-4">
        Helping You Connect, Learn, and Thrive <i className="bi bi-stars"></i> 2x Impact
      </p>
      
      <Row className="mt-3">
        <Col><h4 className='counter-texts'><CounterTab start={0} end={98}/>%</h4><p>Opportunities Expanded</p></Col>
        <Col><h4 className='counter-texts'><CounterTab start={0} end={89}/>%</h4><p>Attendee Satisfaction</p></Col>
        <Col><h4 className='counter-texts'><CounterTab start={0} end={15}/>k+</h4><p>Engaged Participants</p></Col>
      </Row>
      
      <Button variant="light" className="mt-3">Explore Events →</Button>
    </Container>
  );
};

export default EventsSection;