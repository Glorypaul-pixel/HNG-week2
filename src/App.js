import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import SearchResult from "./components/results/SearchResult";
import SingleMovie from "./components/singlemovie/SingleMovie";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<SearchResult />} />
      <Route path="/movies/:id" element={<SingleMovie />} />
    </Routes>
  );
}
export default App;
