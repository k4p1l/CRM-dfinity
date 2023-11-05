// import { useCanister } from "@connect2ic/react"
import React, { useState } from "react"
import cl from "../Styles/CreateLead.module.css"
import { Link, useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Loader } from "./Loader"
import { NewCrm_backend } from "../../../declarations/NewCrm_backend";
const CreateLead = () => {
  // var idCount = 0
  const [loader, setLoader] = useState()
  const nav = useNavigate()
  // const [counter] = useCanister("counter")
  // const [leadss, setLeadss] = useState("")
  // const [fullName, setFullName] = useState("")
  // const [phNo, setPhNo] = useState("")
  // const [addrs, setAddrs] = useState("")
  // const [company, setCompany] = useState("")
  // const [source, setSource] = useState("")
  // const [email, setEmail] = useState("")
  // const [des, setDes] = useState("")

  const onSave = async () => {
    let a = document.getElementById("leadOwner")
    let b = document.getElementById("fullName")
    let c = document.getElementById("phNo")
    let d = document.getElementById("address")
    let e = document.getElementById("company")
    let f = document.getElementById("leadSource")
    let g = document.getElementById("email")
    let h = document.getElementById("description")

    const lead = a.value
    const userNm = b.value
    const phNo = c.value
    const addr = d.value
    const com = e.value
    const source = f.value
    const email = g.value
    const des = h.value

    console.log(lead, userNm, phNo, addr, com, source, email, des)

    setLoader(<Loader />)

    await NewCrm_backend.addUser(lead, userNm, phNo, addr, com, source, email, des)
    nav("/dashboard")
  }

  return (
    <>
      <div className={cl.container}>
        <Navbar />
        {loader}
        <div className={cl.heading}>Create Lead</div>
        <div className={cl.wrapper}>
          <div className={cl.one}>
            Full Name
            <input className={cl.custom} id="leadOwner" type="text" />
          </div>
          <div className={cl.two}>
            Lead Owner
            <input className={cl.custom} id="fullName" type="text" />
          </div>
          <div className={cl.three}>
            Address
            <input className={cl.custom} id="phNo" type="text" />
          </div>
          <div className={cl.four}>
          Phone No
            <input className={cl.custom} id="address" type="text" />
          </div>
          <div className={cl.five}>
            Company
            <input className={cl.custom} id="company" type="text" />
          </div>
          <div className={cl.six}>
            Lead Source
            <select id="leadSource">
              <option value="">Choose Lead Source</option>
              {/* <!--We want people not be able to choose it so no value--> */}
              <option value="advertisement">Advertisement</option>
              <option value="cold-call">Cold Call</option>
              <option value="emp-ref">Employee Referral</option>
              <option value="trade-show">Trade Show</option>
              <option value="seminar-partner">Seminar Partner</option>
              <option value="partner">Partner</option>
              <option value="public-relations">Public Relations</option>
            </select>
          </div>
          <div className={cl.seven}>
            Email
            <input className={cl.custom} id="email" type="text" />
          </div>
          <div className={cl.eight}>
            Description
            <input className={cl.custom} id="description" type="text" />
          </div>
          <div className={cl.btns}>
            <Link to="/dashboard">
              <div className={cl.nine}>
                <button className={cl.cancel}>Cancel</button>
              </div>
            </Link>
            <div className={cl.ten}>
              <button onClick={onSave} className={cl.save}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { CreateLead }
