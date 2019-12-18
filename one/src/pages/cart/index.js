import React, { Component } from 'react'
import axios from 'axios';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    getData = () => {
        axios.get('./info.json')
        .then((response) => {
            console.log(response)
            this.setState({
                list: response.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render(){
        return (
            <div>
                <button onClick={this.getData}>获取axios数据</button>
                {
                    this.state.list.map((item,key) => {
                        return (
                            <li key={key}>
                    {item.id},{item.name},{item.age}
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}