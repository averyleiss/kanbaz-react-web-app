import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
     
      {!currentUser && (
        <>
          <Link
            to="/Kambaz/Account/Signin"
            id="wd-account-signin-link"
            className={`list-group-item border-0 ${pathname.includes("/Signin") ? "active" : ""}`}
          >
            Sign In
          </Link>
          <Link
            to="/Kambaz/Account/Signup"
            id="wd-account-signup-link"
            className={`list-group-item border-0 ${pathname.includes("/Signup") ? "active" : ""}`}
          >
            Sign Up
          </Link>
        </>
      )}

     
      {currentUser && (
        <Link
          to="/Kambaz/Account/Profile"
          id="wd-account-profile-link"
          className={`list-group-item border-0 ${pathname.includes("/Profile") ? "active" : ""}`}
        >
          Profile
        </Link>
      )}
    </div>
  );
}
