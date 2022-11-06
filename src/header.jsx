function MainHeader() {
  return <h1 className="heading1">REACT COURSE</h1>;
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course.</p>;
}

export default function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}
