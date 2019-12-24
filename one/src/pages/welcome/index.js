//pages>index.js
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';
import Home from '../home/index'
import Background from '../../images/welcome.jpg';

import React ,{Component} from 'react'
var style={width:'600px',height:'500px'}

export default class Welcome extends Component{
    render(){
        return(
            <Home>
           <img src={Background} style={style}/>
            </Home>
        )
    }
}