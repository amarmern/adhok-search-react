import "./styles.css";
import React, { useEffect, useState } from "react";

const users = ["amrendra", "prava", "testuser"];
export default function App() {
  const [searchterm, setSearchterm] = useState("");
  const [serchResult, setSearchReasult] = useState([]);

  const searchNameHandle = (e) => {
    setSearchterm(e.target.value);
  };

  useEffect(() => {
    const result = users.filter((user) =>
      user.toLowerCase().includes(searchterm)
    );
    setSearchReasult(result);
  }, [searchterm]);
  return (
    <div className="App">
      <input type="text" onChange={searchNameHandle} value={searchterm} />
      <ul>
        {serchResult.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
