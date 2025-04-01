import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Review from "./pages/Review";
import Reporting from "./pages/Reporting";
import Pending from "./pages/Pending";
import { ReviewProvider } from "./context/ReviewContext";

export default function App() {
  return (
    <ReviewProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Reporting />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
    </ReviewProvider>
  );
}
