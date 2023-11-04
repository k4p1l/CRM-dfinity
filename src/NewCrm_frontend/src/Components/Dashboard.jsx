import React, { useState, useEffect } from "react";
import db from "../Styles/Dashboard.module.css";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Loader } from "./Loader";
import { NewCrm_backend } from "../../../declarations/NewCrm_backend";
const Dashboard = () => {
  const [loader, setLoader] = useState();
  var k = 0;
  // const [counter] = useCanister("counter")
  const [count, setCount] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("fetch");
    // setLoader(<Loader/>)
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await NewCrm_backend.getCustomers();
      setData(res);
      setLoader(null);
      //  console.log(data) ;
    } catch (e) {
      console.log(e);
    }
  };
  // window.addEventListener('load',async()=>
  //   await fetchData()
  //   )
  useEffect(() => {
    setLoader(<Loader />);
  }, []);
  function compare(a, b) {
    if (parseInt(a.id) < parseInt(b.id)) {
      return -1;
    } else if (parseInt(a.id) > parseInt(b.id)) {
      return 1;
    } else {
      return 0;
    }
  }
  const list = data.sort(compare);
  const table = list.map((a) => (
    <tr key={a.id}>
      <td className="id">{a.id}</td>
      <td className="lead-name">{a.leadOwner}</td>
      <td className="company">{a.company}</td>
      <td className="email">{a.email}</td>
      <td className="assigned-to">{a.name}</td>
      <td className="phone">{a.address}</td>
    </tr>
  ));

  return (
    <>
      {loader}
      <div className={db.container}>
        <Navbar />

        <div className={db.createbtn}>
          <Link to="/createlead">
            <button>Create Lead</button>
          </Link>
        </div>

        <div className={db.tablecontainer}>
          <table>
            <thead>
              <tr>
                <th>ID ⬇</th>
                <th>Lead Name ⬇</th>
                <th>Company ⬇</th>
                <th>Email ⬇</th>
                <th>Assigned To ⬇</th>
                <th>Phone ⬇</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
            {/* <!-- Add more customer data rows as needed --> */}
          </table>
        </div>
      </div>
    </>
  );
};

export { Dashboard };
