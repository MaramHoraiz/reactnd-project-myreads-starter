import React from 'react';
import PropTypes from "prop-types";
import BookCard from './BookCard';

class BookShelf extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }
    render() {
      const { shelfTitle, bookList } = this.props
      return (
        <div className="bookshelf" key={shelfTitle.replace(/\s/g, "")}>
          <h2 className="bookshelf-title">{shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {bookList.map((book) => {
                return (
                  <li key={book.title.replace(/\s/g, "")} >
                    <BookCard bookDetails={book} listUpdated = {this.props.listUpdated} />
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      )
    }
  }
  // BookShelf.prototype = {
  //   shelfTitle: PropTypes.string,
  //   bookList: PropTypes.array,
  //   listUpdated: PropTypes.func
  // }
  export default BookShelf;