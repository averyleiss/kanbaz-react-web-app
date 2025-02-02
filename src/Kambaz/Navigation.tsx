// import React from "react";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { Link, useLocation } from "react-router-dom";

// // NavItem component, reduces code duplication
// interface NavItemProps {
//   to: string;
//   icon: React.ReactNode;
//   label: string;
//   activePath: string;
// }

// // individual sidebar links
// const NavItem: React.FC<NavItemProps> = ({ to, icon, label, activePath }) => {
//   const isActive = activePath === to;
//   return (
//     <Link 
//       to={to} 
//       className={`list-group-item border-0 py-3 
//                   ${isActive ? "bg-white text-danger" : "bg-black text-white"}`}>
//       {icon}<br />
//       {label}
//     </Link>
//   );
// };

// // main sidebar
// export default function KambazNavigation() {
//   const location = useLocation(); // gets current page route

//   return (
//     <div id="wd-kambaz-navigation"
//          className="position-fixed bottom-0 top-0 d-none d-md-block 
//                     z-2 bg-black text-center"
//          style={{ width: "110px" }}>

//       {/* NEU Logo */}
//       <a id="wd-neu-link" target="_blank" 
//          href="https://www.northeastern.edu/"
//          className="d-block my-3">
//          <img src="/images/NEU.png" width="75px" alt="NEU Logo"/>
//       </a>

//       {/* sidebar nav links */}
//       <NavItem to="/Kambaz/Account" icon={<FaRegCircleUser className="fs-1 text-white" />} 
//                label="Account" activePath={location.pathname} />
      
//       <NavItem to="/Kambaz/Dashboard" icon={<AiOutlineDashboard className="fs-1 text-danger" />} 
//                label="Dashboard" activePath={location.pathname} />

//       <NavItem to="/Kambaz/Courses" icon={<LiaBookSolid className="fs-1 text-danger" />} 
//                label="Courses" activePath={location.pathname} />

//       <NavItem to="/Kambaz/Calendar" icon={<IoCalendarOutline className="fs-1 text-danger" />} 
//                label="Calendar" activePath={location.pathname} />

//       <NavItem to="/Kambaz/Inbox" icon={<FaInbox className="fs-1 text-danger" />} 
//                label="Inbox" activePath={location.pathname} />

//       <NavItem to="/Kambaz/Labs" icon={<LiaCogSolid className="fs-1 text-danger" />} 
//                label="Labs" activePath={location.pathname} />
//     </div>
//   );
// }

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function KambazNavigation() {
 return (
  <div id="wd-kambaz-navigation" style={{ width: 120 }} 
       className="list-group rounded-0 position-fixed
       bottom-0 top-0 d-none d-md-block bg-black z-2">
    <a id="wd-neu-link" target="_blank" 
       href="https://www.northeastern.edu/"
       className="list-group-item bg-black border-0 text-center">
       <img src="/images/NEU.png" width="75px" /></a><br />
    <Link to="/Kambaz/Account" id="wd-account-link"
       className="list-group-item text-center border-0 bg-black text-white">
       <FaRegCircleUser className="fs-1 text text-white" /><br />
       Account </Link><br />
    <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
       className="list-group-item text-center border-0
                  bg-white text-danger">
       <AiOutlineDashboard className="fs-1 text-danger" /><br />
       Dashboard </Link><br />
    <Link to="/Kambaz/Dashboard" id="wd-course-link"
       className="list-group-item text-white
                  bg-black text-center border-0">
       <LiaBookSolid className="fs-1 text-danger" /><br />
       Courses </Link><br />
       {/* complete styling the rest of the links */}
       <Link to="/Kambaz/Calendar" id="wd-calendar-link"
       className="list-group-item text-white
                  bg-black text-center border-0">
       <IoCalendarOutline className="fs-1 text-danger" /><br />
       Calendar </Link><br />
       <Link to="/Kambaz/Inbox" id="wd-calendar-link"
       className="list-group-item text-white
                  bg-black text-center border-0">
       <IoCalendarOutline className="fs-1 text-danger" /><br />
       Calendar </Link><br />


       <Link to="/Kambaz/Labs" id="wd-lab-link"
       className="list-group-item text-white
                  bg-black text-center border-0">
       <LiaCogSolid className="fs-1 text-danger" /><br />
       Labs </Link><br />
  </div>);}