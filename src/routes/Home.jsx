import { Routes, Route } from "react-router-dom"
import React from "react"

import DirectoryMenu from "../components/directory/DirectoryMenu"
import Navigation from "../components/navigation/Navigation"

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<DirectoryMenu />} />
        </Route>
      </Routes>
    </>
  )
}

export default Home
