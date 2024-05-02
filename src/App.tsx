import React from "react";
import HomePage from "./Pages/HomePage";
import style from "./App.module.css";
import { AppProvider } from "./store/appContext";

function App() {
  return (
    <AppProvider>
      <div className={style.all}>
        <HomePage />
      </div>
    </AppProvider>
  );
}

export default App;
