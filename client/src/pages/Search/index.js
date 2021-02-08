import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Row, Col, Container } from "react-bootstrap";
import SearchForm from "../../components/SearchForm";

function Search() {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Row>
          <Col md={{ offset: 1, span: 10 }}>
            <Jumbotron id={`header-sign`} className={`shadow p-3 mb-5 rounded`}>
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
            <Jumbotron className={`shadow p-3 mb-5 rounded`}>
              <h2>Search</h2>
              <SearchForm></SearchForm>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 1, span: 10 }}>
            <Jumbotron className={`shadow p-3 mb-5 rounded`}>
              <h3>Results</h3>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
