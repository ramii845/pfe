import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingStyles.css";

function LandingPage({ history }) {
  

  return (
    <div className="main">
      <Container>
        <Row>
          
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <a href="/register">
                <Button
                  variant="outline-primary" size="lg" className="landingbutton">
                  Signup
                </Button>
              </a>
           
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;