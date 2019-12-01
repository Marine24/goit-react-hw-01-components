import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import user from "./user.json";
// Вызов компонента записывается как JSX-тег
// ReactDOM.render(<Profile />, document.getElementById("root"));
ReactDOM.render(<Profile user={user} />, document.getElementById("root"));
