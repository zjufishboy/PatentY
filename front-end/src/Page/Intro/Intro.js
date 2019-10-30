import React from "react";
import "../../css/common.css";
import "./Intro.css";
import ReactPullLoad, { STATS } from "react-pullload";
import "react-pullload/dist/ReactPullLoad.css";
import { Icon, Drawer, Divider } from "antd";
import Button from "@material-ui/core/Button";

const cData = [
  {
    name: "广告：ZJUBCA纳新",
    content: [
      "https://s2.ax1x.com/2019/09/16/nhMJ8s.jpg",
      "https://s2.ax1x.com/2019/09/20/nOWJ9H.md.jpg",
      "https://s2.ax1x.com/2019/09/20/nOWJ9H.md.jpg",
      "https://s2.ax1x.com/2019/09/20/nOWJ9H.md.jpg"
    ],
    type: 0 //0-大框，1-小框
  },
  {
    id: 0,
    name: "基于区块链的专利基于区块链的专利基于区块链的专利基于区块链的专利",
    type: 1,
    image: "https://s2.ax1x.com/2019/09/16/nhMJ8s.jpg",
    Pxtype: "外观发明专利",
    state: "出售",
    focus: "2019"
  },
  {
    id: 1,
    name: "基于人工智能的专利",
    type: 1,
    image: "https://s2.ax1x.com/2019/09/16/nhMJ8s.jpg",
    Pxtype: "外观发明专利",
    state: "出售",
    focus: "2019"
  }
];
const MoreData = {
  id: 2,
  name: "基于人工智能的专利",
  type: 1,
  image: "https://s2.ax1x.com/2019/09/16/nhMJ8s.jpg",
  Pxtype: "外观发明专利",
  state: "出售",
  focus: "2019"
};
const buttonCotent = [
  "信息不正确",
  "专利申报错误",
  "专利状态错误",
  "专利种类错误"
];
class Intro extends React.Component {
  constructor(props) {
    super();
    this.state = {
      visible: false,
      choice: -1,

      hasMore: true,
      data: cData,
      action: STATS.init,
      index: 1 //loading more test time limit
    };
  }
  open = id => {
    this.setState({
      choice: id,
      visible: true
    });
  };
  DataToDiv = item => (
    <div
      className="bsFlexColumn"
      style={{
        width: (item.type === 0 ? 98 : 48) + "%",
        maxHeight: 198,
        background: "#ffffff",
        padding: "0px 0px",
        margin: "4px 1%",
        borderRadius: "10px"
      }}
      onClick={() => {
        this.props.history.push(`/patent/${item.id}`);
      }}
    >
      <img
        style={{
          maxHeight: 110,
          width: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          borderBottomLeftRadius: item.type === 0 ? 10 : 0,
          borderBottomRightRadius: item.type === 0 ? 10 : 0
        }}
        src={item.type === 0 ? item.content[0] : item.image}
        alt="广告"
      />
      {item.type === 0 ? null : (
        <div className="bcFlexRow" style={{ width: "100%", height: "100%" }}>
          <div
            className="bsFlexColumn"
            style={{
              width: "90%",
              padding: "0 10%",
              height: "63px",
              margin: "10px 0px"
            }}
          >
            <span
              className="ellipsis2"
              style={{ fontWeight: "normal", fontSize: 13 }}
            >
              {item.name}
            </span>
            <span
              className="ellipsis1"
              style={{ fontWeight: "normal", fontSize: 10 }}
            >
              {item.Pxtype + "/" + item.state + "/" + item.focus}
            </span>
          </div>
          <div
            className="ecFlexColumn"
            style={{ width: "10%", height: "63px" }}
            onClick={e => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
            }}
          >
            <Icon
              type="more"
              onClick={() => {
                this.open(item.id);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
  buttonToDiv = item => (
    <div
      className="ccFlexColumn"
      style={{
        width: "45%",
        height: 40,
        borderRadius: 5,
        border: "1px #dfdfdf solid",
        fontWeight: "normal",
        fontSize: 14,
        margin: "10px 0px"
      }}
    >
      <Button
        color="default"
        style={{ margin: 0, width: "100%", height: "100%", borderRadius: 5 }}
      >
        {item}
      </Button>
    </div>
  );
  close = () => {
    this.setState({
      choice: -1,
      visible: false
    });
  };
  handleAction = action => {
    console.info(action, this.state.action, action === this.state.action);
    if (action === this.state.action) {
      return false;
    }
    if (action === STATS.refreshing) {
      this.handRefreshing();
      //console.info("下拉刷新")
    } else if (action === STATS.loading) {
      //this.handLoadMore();
      //console.info("上拉加载已经禁用")
    } else {
      this.setState({
        action: action
      });
    }
  };

  handRefreshing = () => {
    if (STATS.refreshing === this.state.action) {
      return false;
    }
    setTimeout(() => {
      this.setState({
        data: [MoreData, MoreData, ...this.state.data],
        hasMore: true,
        action: STATS.refreshed,
        index: 1
      });
    }, 1000);

    this.setState({
      action: STATS.refreshing
    });
  };
  render() {
    const { data, hasMore } = this.state;
    return (
      <div className="IntroOutSide scFlexColumn">
        <Drawer
          title={null}
          placement={"bottom"}
          closable={false}
          onClose={this.close}
          visible={this.state.visible}
          width={"100%"}
          height={"402px"}
          bodyStyle={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "402px",
            background: "#efefef",
            padding: "0px 0px",
            minWidth: 250
          }}
        >
          <div
            className="bsFlexColumn"
            style={{
              minHeight: 20,
              background: "#ffffff",
              padding: "0px 0px 13px 0px"
            }}
          >
            {/* 您选择的专利{this.state.choice} */}
            <div
              className="scFlexRow"
              style={{
                fontSize: 16,
                fontWeight: "bold",
                height: 37,
                width: "100%"
              }}
            >
              <Button
                color="default"
                style={{
                  margin: 0,
                  width: "100%",
                  justifyContent: "flex-start",
                  padding: "0 13px",
                  borderRadius: 0,
                  height: "100%"
                }}
              >
                添加到关注列表
              </Button>
            </div>
            <div
              className="ccFlexRow"
              style={{ padding: "0px 13px", width: "100%" }}
            >
              <Divider style={{ margin: "1px 0px 10px 0px" }} />
            </div>
            <div
              className="ssFlexColumn"
              style={{
                fontSize: 16,
                fontWeight: "bold",
                minHeight: 42,
                width: "100%",
                padding: "0px 13px"
              }}
            >
              <div className="seFlexRow">
                反馈
                <span style={{ fontWeight: "normal", fontSize: 10 }}>
                  （帮助我们修改信息）
                </span>
              </div>
              <div
                className="bcFlexRow"
                style={{ flexWrap: "wrap", width: "100%" }}
              >
                {buttonCotent.map(this.buttonToDiv)}
              </div>
              <div className="seFlexRow">
                举报
                <span style={{ fontWeight: "normal", fontSize: 10 }}>
                  （帮助我们一起管理）
                </span>
              </div>
              <div
                className="bcFlexRow"
                style={{ flexWrap: "wrap", width: "100%" }}
              >
                {buttonCotent.map(this.buttonToDiv)}
              </div>
            </div>
          </div>
          <div
            className="ccFlexColumn"
            style={{ minHeight: 36, background: "#ffffff", padding: 0 }}
            onClick={() => {
              this.close();
            }}
          >
            <Button
              color="default"
              style={{
                margin: 0,
                width: "100%",
                padding: "0 13px",
                borderRadius: 0,
                height: "100%"
              }}
            >
              取消
            </Button>
          </div>
        </Drawer>
        <ReactPullLoad
          downEnough={10}
          action={this.state.action}
          handleAction={this.handleAction}
          hasMore={hasMore}
          style={{ padding: "0 2%", width: "100%" }}
          distanceBottom={100}
        >
          <div
            className="ssFlexRow"
            style={{
              height: "auto",
              width: "100%",
              paddingTop: 10,
              flexWrap: "wrap"
            }}
          >
            {data.map(this.DataToDiv)}
          </div>
        </ReactPullLoad>
      </div>
    );
  }
}

export default Intro;
