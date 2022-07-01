import React from "react";
import { Hypnosis } from "react-cssfx-loading";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <Hypnosis color="#00D8FF" width="100px" height="100px  " duration="3s" />
    </div>
  );
};
// #  e9d5a1
export default Loader;
