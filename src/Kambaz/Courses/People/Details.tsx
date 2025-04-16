
import { useEffect, useState } from "react";
import { FaUserCircle, FaCheck } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import { FormControl } from "react-bootstrap";

export default function PeopleDetails() {
  const { uid } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);

  const fetchUser = async () => {
    if (!uid) return;
    const foundUser = await client.findUserById(uid);
    setUser(foundUser);
  };

  //  initialize "name"
  useEffect(() => {
    fetchUser();
  }, [uid]);

  useEffect(() => {
    if (user && (user.firstName || user.lastName)) {
      setName(`${user.firstName ?? ""} ${user.lastName ?? ""}`.trim());
    }
  }, [user]);

  if (!uid) return null;

  const deleteUser = async () => {
    await client.deleteUser(uid);
    navigate(-1);
  };

  const saveUser = async () => {
    // split the "name" input on whitespace
    const [firstName, lastName = ""] = name.trim().split(/\s+/, 2);

    const updatedUser = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);

    setUser(updatedUser);
    setEditing(false);
    navigate(-1);
  };

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" />
      </button>
      <hr />
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <div className="text-danger fs-4">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}
        {editing && (
          <FaCheck
            onClick={saveUser}
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}
        {!editing && (
          <div className="wd-name" onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}
        {editing && (
          <FormControl
            className="w-50 wd-edit-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>

      <b>Roles:</b> <span className="wd-roles">{user.role}</span> <br />
      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
      <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />
      <div className="d-flex justify-content-end align-items-center gap-2">
        <button onClick={deleteUser} className="btn btn-danger float-end wd-delete">
          Delete
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-secondary float-start float-end me-2 wd-cancel">
          Cancel
        </button>
      </div>
      <hr />
    </div>
  );
}