import React from 'react'
// import * as BooksAPI from './BooksAPI'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import BookShelves from './Components/BookShelves'
import Search from './Components/Search';
import SearchButton from './Components/SearchButton';

// class BooksApp extends React.Component {
const App = props => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/search"> <Search /></Route>
          <Route path="/"><BookShelves /></Route>
        </Switch>
        <SearchButton/>
      </div>
    </Router>
  )
};
export default App;
