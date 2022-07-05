import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardPage from "./components/card-page/CardPage";
import ErrorPage from "./components/error-page/ErrorPage";
import MainPage from "./components/main-page/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books/:id" element={<CardPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;