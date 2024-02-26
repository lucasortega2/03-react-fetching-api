import axios from "axios";
import Card from "./assets/components/Card";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
const url = "https://reqres.in/api/users?per_page=12";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await (await axios(url)).data;
      const newData = await res.data;
      setData(newData);
    };
    getData();
  }, []);

  return (
    <>
      <h1>
        Bootstrap 4 <span>User Cards</span>
      </h1>
      <ul className="list">
        {data &&
          data.map((data) => (
            <Card
              key={data.id}
              imgUrl={data.avatar}
              buttonText="Follow"
              name={[data.first_name, data.last_name].join(" ")}
            />
          ))}
      </ul>
    </>
  );
}

export default App;
