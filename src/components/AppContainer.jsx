import React, { useEffect, useState } from "react";
import Summary from "./Summary";
function AppContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((item) => setData(item));
  }, []);
  return (
    <main className="container">
      <div className="result">
        <p>your result</p>
        <div className="scorecontainer">
          <p className="score">76</p>
          <p className="subscore">of 100</p>
        </div>
        <p className="subtext">great</p>
        <p className="info">
          You scored higher than 65% of the people who have taken these tests
        </p>
      </div>
      <div className="summary">
        <p>Summary</p>
        <ul>
          {data.map((item) => (
            <Summary key={item.category} {...item} />
          ))}
        </ul>
        <a href="#">Continue </a>
      </div>
    </main>
  );
}

export default AppContainer;
