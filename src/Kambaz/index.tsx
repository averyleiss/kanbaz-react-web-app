import { Navigate, Route, Routes } from "react-router-dom";
import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard/Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import "./styles.css"

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
        </Routes>
      </div>
     </div>
  </div>
  );
}