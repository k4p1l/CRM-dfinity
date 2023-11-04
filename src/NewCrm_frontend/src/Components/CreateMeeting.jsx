import React, { useState } from "react"
import cm from "../Styles/CreateMeeting.module.css"
import { Link, useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar"
import { useCanister } from "@connect2ic/react"
import { Loader } from "./Loader"
import { NewCrm_backend } from "../../../declarations/NewCrm_backend";

const CreateMeeting = () => {
  const [loader, setLoader] = useState()
  const nav = useNavigate()
  // const [counter] = useCanister("counter")

  const onSave = async () => {
    let a = document.getElementById("title")
    let b = document.getElementById("start")
    let c = document.getElementById("to")
    let d = document.getElementById("related")

    let start = b.value.toString()
    let end = c.value.toString()

    setLoader(<Loader />)

    await NewCrm_backend.addMeeting(a.value, start, end, d.value)
    nav("/meetings")
  }
  return (
    <>
      <div className={cm.container}>
        <Navbar />
        {loader}

        <div className={cm.heading}>Create Meeting</div>
        <div className={cm.wrapper}>
          <div className={cm.one}>
            Meeting Title
            <input className={cm.custom} id="title" type="text" />
          </div>
          <div className={cm.two}>
            From
            <input
              className={cm.custom}
              type="date"
              id="start"
              name="trip-start"
              // value="yyyy-mm-dd"
              // min="2018-01-01"
              // max="2030-12-31"
            />
          </div>
          <div className={cm.six}>
            To
            <input
              className={cm.custom}
              type="date"
              id="to"
              name="trip-start"
              // value="yyyy-mm-dd"
              // min="2018-01-01"
              // max="2030-12-31"
            />
          </div>
          <div className={cm.five}>
            Related to
            <input className={cm.custom} id="related" type="text" />
          </div>

          <div className={cm.btns}>
            <Link to="/meetings">
              <div className={cm.nine}>
                <button className={cm.cancel}>Cancel</button>
              </div>
            </Link>
            <div className={cm.ten}>
              <button onClick={onSave} className={cm.save}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { CreateMeeting }
