import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import MainComponent from './MainComponent';
import AddAlbum from './Components/AddAlbum';

function App() {
  return (
    // <Router>
    // <div className="App">
    //   <MainComponent />

    //   <Route path="/add" exact component={AddAlbum} />

    // </div>
    // </Router>

    <BrowserRouter>
    <div>
      <MainComponent />
    </div>
    </BrowserRouter>
  );
}

export default App;
