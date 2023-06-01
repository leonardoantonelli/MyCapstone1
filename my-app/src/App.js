import "./App.css";
import "./Mycolor.scss";
import "./Myscss.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import MyMainHomepage from "./Mycomponent/Home/MyMainHomepage";
import MyNavbar from "./Mycomponent/Partial/MyNavbar";
import MyFooter from "./Mycomponent/Partial/MyFooter";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNavbar />
      <MyFooter />
    </>
  );
}

export default App;
