import React, { useState } from "react"
import ct from "../Styles/CreateTask.module.css"
import { Link, useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar"
// import { useCanister } from "@connect2ic/react"
import { Loader } from "./Loader"
import { NewCrm_backend } from "../../../declarations/NewCrm_backend";
const CreateTask = () => {
  const [loader, setLoader] = useState()
  const nav = useNavigate()
  // const [counter] = useCanister("counter")

  const onSave = async () => {
    let a = document.getElementById("task")
    let b = document.getElementById("taskOwner")
    let c = document.getElementById("start")
    let d = document.getElementById("status")
    let e = document.getElementById("priority")

    let start = c.value.toString()
    setLoader(<Loader />)

    await NewCrm_backend.addTasks(a.value, e.value, b.value, d.value, start)
    nav("/tasks")
  }
  return (
    <>
      <div className={ct.container}>
        <Navbar />
        {loader}

        <div className={ct.heading}>Create Task</div>
        <div className={ct.wrapper}>
          <div className={ct.one}>
            Task
            <input className={ct.custom} id="task" type="text" />
          </div>
          <div className={ct.two}>
            Task Owner
            <input className={ct.custom} id="taskOwner" type="text" />
          </div>
          <div className={ct.three}>
            Due Date
            <input
              className={ct.custom}
              type="date"
              id="start"
              name="trip-start"
            />
          </div>
          <div className={ct.six}>
            Status
            <select id="status">
              <option value="">Choose Status</option>
              {/* <!--We want people not be able to choose it so no value--> */}
              <option value="not-started">Not Started</option>
              <option value="waiting">Waiting for input</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className={ct.five}>
            Priority
            <select id="priority">
              <option value="">Choose Priority</option>
              {/* <!--We want people not be able to choose it so no value--> */}
              <option value="high">High</option>
              <option value="highest">Highest</option>
              <option value="normal">Normal</option>
              <option value="low">Low</option>
              <option value="lowest">Lowest</option>
            </select>
          </div>

          <div className={ct.btns}>
            <Link to="/tasks">
              <div className={ct.nine}>
                <button className={ct.cancel}>Cancel</button>
              </div>
            </Link>
            <div className={ct.ten}>
              <button onClick={onSave} className={ct.save}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { CreateTask }
