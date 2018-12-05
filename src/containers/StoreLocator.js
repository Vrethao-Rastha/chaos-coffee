import React, {Component} from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Map from '../components/Map'
import mapChooser from '../mapChooser'
import axios from 'axios';

class StoreLocator extends Component {

    state = {
        currentMap: 'None.png',
        shops: []
    }

    async componentDidMount(){
        let response = await axios.get('http://localhost:3000/data/shops.json')
        //console.log(response.data)
        this.setState({
            shops:response.data.shops
        })
    }

    chooseMap = (e) => {
        this.setState({currentMap: mapChooser(e.target.value)})
    }

    render(){
        
        let storeButton = this.state.shops.map((shop, idx) => {
            return(<Button handleClick={ this.chooseMap } key={ idx } location={ shop.location } />)
        })
        return(
            <div>
                <Header />
                <div>
                { storeButton }
                </div>
                <hr style={{width:"680px"}}/>
                <Map imagename={ this.state.currentMap } location={ this.props.location } />
            </div>
        )
    }
}
export default StoreLocator