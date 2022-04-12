import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import react from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        console.log(d);
      });
  }, []);
  return (
    <div className="bg-slate-900 text-center">
      <h1 className="text-white text-xl uppercase pt-8">
        <b> Choose your favourite Crypto</b>
      </h1>
      <div className="flex flex-wrap justify-center">
        {data.map((items) => {
          return (
            <Card
              key={items.id}
              name={items.name}
              url={items.image}
              price={items.current_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
