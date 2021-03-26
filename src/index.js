import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import MyApp from "./MyApp";
import MyAppCls from "./MyAppCls";
import Sunil from "./Sunil";
import MyFirstClassComponent from "./MyFirstClassComponent";
import Notfound from "./Notfound";
import { createStore } from "redux";
import myReducer from "./myReducer";
import { Provider } from "react-redux";

const myStore = createStore(myReducer);

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/MyAppCls">myappcls</Link>
        </li>
        <li>
          <Link to="/MyApp">MyApp</Link>
        </li>
        <li>
          <Link to="/Sunil">Sunil</Link>
        </li>
        <li>
          <Link to="/MyFirstClassComponent">MyFirstClassComponent</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/MyApp" component={MyApp} />
        <Route path="/MyAppCls" component={MyAppCls} />
        <Route path="/Sunil" component={Sunil} />
        <Route
          path="/MyFirstClassComponent"
          component={MyFirstClassComponent}
        />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  <Provider store={myStore}>
    <React.StrictMode>
      {routing}
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
