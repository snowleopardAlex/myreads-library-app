import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyReads from "./MyReads";
import SearchBooks from "./SearchBooks";

function App() {
  return (
    <Router>
    <div className="App">
       <Route path="/" exact component={MyReads} />
       <Route path="/search" component={SearchBooks} />
    </div>
    </Router>
    
  );
}

export default App;
