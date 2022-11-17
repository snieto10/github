import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { screen } from "@testing-library/react";

function App() {
  return (
    <Router>
      <div className="flex flex-col ustify-between h-screen">
        <Navbar />
        <main>Content</main>
      </div>
    </Router>
  );
}

export default App;
