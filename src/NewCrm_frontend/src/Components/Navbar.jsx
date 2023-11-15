import React, { useState, useEffect } from "react"
import nb from "../Styles/Navbar.module.css"
import { Link } from "react-router-dom"
import cat from "../../assets/cat.png"
import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <header>
      <div className={nb.logo}>
        <img src={logo} />
        <h1 className={nb.heading}>CRM</h1>
      </div>

      <div className={nb.categories}>
        <div className={nb.category}>
          <Link to="/dashboard">
            <span className={nb.bruh}>Leads</span>
          </Link>
        </div>
        <div className={nb.category}>
          <Link to="/accounts">
            <span className={nb.bruh}>Accounts</span>
          </Link>
        </div>
        <div className={nb.category}>
          <Link to="/tasks">
            <span className={nb.bruh}>Tasks</span>
          </Link>
        </div>
        <div className={nb.category}>
          <Link to="/meetings">
            <span className={nb.bruh}>Meetings</span>
          </Link>
        </div>
      </div>

      <div className={nb.profile}>
        <img className={nb.pfp} src={cat}/>
      </div>
    </header>
  )
}

export { Navbar }
