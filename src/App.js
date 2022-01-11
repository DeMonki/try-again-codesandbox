import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("fetching...");
    fetch("https://jsonplaceholder.cypress.io/todos")
      .then((response) => response.json())
      .then((json) => setData(json.slice(-8)));
  }, []);

  return (
    <div className="App">
      <div className="item-div">
        {data &&
          data.map((item) => (
            <article key={item.id} className="article">
              <p>{item.completed.toString()}</p>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.userId}</p>
            </article>
          ))}
      </div>
    </div>
  );
}
