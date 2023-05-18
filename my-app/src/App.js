import "./App.css";
import "./Mycolor.scss";
import "./Myscss.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mycomponent/Partial/Myheader";
import Myheader from "./Mycomponent/Partial/Myheader";
import MyMainHomepage from "./Mycomponent/Home/MyMainHomepage";
import CartIndicator from "./Mycomponent/Partial/CartIndicator";

function App() {
  return (
    <>
      <Myheader />

      <MyMainHomepage />
    </>
  );
}

export default App;
