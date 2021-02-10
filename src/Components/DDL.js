import React from 'react';
import PropTypes from "prop-types";
class DDL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.selectedOption} onChange={this.props.onChange}>
                    <option value="move" disabled>Move to...</option>
                    {this.props.options.map((shelf) => {
                        return <option key={shelf.id} value={shelf.id}>{shelf.name}</option>
                    })}
                </select>
            </div>
        )
    }
}
// DDL.prototype = {
//     options : PropTypes.array,
//     onChange: PropTypes.func,
//     selectedOption: PropTypes.string
// }
export default DDL;