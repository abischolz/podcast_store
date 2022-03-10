import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeHeader from "./Components/Header";
import LogIn from "./Pages/Login";
import Home from "./Pages/Home";
import PodcastCard from "./Components/PodcastCard";

function App() {
  return (
    <div>
      <div>This is the app.</div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" component={LogIn} /> */}
        {/* <Route path="/signup" component={SignUp} /> */}
        {/* <Route path="/home" component={Home} /> */}
        <Route path="/podcasts" element={<PodcastCard />} />
      </Routes>
    </div>
  );
}

export default App;
