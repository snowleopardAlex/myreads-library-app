import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardColumns, Form, Jumbotron, Container, Image } from "react-bootstrap";
import backarrow from "./img/back-arrow.png";
import BookShelfDetails from "./BookShelfDetails";
import * as BooksAPI from "./BooksAPI";


class SearchBooks extends Component {
    constructor() {
        super() 
        // HERE we ONLY mutate the state
        this.state = {
            books: [],
            query: ''
        };
        // Binding is necessary to make "this" work in the callback
        this.handleBookshelf = this.handleBookshelf.bind(this)   
    }
    // searching for the query inside backend
    // in order to re-render the state with changes, we need to use this.setState
    handleUpdatedQuery(query) {
        BooksAPI.search(query).then(books => books ? this.setState({ books }) : []);
        this.setState({query});
    }    

    // updating the shelf from backend
    handleBookshelf(book, shelf) {
        BooksAPI.update(book, shelf)
          .then(() => shelf !== "none" ? alert(`${book.title} has been added to your shelf!`) : alert(`You haven't added any book to your shelf!`))
          // catch() block of promise is responsible for throwing errors.
          .catch(() => alert("Something went wrong! Please try again!"));
    }

    displaySearchResults() {
        // destructuring variable
        const {books, query} = this.state;
        
        // ternary operator ? : instead of if else --> code is cleaner
        if (query) {
            return books.error ?
            <h2 className="ml-4">No results found</h2> :
            books.map((book, index) => {
                return (
                    <div className="ml-5">
                    <BookShelfDetails
                       key={index}
                       book={book}
                       handleBookshelf={this.handleBookshelf}
                    />
                    </div>
                );
            });
        }
      }
    

    render() {
        return (
           <div className="searchbooks">
            <Jumbotron fluid style={{backgroundColor: "#CC00FF"}}>
             <Link to="/" className="close-search">
             <Image className="ml-4" src={backarrow} height="44" width="54" />
             </Link>
             <Container className="mt-5">
             <h1 style={{color: "white"}}>Library</h1>
             <Form.Group className="mt-4">
              <Form.Control 
                value={this.state.query}
                onChange={e => this.handleUpdatedQuery(e.target.value)}
                size="md" 
                type="text" 
                placeholder="Search by Author, Title..." 
              />
             </Form.Group>
             </Container>
            </Jumbotron>
            <div className="library">
                <CardColumns className="my-auto">
                  {this.displaySearchResults()}
                </CardColumns>
            </div>
           </div>
        );
    }
}

export default SearchBooks;