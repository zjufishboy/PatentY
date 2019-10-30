import React from 'react';
import '../../css/common.css';
import './AD.css';


class AD extends React.Component {
    render(){
        return (
            <div className="PXad">
                <img src={this.props.imgUrl} alt="广告"/>
            </div>
          );
    }
}

export default AD;
