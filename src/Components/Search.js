import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";

const Search = ()=>{
  const [query, setQuery] = useState('');
  const [searchList, setSearchList] = useState([]);
  useEffect(()=>{
    if(query.length > 0){
      search(query).then(response=>{
        console.log(response)
        debugger
      }).then()}
  },[query]);
  const onSearch = (event)=>{
    if(event.target.value !== "")
    this.setState({query : event.target.value})
  }
    return(
      <div className="search-books">
      <div className="search-books-bar">
      <Link className="close-search"  to="/"></Link>
        {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.onSearch} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  )
}
//#region class component for search
// class Search extends React.Component{
//   constructor(props){
//       super(props);
//       this.state = {
//         query: '',
//         searchList:[]
//       }
//   }
//   onSearch = (event)=>{
//     const {query} = this.state
//     this.setState({query : event.target.value})
//     if(this.state.query.length > 0 && event.target.value !== query){
//       search(event.target.value).then(response=>{
//         console.log(response)
//         debugger
//       }).then()
//     }

// }
//   render(){
//       return(
//           <div className="search-books">
//           <div className="search-books-bar">
//           <Link className="close-search"  to="/"></Link>
//             {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
//             <div className="search-books-input-wrapper">
//               <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.onSearch} />
//             </div>
//           </div>
//           <div className="search-books-results">
//             <ol className="books-grid"></ol>
//           </div>
//         </div>
//       )
//   }
// }
//#endregion
export default Search;