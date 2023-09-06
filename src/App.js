import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./Components/login";
import RegisterPage from "./Components/register";
import DashboardView from "./Components/dashboard";

function App() {
  return (
    < Router >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardView />} />
      </Routes>
    </ Router >
  );
}

export default App;
