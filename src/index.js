import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
REACT COURSE

In this course, we will learn react js by building TaskOPedia! 
    •	Call Ben
    •	Go to walmart

Happy Coding!
*/
function Header() {
  return <h1>REACT COURSE</h1>;
}
function MainBody() {
  return (
    <div>
      <p>In this course, we will learn react js by building TaskOPedia!</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to walmart</li>
      </ul>
    </div>
  );
}
function Footer() {
  return <p>Happy Coding!</p>;
}
root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
