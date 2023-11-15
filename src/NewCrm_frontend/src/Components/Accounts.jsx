import { useCanister } from "@connect2ic/react";
import React, { useState, useEffect } from "react";
import t from "../Styles/Accounts.module.css";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";
import { Navbar } from "./Navbar";
import { NewCrm_backend } from "../../../declarations/NewCrm_backend";
const Accounts = () => {
  const [loader, setLoader] = useState(null);

  // const [counter] = useCanister("counter")
  // const [count, setCount] = useState()
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("fetch");
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await NewCrm_backend.getAccounts();
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
      <td className="lead-name">{a.accountName}</td>
      <td className="company">{a.service}</td>
      <td className="email">
        <a href={a.site} target="_blank" rel="noopener noreferrer">
          {a.site}
        </a>
      </td>
      <td className="phone">{a.phNo}</td>
    </tr>
  ));
  return (
    <>
      {loader}
      <div className={t.container}>
        <Navbar />

        <div className={t.createbtn}>
          <Link to="/createAccounts">
            <button>Create Account</button>
          </Link>
        </div>

        <div className={t.tablecontainer}>
          <table>
            <thead>
              <tr>
                <th>ID ⬇</th>
                <th>Account Name ⬇</th>
                <th>Service ⬇</th>
                <th>Account Site ⬇</th>
                <th>Phone No ⬇</th>
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

export { Accounts };
