import React, {Component} from 'react'

class Map extends Component {
    render(){
        let imagePath;
        if(this.props.imagename){
            imagePath = this.props.imagename
        } else {
            imagePath = 'None.png'
        }
        return(
            <div className="MapBox">
                <img src={ imagePath } alt={ this.props.location } />

            </div>
        )
    }
}

export default Map