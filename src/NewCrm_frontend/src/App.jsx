import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./Components/Login";
import { Dashboard } from "./Components/Dashboard";
import { Accounts } from "./Components/Accounts";
import { CreateAccounts } from "./Components/CreateAccounts";
import { CreateLead } from "./Components/CreateLead";
import { CreateMeeting } from "./Components/CreateMeeting";
import { CreateTask } from "./Components/CreateTask";
import { Meetings } from "./Components/Meetings";
import { Tasks } from "./Components/Tasks";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createlead" element={<CreateLead />} />
          <Route path="/createtask" element={<CreateTask />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/createAccounts" element={<CreateAccounts />} />
          <Route path="/createMeeting" element={<CreateMeeting />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/meetings" element={<Meetings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
