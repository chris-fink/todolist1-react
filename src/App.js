import React from "react";
import Switcher from "./Switcher";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-gradient-to-trfrom-sky-100 to-sky-50 dark:bg-slate-800 h-screen">
      <div style={{ textAlign: "center" }}>
        <h1 className="text-sky-500 dark:text-sky-200 text-7xl font-bold">
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
