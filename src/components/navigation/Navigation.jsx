import React from "react"
import { Outlet } from "react-router-dom"

const Navigation = () => {
  return (
    <>
      <h1>I am Navigation</h1>
      <Outlet />
    </>
  )
}

export default Navigation
