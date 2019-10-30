import React from "react";
import "../../css/common.css";
import "./Patent.css";
import { Button, Divider, Icon, Input, Select, Tag, message } from "antd";
import SmallWord from "../../Component/ShortWord/sw";
const item = {
  id: 1,
  name: "基于区块链的专利交易系统",
  owner: "0x9a4cd341f86cdbf8b4cd623ac7c109930de0a496",
  aplier: "0x9a4cd341f86cdbf8b4cd623ac7c109930de0a496",
  time: "2019-09-01",
  state: "出售",
  intro:
    "本专利包括基于VNT区块链的专利交易模式以及附带系统PatentX,是一种基于区块链技术的高可信度的区块链数字资产保护机制，主要致力于改善当前专利流通过程中交易信息不透明、不公开、追溯力较弱的现状，通过基于VNTChain的区块链记录及查询手段，达到实现交易可信化、交易记录可信追溯的效果。",
  price: 1200,
  priceProvider: "0x9a4cd341f86cdbf8b4cd623ac7c109930de0a496"
};
const selectBefore = (
  <Select defaultValue="VNT" style={{ width: 88 }}>
    <Select.Option value="VNT">VNT</Select.Option>
    <Select.Option value="CNY">CNY</Select.Option>
  </Select>
);

class Patent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      open: false,
      price:""
    };
  }
  toggle = () => {
    this.setState({ open: !this.state.open });
  };
  getState = () => {
    switch (item.state) {
      case "出售":
        return "出价";
      case "拍卖":
        return "竞价";
      case "无":
        return false;
      default:
        return false;
    }
  };
  send=(v,e)=>{
    let data=parseInt(v)
    message.info(`您已出价：${data}`)
    this.setState({price:""})
    console.log(v,e)
  }
  render() {
    return (
      <div className="PatentOutSide bcFlexColumn">
        <div
          className="scFlexColumn"
          style={{
            width: "100%",
            maxHeight: "calc(100vh - 45px -32px)",
            overflowY: "scroll"
          }}
        >
          <div className="ccFlexColumn" style={{ width: "100%", height: 150 }}>
            <img
              src={"https://s2.ax1x.com/2019/09/16/nhMJ8s.jpg"}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                maxHeight: 150,
                objectFit: "cover"
              }}
            />
          </div>
          <div
            className="ssFlexColumn"
            style={{
              width: "100%",
              background: "#ffffff",
              padding: "3px 13px"
            }}
          >
            <div
              className="scFlexRow"
              style={{
                fontSize: 18,
                fontWeight: "bold",
                width: "100%",
                height: 30
              }}
            >
              {item.name}
            </div>
            <div
              className="bcFlexRow"
              style={{
                fontSize: 14,
                fontWeight: "normal",
                width: "60%",
                height: 30
              }}
            >
              <Tag color="#f50">
                <span>{item.time}</span>
              </Tag>
              <Tag color="#2db7f5">
                <span>PX{item.id}</span>
              </Tag>
              <Tag color="#87d068">
                <span>{item.state}</span>
              </Tag>
            </div>
            <div
              className="bcFlexRow"
              style={{
                fontSize: 16,
                fontWeight: "normal",
                width: "100%",
                height: 40
              }}
            >
              <span style={{width:"80%"}}>{<SmallWord word={`拥有者：${item.owner}`}/>}</span>
              <Button type="primary" size="small">
                查看
              </Button>
            </div>
            <div
              className="bcFlexRow"
              style={{
                fontSize: 16,
                fontWeight: "normal",
                width: "100%",
                height: 40
              }}
            >
              <span style={{width:"80%"}}>{<SmallWord word={`申请者：${item.aplier}`}/>}</span>
              <Button type="primary" size="small">
                查看
              </Button>
            </div>
            <Divider style={{ margin: "2px 0px" }} />
            <div
              className="bcFlexRow"
              style={{
                fontSize: 16,
                fontWeight: "normal",
                width: "100%",
                height: 40
              }}
            >
              <span>简介</span>
              <Icon
                type="down"
                rotate={this.state.open ? 180 : 0}
                onClick={this.toggle}
              />
            </div>
            <div
              className="bcFlexRow"
              style={{
                fontSize: 16,
                fontWeight: "normal",
                width: "100%",
                minHeight: 40
              }}
            >
              <p className={this.state.open ? null : "ellipsis1"}>
                {item.intro}
              </p>
            </div>
            <Divider style={{ margin: "2px 0px" }} />
            {this.getState() && (
              <div
                className="scFlexRow"
                style={{
                  fontSize: 16,
                  fontWeight: "normal",
                  width: "100%",
                  height: 40
                }}
              >
                <span>
                  目前{this.getState()}：
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {item.price}VNT
                  </span>
                </span>
                <span>
                  &asymp;
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {item.price}CNY
                  </span>
                </span>
              </div>
            )}
            {this.getState() && (
              <div
                className="bcFlexRow"
                style={{
                  fontSize: 16,
                  fontWeight: "normal",
                  width: "100%",
                  height: 40
                }}
              >
                <span style={{width:"80%"}}>{<SmallWord word={`出价者：${item.priceProvider}`}/>}</span>
                <Button type="primary" size="small">
                  查看
                </Button>
              </div>
            )}
          </div>
        </div>
        <div
          className="bcFlexRow"
          style={{ width: "100%", padding: "0px 0px" }}
        >
          <Input.Search defaultValue={this.state.price} addonBefore={selectBefore} enterButton={"参与交易"}  onSearch={(v,e)=>{this.send(v,e)}} />
        </div>
      </div>
    );
  }
}

export default Patent;
