import React, {Component} from 'react'

class Button extends Component {
    render(){
        return(
            <button value={ this.props.location } onClick={ this.props.handleClick } className="location-button">{ this.props.location ? this.props.location : "All Locations"}</button>
        )
    }
}

export default Button