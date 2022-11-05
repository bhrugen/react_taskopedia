import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
REACT COURSE

In this course, we will learn react js by building TaskOPedia! 
    •	Call Ben
    •	Go to walmart

Happy Coding!
*/
function MainHeader() {
  return <h1 className="text-primary">REACT COURSE</h1>;
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course.</p>;
}

function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
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
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>
  );
}
root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
