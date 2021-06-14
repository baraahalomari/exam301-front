import React, { Component } from 'react';
import axios from 'axios';
import FavData from './FavData';
import UpdateForm from './UpdateForm';

class FavoriteDigimons extends Component {

    constructor(props){
        super(props);
        this.state={
            server:process.env.REACT_APP_SERVER,
            digimons:[],
            showFavCards:false,
            showForm:false,
            img:'',
            name:'',
            level:'',
            index:0
        }
    }

    componentDidMount= async()=>{
        const favData = await axios.get(`${this.state.server}/getFav`);
        this.setState({
            digimons:favData.data,
            showFavCards:true
        })
    }

    deletFunction=async(idx)=>{
        const id = this.state.digimons[idx]._id;
        const newData = await axios.delete(`${this.state.server}/deleteDigi/${id}`);
        this.setState({
            digimons:newData.data
        })
    }

    updateImg=e=>this.setState({img:e.target.value});
    updateName=e=>this.setState({name:e.target.value});
    updateLevel=e=>this.setState({level:e.target.value});

    showUpdateForm=(idx)=>{
        const chosenOne = this.state.digimons[idx];
        this.setState({
            showForm:true,
            img:chosenOne.img,
            name:chosenOne.name,
            level:chosenOne.level,
            index:idx
        })
    }

    updateDigimon=async(e)=>{
        e.preventDefault();

        const id = this.state.digimons[this.state.index]._id;
        const digimonObj={
            img:this.state.img,
            name:this.state.name,
            level:this.state.level,
        }
        const updateData = await axios.put(`${this.state.server}/updateDigi/${id}`,digimonObj);
        this.setState({
            digimons:updateData.data
        })
    }



    render() {
        return (
            <>
            {this.state.showForm && 
            <UpdateForm
            img={this.state.img}
            name={this.state.name}
            level={this.state.level}
            updateImg={this.updateImg}
            updateName={this.updateName}
            updateLevel={this.updateLevel}
            updateDigimon={this.updateDigimon}
            />
            }
            {this.state.showFavCards &&
            this.state.digimons.map((digimons,idx)=>{
                return(
                    <FavData
                    digimons={digimons}
                    idx={idx}
                    deletFunction={this.deletFunction}
                    showUpdateForm={this.showUpdateForm}
                    />
                )
            })
            }
                
            </>
        )
    }
}

export default FavoriteDigimons
