import "./App.css";
import "./Mycolor.scss";
import "./Myscss.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mycomponent/Home/scss/CardHomepage.scss";
import MyMainHomepage from "./Mycomponent/Home/MyMainHomepage";
import MyNavbar from "./Mycomponent/Partial/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />
      <MyMainHomepage />
    </>
  );
}

export default App;
