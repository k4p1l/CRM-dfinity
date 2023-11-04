import React, {useState} from "react"
import acc from "../Styles/CreateAccounts.module.css"
import { Link, useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar"
// import { useCanister } from "@connect2ic/react"
import {Loader} from "./Loader"
import { NewCrm_backend } from "../../../declarations/NewCrm_backend";

const CreateAccounts = () => {
  const [loader, setLoader] = useState(null)
  const nav = useNavigate()
  // const [counter] = useCanister("counter")

  const onSave = async()=>{
    
    let a = document.getElementById("accName");
    let b = document.getElementById("service");
    let c = document.getElementById("accSite");
    let d = document.getElementById("phNo");

    setLoader(<Loader/>)
    try{ 
    await NewCrm_backend.addAcc(a.value, d.value, b.value, c.value)
    setLoader(null)
    nav('/accounts')
    }catch(e){
      console.log(e) ;
    }
      
    
  }

  return (
    <>
    
    <div className={acc.container}>
      <Navbar />
      {loader}

      <div className={acc.heading}>Create Account</div>
      <div className={acc.wrapper}>
        <div className={acc.one}>
          Account Name
          <input className={acc.custom} id="accName" type="text" />
        </div>
        <div className={acc.two}>
          Service
          <input className={acc.custom} id="service" type="text" />
        </div>
        <div className={acc.six}>
          Account Site
          <input className={acc.custom} id="accSite" type="text" />
        </div>
        <div className={acc.five}>
          Phone No
          <input className={acc.custom} id="phNo" type="text" />
        </div>

        <div className={acc.btns}>
          <Link to="/accounts">
            <div className={acc.nine}>
              <button className={acc.cancel}>Cancel</button>
            </div>
          </Link>
          <div className={acc.ten}>
            <button onClick={onSave} className={acc.save}>Save</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export { CreateAccounts }
