import React from "react";
import "./css/common.css";
import "./App.css";
import Intro from "./Page/Intro/Intro";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import QNavBar from "./Component/NavBar/QNavBar";

import {
  faHome,
  faShoppingCart,
  faUser,
  faCog,
  faMoon,
  faQuestionCircle
} from "@fortawesome/fontawesome-free-solid";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import About from "./Page/About/About";
import Help from "./Page/Help/Help";
import Patent from "./Page/Patent/Patent";
import Tran from "./Page/Tran/Tran";
import Sample from "./Component/Sample/Sample";
/*这里是功能列表的上层内容 */
const FunctionArray = {
  function: [
    { name: "首页", to: "/home", iconFA: faHome },
    {
      name: "交易大厅",
      to: "/Tran",
      iconFA: faShoppingCart
    },
    { name: "个人主页", to: "/Me", iconFA: faUser },
    { name: "使用帮助", to: "/Help", iconFA: faQuestionCircle },
    { name: "关于项目", to: "/about", iconFA: faGithub }
  ],
  underFunction: [
    { name: "设置", iconFA: faCog },
    { name: "夜间", iconFA: faMoon }
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
    };
  }

  render() {
    return (
      <div className="ccFlexColumn" style={{fontFamily:"KaiTi"}}>
        <Router>
          <Route
            exact
            path="/"
            component={routeProps => (
              <Redirect from="/" to="/home" />
            )}
          />
          <Route
            exact
            path="/:menu"
            component={routeProps => (
              <QNavBar
                title={"PatentY"}
                {...routeProps}
                FunctionArray={FunctionArray}
              />
            )}
          />
          <Route
            exact
            path="/patent/:id"
            component={routeProps => (
              <QNavBar
                title={"PatentY"}
                {...routeProps}
                FunctionArray={FunctionArray}
              />
            )}
          />
          
          <Route
            exact
            path="/home"
            component={routeProps => <Intro {...routeProps} />}
          />

          <Route
            exact
            path="/Tran"
            component={routeProps => (
              <Tran {...routeProps}  />
            )}
          />
          <Route
            exact
            path="/funct"
            component={routeProps => (
              <Sample {...routeProps} />
            )}
          />
          <Route
            exact
            path="/about"
            component={routeProps => (
              <About {...routeProps}  />
            )}
          />
          <Route
            exact
            path="/help"
            component={routeProps => (
              <Help {...routeProps}  />
            )}
          />
          <Route
            exact
            path="/patent/:id"
            component={routeProps => (
              <Patent {...routeProps}  />
            )}
          />
          
        </Router>
      </div>
    );
  }
}

export default App;
