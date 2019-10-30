import React from 'react';
import '../../css/common.css';
import './Tran.css';
import AD from '../../Component/AD/AD';
import { Divider, Icon } from 'antd';


class Tran extends React.Component {
    constructor(props){
        super()
        this.state={
            stateTran:"constructor:开始第一次渲染"
        }
    }
    componentDidMount(){
        this.setState({stateTran:"componentDidMount：结束第一次渲染"})
    }
    render(){
        return (
            <div className="ssFlexColumn TranOutSide">
                <AD imgUrl={"https://s2.ax1x.com/2019/09/16/nhMJ8s.jpg"}/>
                <p style={{fontSize:"0.75em",margin:"10px 0px"}}><Icon type="notification" theme="filled" />[2019-10-16]最新更新细节</p>
                <Divider style={{margin:0}}/>
                <p>这里是游鱼星的Component模板</p>
                <p>{this.state.stateTran}</p>
                <p>当前页面：{this.props.content?this.props.content:"首页"}</p>
                <p>当前ID：{this.props.match.params.id?this.props.match.params.id:"无"}</p>
            </div>
          );
    }
}

export default Tran;
