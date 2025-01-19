import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Movie from "./Pages/Movie/Movie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/:id" element={<Movie />}>
          Movie
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
