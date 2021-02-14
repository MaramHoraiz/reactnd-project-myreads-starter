import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import noData from "../icons/no_search.png";
import loading from "../icons/loading.gif";

import { search } from "../BooksAPI";
import BookCard from "./BookCard";

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [searchState, setSearchState] = useState('NO-SEARCH');

  useEffect(() => {
    if (query.length > 0) {
      setSearchState('LOADING');
      search(query).then(response => {
        console.log(response)
        if (response.length > 0) {
          setSearchList(response);
          setSearchState('SEARCH-SUCCESS');
        } else {
          setSearchList([]);
          setSearchState('NO-DATA-Found');
        }
      })
    } else {
      setSearchList([]);
      setSearchState('NO-SEARCH');
    }
  }, [query]);

  const onSearch = (event) => {
    setQuery(event.target.value)
  };

  const bindSearchResult = () => {
    switch (searchState) {
      case 'NO-SEARCH':
        return (
          <div className="search-books-results">
            <p>Search for a book</p>
          </div>)
        break;
      case 'NO-DATA-Found':
        return <img className="loading-img" src={noData} alt="No Data Found!" />
        break;
      case 'LOADING':
        return <img className="loading-img" src={loading} alt="loading..." />
        break;
      case 'SEARCH-SUCCESS':
        return ((searchList.length > 0) && (
          <div className="search-books-results">
            <ol className="books-grid" >
              {searchList.map((book) => {
                return (<li key={book.id} ><BookCard bookDetails={book} /></li>)
              })}
            </ol>
          </div>
        ))
        break;
      default:
        break;
    }
  }
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/"></Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => setQuery(event.target.value)} />
        </div>
      </div>
      {bindSearchResult()}
    </div>
  )
}
export default Search;