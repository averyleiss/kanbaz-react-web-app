
import Labs from "./Labs";
import Kambaz from "./Kambaz";
import KambazNavigation from "./Kambaz/Navigation";
import Dashboard from "./Kambaz/Dashboard/Dashboard";
import Account from "./Kambaz/Account";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
    <KambazNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Labs/*" element={<Labs />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </HashRouter>
  );
}


// import Labs from "./Labs";
// import Kambaz from "./Kambaz";
// import KambazNavigation from "./Kambaz/Navigation";
// import Dashboard from "./Kambaz/Dashboard";
// import Account from "./Kambaz/Account";
// import Courses from "./Kambaz/Courses";
// import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

// export default function App() {
//   return (
//     <div className="d-flex">
//       {/* Sidebar */}
//       <KambazNavigation />

//       {/* Main Content */}
//       <div className="flex-grow-1 p-4">
//         <Routes>
//           <Route path="/" element={<Navigate to="Dashboard" />} /> {/* Default page */}
//           <Route path="Account" element={<Account />} />
//           <Route path="Dashboard" element={<Dashboard />} />
//           <Route path="Courses" element={<Courses />} />
//           { /* <Route path="Calendar" element={<Calendar />} /> */}
//           { /* <Route path="Inbox" element={<Inbox />} />  */}
//           <Route path="Labs" element={<Labs />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }
