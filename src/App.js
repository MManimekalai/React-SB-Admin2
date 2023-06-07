import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddUser from "./component/AddUser";
import Profile from "./component/Profile";
import PendingRequest from "./component/PendingRequest";
import Task from "./component/Task";
import ProfileDetails from "./component/ProfileDetails";
import ResetPassword from "./component/ResetPassword";
import { useState } from "react";


function App() {
  let [users, setUsers] = useState([
    {
      name: "Anoop",
      email: "anoop@gmail.com",
      mobile: "919100201",
      dob: "1985-10-28"
    },
    {
      name: "Ajith",
      email: "ajith@gmail.com",
      mobile: "8919989291",
      dob: "2012-02-14"
    },
    {
      name: "Ganesh",
      email: "ganesh@gmail.com",
      mobile: "80989019801",
      dob: "2013-11-07"
    },
    {
      name: "Gokul",
      email: "gokul@gmail.com",
      mobile: "782718189",
      dob: "2010-05-05"
    }
  ])
  return <>
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers} />} />
          <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path="/edit-user/:id" element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/pending-request" element={<PendingRequest />} />
          <Route path="/task" element={<Task />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
}

export default App;
