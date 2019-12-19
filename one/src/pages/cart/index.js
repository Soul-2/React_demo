import React, { Component } from 'react'
import axios from 'axios';
import Home from '../home/index'

import { Table, Divider, Tag } from 'antd';

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    }
];



export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.getData()
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

    render() {

        return (
            <Home>
                <div>猫</div>
              
                <Table columns={columns} dataSource={this.state.list} />
            </Home>

        )
    }
}