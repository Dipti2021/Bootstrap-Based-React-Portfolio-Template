//create a homepage component
// has a header component imported from the header component
// has a section with a welcome message
//has styling from react-bootstrap

import React from "react";

import Header from "./header";

import { Button, Container, Row, Col, Accordion } from "react-bootstrap";

const Homepage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Accordion>
              <h1>Welcome to my portfolio!</h1>
              <p>
                I am a full stack web developer with a passion for learning and
                creating. I am currently looking for a position in the
                technology industry.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
