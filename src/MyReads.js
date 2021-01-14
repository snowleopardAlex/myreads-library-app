import React, { Component } from "react";
import { Link } from "react-router-dom";
import App from "./App.css";
// escape character in regular expression
//import escapeRegExp from "escape-string-regexp";
//import * as BooksAPI from "./BooksAPI";
import plus from "./img/plus.png";
import { Jumbotron, Container, Image, Button, Card } from "react-bootstrap";
import Shelf from "./Shelf";
// import BookShelfDetails from "./BookShelfDetails";

function MyReads(props) {
// Using props instead of this.state because we are getting these 
// values from the parent component App.js
// updating the book in the shelf, displaying UI of it 
const { currentlyReading, wantToRead, read, handleBookShelf } = props;
       
        return (
           <div className="myreads">
            <Jumbotron style={{backgroundColor: "#CC00FF"}}>
             <Container>
             <h1 style={{color: "white", textAlign: "center"}}>MyReads</h1>
             </Container>
            </Jumbotron>
            <div className="bookshelves">
            <Shelf 
              books={currentlyReading, wantToRead, read}
              title={"Currently Reading", "Want to Read", "Read"}
              handleBookShelf={handleBookShelf}
            />
             {/*  {this.renderShelf(currentlyReading, 'Currently Reading')}
               {this.renderShelf(wantToRead, 'Want to Read')}
               {this.renderShelf(read, 'Read')} */}
            </div>
            <div className="addbook">
                <Link to="/search">
                 <Button 
                   className="mb-5 mt-5 mx-auto d-block"
                   style={{backgroundColor: "#CC00FF", borderColor: "transparent"}}>
                 <Image src={plus} height="44" width="44" />
                 </Button>
                </Link>
            </div>
           </div>
        );
    }


export default MyReads;