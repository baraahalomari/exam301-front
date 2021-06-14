import React, { Component } from 'react';
import axios from 'axios';
import Digimons from './Digimons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns } from 'react-bootstrap/';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            server: process.env.REACT_APP_SERVER,
            digimons: [],
            showCards: false,
        }
    }

    componentDidMount = async () => {
        const digimonsData = await axios.get(`${this.state.server}/digimon`);
        this.setState({
            digimons: digimonsData.data,
            showCards: true
        })
    }

    addToFav = async (digimonFav) => {
        await axios.post(`${this.state.server}/favDigimon`, digimonFav);
    }



    render() {
        return (
            <>
                <CardColumns>
                    <Digimons
                        digimons={this.state.digimons}
                        addToFav={this.addToFav}
                        showCards={this.state.showCards}
                    />
                </CardColumns>
            </>
        )
    }
}

export default Main
