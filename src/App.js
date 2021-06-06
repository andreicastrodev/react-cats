import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import "./App.css";

const dummyData = [
  {
    name: "Kitty",
    age: 5,
    breed: "Persian",
  },
  {
    name: "Kitty",
    age: 5,
    breed: "Persian",
  },
  {
    name: "Kitty",
    age: 5,
    breed: "Persian",
  },
  {
    name: "Kitty",
    age: 5,
    breed: "Persian",
  },
  
];


function App() {
  return (
    <div className="App">
      <Header />
      <Content cats={dummyData} />
    </div>
  );
}

export default App;
