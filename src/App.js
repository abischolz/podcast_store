import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeHeader from "./Components/Header";
import Home from "./Pages/Home";
import PodcastView from "./Pages/PodcastView";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function App(props) {
  console.log("props-app", props);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home {...props} />} />
        <Route path="/podcasts" element={<Home {...props} />} />
        {/* <Route path="/login" component={LogIn} /> */}
        {/* <Route path="/signup" component={SignUp} /> */}
        <Route path="/podcast/:id" element={<PodcastView {...props} />} />
      </Routes>
    </div>
  );
}

export default withRouter(App);
