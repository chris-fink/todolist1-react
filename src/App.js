import React from "react";
import Switcher from "./Switcher";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-sky-50 dark:bg-slate-800 h-screen">
      <div style={{ textAlign: "center" }}>
        <h1 className="text-green-500 dark:text-white text-7xl font-bold">
          Tasks in Progress
        </h1>
      </div>
      <center>
        <Switcher />
        <Card />
      </center>
    </div>
  );
}

export default App;
