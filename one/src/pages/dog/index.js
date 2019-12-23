//pages>index.js
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';
import Home from '../home/index'
import React ,{Component} from 'react'
import { Upload, message, Button, Icon } from 'antd';
const props = {
    name: 'test',
    action: 'http://127.0.0.1:8888/img',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

export default class Dog extends Component{
    render(){
        return(
            <Home>
            <div>狗</div>
            <Upload {...props}>
      <Button>
        <Icon type="upload" /> Click to Upload
      </Button>
    </Upload>
            </Home>
        )
    }
}