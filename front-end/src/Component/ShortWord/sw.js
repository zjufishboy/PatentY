import React from 'react';
import '../../css/common.css';
import './sw.css';


class SmallWord extends React.Component {
    constructor(props){
        super()
    }
    render(){
        return (
                <p className="PXsmallword">{this.props.word?this.props.word:""}</p>
          );
    }
}

export default SmallWord;
