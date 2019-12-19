//pages>index.js
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';
import Home from '../home/index'
import React ,{Component} from 'react'
export default class Dog extends Component{
    render(){
        return(
            <Home>
            <div>狗</div>
            </Home>
        )
    }
}