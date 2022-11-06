import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Layout/Header";
import Student from "./Student";
import Footer from "./Layout/Footer";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <MainBody />
    <div className="container row">Students Enrolled</div>
    <Student
      experience={2}
      name="Kris Walley"
      headshot="https://api.lorem.space/image/face?w=150&h=153"
    />
    <Student
      experience={5}
      name="Angel Patrice"
      headshot="https://api.lorem.space/image/face?w=150&h=151"
    />
    <Student
      experience={7}
      name="Rene Parker"
      headshot="https://api.lorem.space/image/face?w=150&h=150"
    />
    <Footer />
  </div>
);
