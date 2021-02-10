import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// class SearchButton extends React.Component{
const SearchButton = () => {
  const history = useHistory();
  useEffect(() => {
    debugger
  }, [])
  return (
    <div className="open-search">
      {/* <Link to="/search">ll</Link> */}
      <button onClick={() => { history.push('/search') }}>Add a book</button>
    </div>
  )
}
export default SearchButton
