import React from 'react';
import BookShelf from './BookShelf';
import { getAll } from '../BooksAPI'
import Header from './Header';
import { shelves } from "../constants";
import logo from "../icons/loading.gif";
class BookShelves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksUpdated: false,
      booksGroupedBy: {},
      error: ''
    }
  }
  groupBy = (array, key) => {
    return array.reduce(function (item, x) {
      (item[x[key]] = item[x[key]] || []).push(x);
      return item;
    }, {})
  };
  loadBooks = () => {
    getAll().then((response) => {
      debugger
      const booksGroupedBy = this.groupBy(response, "shelf");
      this.setState({
        booksGroupedBy,
        booksUpdated: true
      })
    }).then((error) => {
      debugger
      this.setState({
        error
      })
    })
  }
  componentDidMount() {
    this.loadBooks()
  }
  // componentDidUpdate(){
  //   this.loadBooks()
  // }
  onListUpdated = (data) => {
    debugger
    // this.setState((currentState)=>({
    // ...currentState,
    // booksUpdated : false
    // const booksGrouped = this.state.booksGroupedBy
    // Object.keys(booksGrouped).map((item)=>{
    //   booksGrouped[item].map((book)=>{

    //   })
    // })
    this.loadBooks()

    // }))
  }
  render() {
    return (

      <div className="list-books">
      <Header headerTitle={"My Reads"} />
        <div className="list-books-content">
          {Object.keys(this.state.booksGroupedBy).length > 0 ? (
            (Object.keys(this.state.booksGroupedBy).map((item) => {
              console.log(this.state.booksGroupedBy[item])
              return (
                <div className="bookshelf" key={item.replace(/\s/g, "")}>
                  <BookShelf shelfTitle={shelves[item] ? shelves[item] : item} bookList={this.state.booksGroupedBy[item]} listUpdated={this.onListUpdated} />
                </div>
              )
            }
            )
            )) : (this.state.error ? (<div> error</div>) : (<img className="loading-img" src={logo} alt="loading..." />
            )
            )
          }
        </div>
      </div>
    )
  }
}
export default BookShelves