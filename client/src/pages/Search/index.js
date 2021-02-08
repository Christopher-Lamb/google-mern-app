import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Row, Col, Container } from "react-bootstrap";

function Search() {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Row>
          <Col md={{ offset: 1, span: 10 }}>
            <Jumbotron id={`header-sign`}>
              <div>
                <Row>
                  <h1>(React) Google Books Search</h1>
                </Row>
                <div className="header-text">
                  <p>Search for and Save books of intrest</p>
                </div>
              </div>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 1, span: 10 }}>
            <Jumbotron></Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 1, span: 10 }}>
            <Jumbotron></Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 1, span: 10 }}>
            <Jumbotron></Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
