// import { useCanister } from "@connect2ic/react"
import React, { useState, useEffect } from "react"
import t from "../Styles/Tasks.module.css"
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Loader } from "./Loader"
import { NewCrm_backend } from "../../../declarations/NewCrm_backend";

const Tasks = () => {
  const [loader, setLoader] = useState()
  // const [counter] = useCanister("counter")
  // const [count, setCount] = useState()
  const [data, setData] = useState([])
  useEffect(() => {
    console.log("fetch")
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      const res = await NewCrm_backend.getTask()
      setData(res)
      setLoader(null)
      //  console.log(data) ;
    } catch (e) {
      console.log(e)
    }
  }

  
  // window.addEventListener('load',async()=>
  //   await fetchData()
  //   )
  useEffect(() => {
    // setLoader(null)
    setLoader(<Loader/>)
  }, [])
  function compare(a,b){
    if(parseInt(a.id)<parseInt(b.id)){
      return -1 ; 
    }else if(parseInt(a.id)>parseInt(b.id)){
      return 1 ; 
    }else{
      return 0 ; 
    }
  }
  const list = data.sort(compare)
  const table = list.map((a) => (
    <tr key={a.id}>
      <td className="id">{a.id}</td>
      <td className="lead-name">{a.task}</td>
      <td className="company">{a.taskOwner}</td>
      <td className="email">{a.dueDate}</td>
      <td className="assigned-to">{a.status}</td>
      <td className="phone">{a.priority}</td>
    </tr>
  ))
  return (
    <>
    {loader}
    <div className={t.container}>
      <Navbar />

      <div className={t.createbtn}>
        <Link to="/createtask">
          <button>Create Task</button>
        </Link>
      </div>

      <div className={t.tablecontainer}>
        <table>
          <thead>
            <tr>
              <th>ID ⬇</th>
              <th>Task ⬇</th>
              <th>Task Owner ⬇</th>
              <th>Due Date ⬇</th>
              <th>Status ⬇</th>
              <th>Priority ⬇</th>
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

export { Tasks }
