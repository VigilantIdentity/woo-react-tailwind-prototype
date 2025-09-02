import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import LoginPage from "./components/pages/LoginPage";
import DevelopOnWoo from "./components/pages/DevelopOnWoo";
import HireAnExpert from "./components/pages/HireAnExpert";
import GetSupport from "./components/pages/GetSupport";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        {
          // ✅No need of Navbar component to be added here (<Navbar/>) as its called in pages needed separately
        }

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/develop-on-woo" element={<DevelopOnWoo />} />
          <Route path="/hire-an-expert" element={<HireAnExpert />} />
          <Route path="/get-support" element={<GetSupport />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
