import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { Button, FormControl } from "react-bootstrap";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  
  return (

    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl defaultValue={profile.username} id="wd-username" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
          <FormControl defaultValue={profile.password} id="wd-password" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          <FormControl defaultValue={profile.firstName} id="wd-firstname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          <FormControl defaultValue={profile.lastName} id="wd-lastname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          <FormControl defaultValue={profile.dob} id="wd-dob" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <FormControl defaultValue={profile.email} id="wd-email" className="mb-2"
                       onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>
          <select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                 className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
</div>);}

    <Container className="p-5">
      <h3 className="mb-4">Profile</h3>
      <Form.Group controlId="wd-username" className="mb-3">
        <Form.Control type="text" defaultValue="alice" />
      </Form.Group>
      <Form.Group controlId="wd-password" className="mb-3">
        <Form.Control type="password" defaultValue="123" />
      </Form.Group>
      <Form.Group controlId="wd-firstname" className="mb-3">
        <Form.Control type="text" defaultValue="Alice" />
      </Form.Group>
      <Form.Group controlId="wd-lastname" className="mb-3">
        <Form.Control type="text" defaultValue="Wonderland" />
      </Form.Group>
      <Form.Group controlId="wd-dob" className="mb-3">
        <Form.Control type="date" defaultValue="2000-01-01" />
      </Form.Group>
      <Form.Group controlId="wd-email" className="mb-3">
        <Form.Control type="email" defaultValue="alice@wonderland.com" />
      </Form.Group>
      <Form.Group controlId="wd-role" className="mb-4">
        <Form.Select defaultValue="USER">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
      </Form.Group>
      <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100">
      Sign Out
      </Link>
    </Container> 
  );
}

