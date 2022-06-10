import { Routes, Route } from "react-router-dom"
import React from "react"

import DirectoryMenu from "../components/directory/DirectoryMenu"
import TestComponent from "../components/tests/TestComponent"

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DirectoryMenu />}>
          <Route path="/test" element={<TestComponent />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default Home
