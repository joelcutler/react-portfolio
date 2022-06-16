import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Work from "./pages/Work/Work";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/work" element={<Work />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
