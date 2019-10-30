import React from "react";
import "../../css/common.css";
import "./QNavBar.css";
import { Avatar, Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faIdCard,
  faStar,
  faAngleRight
} from "@fortawesome/fontawesome-free-solid";
const data = [
  { name: "消费额", data: 10 },
  { name: "专利数", data: 30 },
  { name: "待出售", data: 20 }
];
class QNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FunctBarVisible: false
    };
  }
  componentDidMount() {
    console.log(this.props.functlist);
  }
  onStart = () => {
    this.setState({ FunctBarVisible: true });
  };
  onClose = () => {
    this.setState({ FunctBarVisible: false });
  };
  listToDiv = item => (
    <div
      className="ItemNav ccFlexRow"
      key={item.name}
      style={
        "/" + this.props.match.params.menu === item.to
          ? {
              background: "rgba(0,0,0,0.1)"
            }
          : {
              background: "rgba(0,0,0,0)"
            }
      }
      onClick={()=>{
        this.onClose();
        if(this.props.match.params.menu!=="home")
          this.props.history.replace(item.to);
        else
          this.props.history.push(item.to);
      }}
    >
      <div
        
        className="scFlexRow"
        style={{ margin: "0px 10px 0px 20px",width:"100%" }}

      >
        <FontAwesomeIcon
          icon={item.iconFA}
          style={{ margin: "0px 30px 0px 0px" }}
        />
        <span style={{ fontSize: 20 }}>{item.name}</span>
      </div>
    </div>
  );
  listToDivBelow = item => (
    <div className="ccFlexRow" style={{ width: "30%" }} key={item.name}>
      <div
        className="ccFlexRow"
        style={{
          fontSize: 15,
          borderRadius: 15,
          border: "1px #000 solid",
          height: 30,
          marginRight: 10,
          width: 30
        }}
      >
        <FontAwesomeIcon icon={item.iconFA} />
      </div>
      {item.name}
    </div>
  );
  dataToDiv = item => (
    <div className="ccFlexColumn" style={{ width: "30%" }} key={item.name}>
      <div className="ccFlexRow">{item.data}</div>
      <div className="ccFlexRow">{item.name}</div>
    </div>
  );
  render() {
    return (
      <div>
        <div className="NavBarOutSide bcFlexRow">
          <Drawer
            title={null}
            placement={"left"}
            closable={false}
            onClose={this.onClose}
            visible={this.state.FunctBarVisible}
            width={"70%"}
            bodyStyle={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              background: "#efefef",
              padding: "24px 0px 0px 0px",
              minWidth:250
            }}
          >
            <div className="ItemsNav ccFlexColumn">
              <div
                className="ItemNav scFlexColumn"
                style={{ backgroundColor: "rgb(29,140,226)" }}
              >
                <div
                  className="bsFlexRow"
                  style={{ height: 80, padding: 10, width: "100%" }}
                >
                  <div className="ccFlexRow" style={{ height: 60, width: 60 }}>
                    <Avatar
                      style={{
                        backgroundColor: "#87d068",
                        margin: "0px 0px 0px 0px"
                      }}
                      src="http://q1.qlogo.cn/g?b=qq&nk=1647075274&s=640"
                      size={60}
                    />
                  </div>
                  <div
                    className="scFlexColumn"
                    style={{ height: 60, width: 90, marginRight: 10 }}
                  >
                    <div className="acFlexRow" style={{ width: 90 }}>
                      <div
                        className="ccFlexRow"
                        style={{
                          fontSize: 15,
                          borderRadius: 15,
                          border: "1px #000 solid",
                          height: 30,
                          width: 30
                        }}
                      >
                        <FontAwesomeIcon icon={faIdCard} />
                      </div>
                      <div
                        className="ccFlexRow"
                        style={{
                          fontSize: 15,
                          borderRadius: 15,
                          border: "1px #000 solid",
                          height: 30,
                          width: 30
                        }}
                      >
                        <FontAwesomeIcon icon={faQrcode} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="scFlexRow"
                  style={{
                    width: "100%",
                    padding: "0px 10px 3px 10px",
                    color: "white",
                    fontSize: 15
                  }}
                >
                  <span style={{ width: 60 }}>游鱼星</span>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div
                  className="scFlexRow"
                  style={{
                    width: "100%",
                    padding: "0px 10px 10px 10px",
                    color: "white",
                    fontSize: 12,
                    fontWeight: "normal"
                  }}
                >
                  <span style={{ width: 28 }}>VNT:</span>
                  <span style={{ width: 60 }}>200万</span>
                  <span style={{ width: 44 }}>专利数:</span>
                  <span style={{ width: 60 }}>4</span>
                </div>
              </div>
              <div
                className="ItemNav bcFlexRow"
                style={{
                  background: "#ffffff",
                  height: 60,
                  padding: "0px 10px",
                  marginBottom: 10,
                  borderBottom: "1px solid #dfdfdf"
                }}
              >
                <div className="csFlexColumn">
                  <div
                    className="seFlexRow"
                    style={{ color: "rgb(29,140,226)", fontWeight: "bold" }}
                  >
                    我的专利权益
                    <span
                      style={{
                        color: "rgb(121, 177, 219)",
                        fontWeight: "normal",
                        fontSize: 12
                      }}
                    >
                      2021-04-14到期
                    </span>
                  </div>
                  <div className="csFlexColumn">专业法律支持在线答疑</div>
                </div>
                <div className="ccFlexColumn">
                  <FontAwesomeIcon icon={faAngleRight} size="2x" />
                </div>
              </div>
              <div
                className="ItemNav bcFlexRow"
                style={{
                  background: "#ffffff",
                  height: 60,
                  borderBottom: "1px solid #dfdfdf",
                  borderTop: "1px solid #dfdfdf",
                  padding: "0px 30px",
                  marginBottom: 10
                }}
              >
                {data.map(this.dataToDiv)}
              </div>
              {this.props.FunctionArray
                ? this.props.FunctionArray.function.map(this.listToDiv)
                : null}
            </div>
            <div
              className="NavButtonBar acFlexRow"
              style={{ borderTop: "1px solid #dfdfdf", height: 50 }}
            >
              {this.props.FunctionArray
                ? this.props.FunctionArray.underFunction.map(
                    this.listToDivBelow
                  )
                : null}
            </div>
          </Drawer>
          <div className="NavBarIcon ccFlexRow" onClick={this.onStart}>
            <Avatar
              style={{ backgroundColor: "#ffffff" }}
              src="http://q1.qlogo.cn/g?b=qq&nk=1647075274&s=640"
            />
          </div>
          {this.props.title}
          <div className="NavBarIcon ccFlexRow"></div>
        </div>
        <div className="NavBarBlock"></div>
      </div>
    );
  }
}

export default QNavBar;
