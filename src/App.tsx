import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import style from "./App.module.css";
import { AppProvider } from "./store/appContext";
import DetailedPage from "./Pages/DetailedPage";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className={style.all}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/content/:type/:query" element={<DetailedPage />} />
          </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
