import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import SportsDashboard from "./pages/SportsDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route exact path="/" element={<Index />} />
        </Route>
        <Route path="/sports-dashboard" element={<SportsDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;