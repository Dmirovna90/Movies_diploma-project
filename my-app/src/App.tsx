import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import SelectedMovie from "./Pages/SelectedMovie/SelectedMovie";
import SearchResut from "./Pages/SeacrhResult/SearchResult";
import AllMovies from "./Pages/AllMovies/AllMovies";
import Cartoons from "./Pages/Cartoons/Cartoons";
import Series from "./Pages/Series/Series";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:kinopoiskId" element={<SelectedMovie />}></Route>
        <Route path="/search" element={<SearchResut />}></Route>
        <Route path="/all" element={<AllMovies />}></Route>
        <Route path="/cartoons" element={<Cartoons />}></Route>
        <Route path="/series" element={<Series />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
