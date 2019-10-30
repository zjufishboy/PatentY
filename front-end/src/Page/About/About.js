import React from 'react';
import '../../css/common.css';
import './About.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Card } from 'antd';
import { Avatar } from '@material-ui/core';

class About extends React.Component {
    constructor(props){
        super()
        this.state={}
    }
    render(){
        return (
            <div className="AboutOutSide ccFlexColumn">
                <Flippy
                    flipOnHover={false} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                    // if you pass isFlipped prop component will be controlled component.
                    // and other props, which will go to div
                    style={{ width: "100%", height: '100%' }} /// these are optional style, it is not necessary
                >
                    <FrontSide
                    style={{
                        backgroundColor: '#41669d',
                        padding:0
                    }}
                    >
                        <Card
                            style={{ width: "100%" }}
                            cover={
                            <img
                                alt="example"
                                src="https://s2.ax1x.com/2019/09/16/nhMJ8s.md.jpg"
                                style={{height:"calc(100vh - 45px - 93px )"}}
                            />
                            }
                        >
                            <Card.Meta
                            avatar={<Avatar src="http://q1.qlogo.cn/g?b=qq&nk=1647075274&s=640" />}
                            title="PatentY"
                            description="基于区块链的专利交易系统移动客户端"
                            />
                        </Card>
                    </FrontSide>
                    <BackSide
                    style={{backgroundColor: "#dfdfdf"}}>
                        <div className="scFlexColumn" style={{width:"100%",height:"100%",padding:10,fontSize:18}}>
                            <div className="scFlexRow" style={{width:"100%",fontSize:21,fontWeight:"bold"}}>
                                开发人员：
                            </div>
                            <div className="ssFlexColumn" style={{width:"100%",paddingLeft:10}}>
                                <span>前端支持：游鱼星</span>
                                <span>后端合约：游鱼星</span>
                                <span>项目运营：游鱼星</span>
                            </div>
                            <div className="scFlexRow" style={{width:"100%",fontSize:21,fontWeight:"bold"}}>
                                开源地址：
                            </div>
                            <div className="ssFlexColumn" style={{width:"100%",paddingLeft:10}}>
                                https://github.com/zjufishboy/PatentY
                            </div>
                            <div className="scFlexRow" style={{width:"100%",fontSize:21,fontWeight:"bold"}}>
                                技术支持：
                            </div>
                            <div className="ssFlexColumn" style={{width:"100%",paddingLeft:10}}>
                                <span>前端：React</span>
                                <span>后端：VNTChain</span>
                            </div>
                        </div>
                    </BackSide>
                </Flippy>
            </div>
          );
    }
}

export default About;