import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import SelectedMovie from "./Pages/SelectedMovie/SelectedMovie";
import SearchResut from "./Pages/SeacrhResult/SearchResult";
import FilterPage from "./Pages/FilterPage/FilterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}>
          Главная
        </Route>
        <Route path="/:kinopoiskId" element={<SelectedMovie />}>
          Фильмы
        </Route>
        <Route path="/search" element={<SearchResut />}>
          Результаты поиска
        </Route>
        <Route path="/filter" element={<FilterPage />}>
          Категория
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
