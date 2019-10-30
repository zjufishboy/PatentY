import React from 'react';
import '../../css/common.css';
import './Help.css';
import { Collapse } from 'antd';
const example={
    title:"如何申请专利",
    answer:"在侧边栏>专利申报>填写专利信息>申报，申报后我们将在1-3个工作日内审核，审核后由我们统一上链"
}

class Help extends React.Component {
    constructor(props){
        super()
        this.state={}
    }
    getHelp=()=>{
        let Help=[]
        for(let i=0;i<1;i++){
            Help.push(example)
        }
        return Help
    }
    HelpToDiv=(item,key)=>(
        <Collapse.Panel header={item.title} key={key}>
            <p>{item.answer}</p>
        </Collapse.Panel>
    )
    render(){
        return (
            <div className="HelpOutSide scFlexColumn">
                <Collapse accordion style={{width:"100%"}}>
                    {this.getHelp().map(this.HelpToDiv)}
                </Collapse>
            </div>
          );
    }
}

export default Help;
