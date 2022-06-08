import { Routes, Route } from "react-router-dom"
import React from "react"

import DirectoryMenu from "../components/directory/DirectoryMenu"

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<DirectoryMenu />}></Route>
      </Routes>
    </>
  )
}

export default Home
