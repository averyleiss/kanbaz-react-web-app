import { Navigate, Route, Routes } from "react-router-dom";
import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
        <KambazNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
        </Routes>
      </div>
  </div>
  );
}