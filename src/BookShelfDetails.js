import React from "react";
import { Card, Form, Dropdown } from "react-bootstrap";

// arrow function
const BookShelfDetails = ({ book, handleBookshelf }) => {
   
   const bookCover = book.imageLinks ? book.imageLinks.thumbnail : null;

   return (
   <div className="book">
       <Card style={{borderColor: "transparent"}}>
         <Card.Img className="ml-4" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})`}} />
            <Card.Body>
              <Card.Title style={{fontSize: "18px"}}>{book.title}</Card.Title>
              <Card.Text style={{fontSize: "16px"}}>{book.authors}</Card.Text>
              <Dropdown className="mt-4">
               <Dropdown.Toggle 
               style={{
               backgroundColor: "#CC00FF", 
               color: "#fff", 
               borderColor: "transparent",
              }}
              />
             <Dropdown.Menu style={{backgroundColor: "yellow"}}>
             <Form className="mx-auto d-block">
             <Form.Control
              style={{backgroundColor: "#CC00FF", color: "white"}}
              as="select"
              onChange={e => handleBookshelf(book, e.target.value)} value={book.shelf}
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
              >
             <option value="0">Move to...</option>
             <option value="currentlyReading">Currently Reading</option>
             <option value="wantToRead">Want to Read</option>
             <option value="read">Read</option>
             <option value="none">None</option>
            </Form.Control>
           </Form>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
   </div>
      );
    }


export default BookShelfDetails;