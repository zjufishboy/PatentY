import React from "react";
import "./css/common.css";
import "./App.css";
import Sample from "./Component/Sample/Sample";
import Intro from "./Page/Intro/Intro";
import { Icon } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QNavBar from "./Component/NavBar/QNavBar";
import Recruit from "./Page/Recruit/Recruit";
import {
  faHome,
  faShoppingCart,
  faUser,
  faCog,
  faMoon
} from "@fortawesome/fontawesome-free-solid";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
/*这里是功能列表的上层内容 */
const FunctionArray={
  function:[
    { name: "首页", to: "/", icon: "home", iconFA: faHome },
    {
      name: "交易大厅",
      to: "/Tran",
      icon: "money-collect",
      iconFA: faShoppingCart
    },
    { name: "个人主页", to: "/Me", icon: "user", iconFA: faUser },
    { name: "关于项目", to: "/Me", icon: "github", iconFA: faGithub }
  ],
  underFunction:[
    {name:'设置',iconFA:faCog},
    {name:'夜间',iconFA:faMoon},
  ]
}

function App() {
  return (
    <div className="ccFlexColumn">
      <Router>
        <QNavBar title={"PatentY"} FunctionArray={FunctionArray} />
        <Route
          exact
          path="/"
          component={routeProps => <Intro {...routeProps} />}
        />
        <Route
          exact
          path="/Tran"
          component={routeProps => <Recruit {...routeProps} content={"测试"} />}
        />
        <Route
          exact
          path="/funct"
          component={routeProps => <Sample {...routeProps} content={"测试"} />}
        />
      </Router>
    </div>
  );
}

export default App;
