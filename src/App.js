import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import "./App.css";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getDataHandler = useCallback(async () => {
    try {
      const loadedData = [];
      const RES = await fetch(
        "https://react-cat-1b178-default-rtdb.firebaseio.com/cats.json"
      );

      const DATA = await RES.json();

      for (const key in DATA) {
        loadedData.push({
          id: key,
          name: DATA[key].name,
          age: DATA[key].age,
          breed: DATA[key].breed,
        });
      }

      setData(loadedData);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getDataHandler();
  }, [getDataHandler]);

  const addCatDataHandler = async (data) => {
    try {
      const RES = await fetch(
        "https://react-cat-1b178-default-rtdb.firebaseio.com/cats.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const DATA = await RES.json();
      console.log(DATA);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Header onUpdateData={getDataHandler} onAddData={addCatDataHandler} />
      <Content cats={data} />
    </div>
  );
}

export default App;
