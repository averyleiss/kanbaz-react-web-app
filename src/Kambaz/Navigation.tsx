import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiInbox } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

export default function KambazNavigation() {
   // Track the active link
  const [activeLink, setActiveLink] = useState(""); 

  const handleClick = (link: string) => {
   // Update active link state
    setActiveLink(link); 
  };

  return (
    <div id="wd-kambaz-navigation" style={{ width: 110 }} 
       className="list-group rounded-0 position-fixed
       bottom-0 top-0 d-none d-md-block bg-black z-2">
      {/* NEU website */}
      <a id="wd-neu-link" target="_blank" 
         href="https://www.northeastern.edu/"
         className="list-group-item bg-black border-0 text-center">
         <img src="/images/NEU.png" width="75px" /></a><br />
      {/* Account */}
      <Link to="/Kambaz/Account" id="wd-account-link"
         onClick={() => handleClick("Account")}
         className={`list-group-item text-center border-0
         ${activeLink === "Account" ? "bg-white text-danger" : "bg-black text-white"}`}>
         <FaRegCircleUser className={`fs-1 ${activeLink === "Account" ? "text-danger" : "text-white"}`} /><br />
         <span className={activeLink === "Account" ? "text-danger" : "text-white"}>Account</span>
      </Link><br />
      {/* Dashboard */}
      <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
         onClick={() => handleClick("Dashboard")}
         className={`list-group-item text-center border-0 
         ${activeLink === "Dashboard" ? "bg-white text-danger" : "bg-black text-white"}`}>
         <AiOutlineDashboard className="fs-1 text-danger" /><br />
         <span className={activeLink === "Dashboard" ? "text-danger" : "text-white"}>Dashboard</span>
      </Link><br />
      {/* Courses */}
      <Link to="/Kambaz/Courses" id="wd-course-link"
         onClick={() => handleClick("Courses")}
         className={`list-group-item text-center border-0 
         ${activeLink === "Courses" ? "bg-white text-danger" : "bg-black text-white"}`}>
         <LiaBookSolid className="fs-1 text-danger" /><br />
         <span className={activeLink === "Courses" ? "text-danger" : "text-white"}>Courses</span>
      </Link><br />
      {/* Calendar */}
      <Link to="/Kambaz/Calendar" id="wd-calendar-link"
         onClick={() => handleClick("Calendar")}
         className={`list-group-item text-center border-0 
         ${activeLink === "Calendar" ? "bg-white text-danger" : "bg-black text-white"}`}>
         <IoCalendarOutline className="fs-1 text-danger" /><br />
         <span className={activeLink === "Calendar" ? "text-danger" : "text-white"}>Calendar</span>
      </Link><br />
      {/* Inbox */}
      <Link to="/Kambaz/Inbox" id="wd-inbox-link"
         onClick={() => handleClick("Inbox")}
         className={`list-group-item text-center border-0 
         ${activeLink === "Inbox" ? "bg-white text-danger" : "bg-black text-white"}`}>
         <FiInbox className="fs-1 text-danger" /><br />
         <span className={activeLink === "Inbox" ? "text-danger" : "text-white"}>Inbox</span>
      </Link><br />
      {/* Labs */}
      <Link to="/Kambaz/Labs" id="wd-lab-link"
         onClick={() => handleClick("Labs")}
         className={`list-group-item text-center border-0 
         ${activeLink === "Labs" ? "bg-white text-danger" : "bg-black text-white"}`}>
         <LiaCogSolid className="fs-1 text-danger" /><br />
         <span className={activeLink === "Labs" ? "text-danger" : "text-white"}>Labs</span>
      </Link><br />
    </div>
  );
}
