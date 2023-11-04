// import { useCanister } from "@connect2ic/react"
import { NewCrm_backend } from "../../../declarations/NewCrm_backend";
import React, { useState, useEffect } from "react"
import m from "../Styles/Meetings.module.css"
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Loader } from "./Loader"

const Meetings = () => {
  const [loader, setLoader] = useState(null)
  // const [counter] = useCanister("counter")
  // const [count, setCount] = useState()
  const [data, setData] = useState([])
  useEffect(() => {
    console.log("fetch")
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      const res = await NewCrm_backend.getMeeting()
      setData(res)
      setLoader(null)
    //  console.lo(data)
    } catch (e) {
      console.log(e)
    }
  }
  // window.addEventListener('load',async()=>
  //   await fetchData()
  //   )
  useEffect(() => {
    setLoader(<Loader />)
  }, [])
  function compare(a, b) {
    if (parseInt(a.id) < parseInt(b.id)) {
      return -1
    } else if (parseInt(a.id) > parseInt(b.id)) {
      return 1
    } else {
      return 0
    }
  }
  const list = data.sort(compare)
  const table = list.map((a) => (
    <tr key={a.id}>
      <td className="id">{a.id}</td>
      <td className="lead-name">{a.title}</td>
      <td className="company">{a.from}</td>
      <td className="email">{a.to}</td>
      <td className="assigned-to">{a.relatedTo}</td>
    </tr>
  ))
  return (
    <>
      {loader}
      <div className={m.container}>
        <Navbar />

        <div className={m.createbtn}>
          <Link to="/createMeeting">
            <button>Create Meeting</button>
          </Link>
        </div>

        <div className={m.tablecontainer}>
          <table>
            <thead>
              <tr>
                <th>ID ⬇</th>
                <th>Meeting Title ⬇</th>
                <th>From ⬇</th>
                <th>To ⬇</th>
                <th>Related to ⬇</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
            {/* <!-- Add more customer data rows as needed --> */}
          </table>
        </div>
      </div>
    </>
  )
}

export { Meetings }
