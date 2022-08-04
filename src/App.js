import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        {data.map((data) => {
          return <SingleQuestion key={data.id} {...data} />;
        })}
      </div>
    </main>
  );
}

export default App;
