import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Articles from "./Articles";
import Article from "./Article";

function Body() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/:topicId/:subId" component={Article} />
        <Route path="/:topicId" component={Articles} />
      </Switch>
    </div>
  );
}

export default Body;
