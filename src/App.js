import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-white-100 min-h-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
