import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mycomponent/Myheader";
import Myheader from "./Mycomponent/Myheader";
import MyMainHomepage from "./Mycomponent/MyMainHomepage";
import "./Mycolor.scss";
import "./Myscss.scss";
import Video from "./Mycomponent/Video";

function App() {
  return (
    <>
      <Myheader></Myheader>
      <MyMainHomepage></MyMainHomepage>
    </>
  );
}

export default App;
