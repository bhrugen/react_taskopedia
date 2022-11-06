export default function Student(props) {
  return (
    <div className="container p-1">
      <div className="row border">
        <div className="col-2">
          <img src={props.headshot} className="w-100 py-2"></img>
        </div>
        <div className="col-10">
          {props.name}
          <br />
          Coding Experience {props.experience} years
        </div>
      </div>
    </div>
  );
}
