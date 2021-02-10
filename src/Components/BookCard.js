import React from 'react';
import DDL from './DDL';
import {update} from '../BooksAPI';
import PropTypes from "prop-types";


const bookshelfChanger = [{ name: "Currently Reading", id: "currentlyReading" }, { name: "Want to Read", id: "wantToRead" }, { name: "Read", id: "read" }, { name: "None", id: "none" }];

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookStatus: this.props.bookDetails.shelf
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.inputValue !== this.props.inputValue) {
      this.setState({ inputVal: nextProps.inputValue })
    }
  }
  onDDLChange = (event) => {
      update(this.props.bookDetails, event.currentTarget.value).then((res)=>{
          debugger
          this.props.listUpdated()
      }).then()
    console.log(event.currentTarget.value);

  }
  render() {
    const { title, authors, imageLinks } = this.props.bookDetails;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${imageLinks.thumbnail}")` }}></div>
          <DDL options={bookshelfChanger} selectedOption={this.state.bookStatus} onChange={this.onDDLChange} />
        </div>
        <div className="book-title">{title}</div>
        {(authors.length > 0) && (
          authors.map((author) => {
            return <div key={author.replace(/\s/g, "")} className="book-authors">{author}</div>
          })
        )}
      </div>
    )
  }
}
// BookCard.prototype = {
//   bookDetails: PropTypes.object,
//   listUpdated: PropTypes.func
// }
export default BookCard;