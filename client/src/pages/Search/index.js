import React, { useState } from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Row, Col, Container } from "react-bootstrap";
import SearchForm from "../../components/SearchForm";
import API from "../../utils/api";
import Button from "../../components/Button";

const Search = () => {
  //Books
  const [booksState, setBooksState] = useState({});

  //Btn Press From Search Form
  const handleSubmit = async (input) => {
    try {
      const books = await API.getBooks(input);

      let array = await books.data.items;
      await setBooksState({ ...booksState, books: array });

      console.log(booksState);
    } catch (err) {
      console.log(err);
    }
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

  const onSave = (event) => {
    const target = event.target;
    try {
      const book = booksState.books.find((book) => book.id === target.id);
      console.log(book);
      API.saveBook({
        googleId: book.id,
        title: book.volumeInfo.title,
        link: book.volumeInfo.infoLink,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
      })
        .then(() => console.log("Finsihed"))
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }

    console.log(target.id);
  };

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
              <SearchForm onSearch={handleSubmit}></SearchForm>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 1, span: 10 }}>
            <Jumbotron className={`shadow p-3 mb-5 rounded`}>
              <h3>Results</h3>
              <div>
                {booksState.books
                  ? booksState.books.map((book, i) => (
                      <Jumbotron className={"jumbotron-book"} key={i}>
                        <Row>
                          <Col xl={10}>
                            <h3>{book.volumeInfo.title}</h3>
                          </Col>

                          <Col xl={2}>
                            <Button btnType={"View"} onClick={onView}></Button>
                            <Button
                              id={book.id}
                              btnType={"Save"}
                              onClick={onSave}
                            ></Button>
                          </Col>
                        </Row>
                        <Row>
                          <h4>{book.volumeInfo.authors}</h4>
                        </Row>
                        <Row>
                          <h6>
                            <a href={book.volumeInfo.infoLink}>
                              <p className="book-link" >More Info</p>
                            </a>
                          </h6>
                        </Row>
                        <Row>
                          <Col md={4} lg={2}>
                            <img
                              src={`${book.volumeInfo.imageLinks.thumbnail}`}
                              alt={"book"}
                            ></img>
                          </Col>
                          <Col md={7} lg={10}>
                            <p>{book.volumeInfo.description}</p>
                          </Col>
                        </Row>
                      </Jumbotron>
                    ))
                  : null}
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
