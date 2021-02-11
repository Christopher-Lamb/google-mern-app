import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Row, Col, Container } from "react-bootstrap";
import Button from "../../components/Button";
import API from "../../utils/api";
import "./style.css";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    SavedBooks();
  }, []);

  const SavedBooks = () => {
    API.getSavedBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onDelete = (event) => {
    const id = event.target.id;
    console.log(id);
    API.deleteBook(id).then((res) => {
      SavedBooks();
    });
  };
  const onView = (event) => {
    const target = event.target;
    target.parentElement.parentElement.parentElement.classList.remove(
      "jumbotron-book"
    );
    target.parentElement.parentElement.parentElement.classList.add(
      "jumbotron-book-open"
    );
  };
  return (
    <>
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
              <h3>Saved Books</h3>
              <div>
                {books ? (
                  books.map((book, i) => (
                    <Jumbotron className={"jumbotron-book"} key={i}>
                      <Row>
                        <Col xl={10}>
                          <h3>{book.title}</h3>
                        </Col>

                        <Col xl={2}>
                          <Button
                            id={book._id}
                            btnType={"Delete"}
                            onClick={onDelete}
                          ></Button>
                          <Button btnType={"View"} onClick={onView}></Button>
                        </Col>
                      </Row>
                      <Row>
                        <h4>{book.authors}</h4>
                      </Row>
                      <Row>
                        <h6>
                          <a href={book.link}>
                            <p className="book-link">More Info</p>
                          </a>
                        </h6>
                      </Row>
                      <Row>
                        <Col md={4} lg={2}>
                          <img src={`${book.image}`} alt={"book"}></img>
                        </Col>
                        <Col md={8} lg={10}>
                          <p>{book.description}</p>
                        </Col>
                      </Row>
                    </Jumbotron>
                  ))
                ) : (
                  <p>You have no books saved sorry :(</p>
                )}
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Saved;
