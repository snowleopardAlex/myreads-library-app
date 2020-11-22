import React, { Component } from "react";
import { Link } from "react-router-dom";
import App from "./App.css";
// escape character in regular expression
import escapeRegExp from "escape-string-regexp";
import * as BooksAPI from "./BooksAPI";
import plus from "./img/plus.png";
import { Jumbotron, Container, Image, Button, Card } from "react-bootstrap";
import BookShelfDetails from "./BookShelfDetails";

class MyReads extends Component {
    constructor() {
        super()
        this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: []
        };
        // Binding is necessary to make "this" work in the callback
        this.handleBookshelf = this.handleBookshelf.bind(this)
    }

    // it is executed after the first render only on the client side. 
    // use it for state updates, ajax, api calls and DOM
    // save HTTP request, save it to the state
    componentDidMount() {
        this.getBooks();
    }

     // without Regex, the string is too long - all the books from the API are displayed 
     // Regex is used to escape a very long string by using new RegExp
     // test() - the fastest and the simplest API to use. It runs a search for a match between a RegExp and a String.
     // test() - returns boolean (true/false) - returns true if your test passes ( if the pattern you're matching is present) and false it it doesn't.
     // test() - returns no data. 
     // match() - use match when you require or expect data back in a test result.
     // match() - returns an array with matches, or null if there are none. The matches are retrived from the string again.
     // match() - you will test for a present data, you will see if the data pattern exists, and return that data. 
     // match() - returns an array of matches, doesn't describe the actual data you want, uses CAPTURE GROUPS
     // match() - CAPTURE GROUPS match your data, and return the data inside the group to you.
     // CAPTURING GROUPS - are a way to treat multiple chracters as a single unit. They are created by placing
     // the characters to be grouped inside a set of parantheses. Exp: Regular expression (dog) creates
     // a single group of containing the letters "d", "o", "g". 
    getBooks() {
        BooksAPI.getAll().then(books => {
   
            const matchCurrentlyReading = new RegExp(escapeRegExp("currentlyReading"));
            let currentlyReading = books ? books.filter(book => matchCurrentlyReading.test(book.shelf)) : null;
    
            const matchWantToRead = new RegExp(escapeRegExp("wantToRead"));
            let wantToRead = books ? books.filter(book => matchWantToRead.test(book.shelf)) : null;
    
            const matchRead = new RegExp(escapeRegExp("read"));
            let read = books ? books.filter(book => matchRead.test(book.shelf)) : null;
 

     // we use this.setState to track changes in state and than re-render the component according to the 
     // changes, you have to use setState, because after setState, the render functon is triggered.
     // When you use this.state.color ="red" --> you mutate the state, but in order to trigger re-render
     // of the component with a change, you need to use setState. 
           this.setState({
               currentlyReading,
               wantToRead,
               read
            });
          });
        }
        
    // updating the book in the shelf, calling the books from API    
    handleBookshelf(book, shelf) {
        BooksAPI.update(book, shelf).then(() => this.getBooks());
    }
    
    // updating the book in the shelf, displaying UI of it  
    displayShelf(books, title) {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title text-center mb-5">{title}</h2>
                <Card style={{ borderColor: "transparent" }}>
                  <div className="flex-container ml-5">
                        {books.map((book, index) =>
                            <BookShelfDetails
                                key={index}
                                book={book}
                                handleBookshelf={this.handleBookshelf}
                            />)}
                  </div>
                 </Card>
            </div>
        );
    }
    

    render() {
        // ESLINT suggests to destructure the variable. 
        // ESLINT - is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
        // with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to 
        // JSLint and JSHint with a few expectations: ESLint uses Espree for JS parsing. 
        const { currentlyReading, wantToRead, read} = this.state;

        return (
           <div className="myreads">
            <Jumbotron style={{backgroundColor: "#CC00FF"}}>
             <Container>
             <h1 style={{color: "white", textAlign: "center"}}>MyReads</h1>
             </Container>
            </Jumbotron>
            <div className="bookshelves">
               {this.displayShelf(currentlyReading, 'Currently Reading')}
               {this.displayShelf(wantToRead, 'Want to Read')}
               {this.displayShelf(read, 'Read')}
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
}

export default MyReads;