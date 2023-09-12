import React from "react";
import { Routes, Route } from "react-router-dom";
import Movie from "./components/movie";
import MovieDetails from "./components/movie-details";
import "@fortawesome/fontawesome-free/css/all.css"; 


function App() {
  return (
      <div>
      <Routes>
        <Route path="" element={<Movie />} />
        <Route path=":id" element={<MovieDetails />} />
      </Routes>
      </div>

  );
}

export default App;
