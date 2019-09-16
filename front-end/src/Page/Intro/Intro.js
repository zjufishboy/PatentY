import React from 'react';
import '../../css/common.css';
import './Intro.css';


class Intro extends React.Component {
    constructor(props){
        super()
        this.state={
            stateIntro:"constructor:开始第一次渲染"
        }
    }
    componentDidMount(){
        this.setState({stateIntro:"componentDidMount：结束第一次渲染"})
    }
    render(){
        return (
            <div className="IntroOutSide ccFlexColumn">                
            </div>
          );
    }
}

export default Intro;
