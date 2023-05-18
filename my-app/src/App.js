import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Mycolor.scss";
import "./Myscss.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mycomponent/Partial/Myheader";
import Myheader from "./Mycomponent/Partial/Myheader";
import MyMainHomepage from "./Mycomponent/Home/MyMainHomepage";

function App() {
  return (
    <>
      <Myheader />
      <MyMainHomepage />
    </>
  );
}

export default App;
