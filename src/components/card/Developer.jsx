import "./styles.css";

function Developer({ name, age, country }) {
  return (
    <div className="card">
      <h3>Dev: {name}</h3>
      <h4>Idade: {age}</h4>
      <h4>País: {country}</h4>
    </div>
  );
}

export default Developer;
