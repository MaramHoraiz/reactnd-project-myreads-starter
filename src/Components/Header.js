import React from "react";
class Header extends React.Component{
render(){
    return(
        <div className="list-books-title">
        <h1>{this.props.headerTitle}</h1>
      </div>
    )
}
}
export default Header