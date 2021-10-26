import "./App.css";
import Developer from "./components/card/Developer";

function App() {
  const dev1 = { name: "Lucas", age: "21", country: "Kenzielândia" };
  const dev2 = { name: "Pato", age: "43", country: "Kenziequistão" };
  const dev3 = { name: "Duda", age: "95", country: "Kenzienólia" };

  return (
    <div className="App">
      <header className="App-header">
        <h1>1A14 - Card de Pessoas</h1>
        <Developer name={dev1.name} age={dev1.age} country={dev1.country} />
        <Developer name={dev2.name} age={dev2.age} country={dev2.country} />
        <Developer name={dev3.name} age={dev3.age} country={dev3.country} />
      </header>
    </div>
  );
}

export default App;
