import React ,{Component} from 'react'
import { Button, Radio, Icon } from 'antd';
export default class Cart extends Component{
    render(){
        return(
            <div>
             <Button type="dashed" size="large">
          Dashed
        </Button>
        <Button type="danger" size="large">
          Danger
        </Button>
            </div>
        )
    }
}