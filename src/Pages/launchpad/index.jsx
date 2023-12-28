import React from 'react'
import Page1 from './page1'
import Page2 from './page2'

import { Routes, Route, Outlet } from 'react-router-dom';
const LaunchPadPages = () => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path='multi-assets-launchpad' element={<Page1 />} />
        <Route path='swissborg-series-a' element={<Page2 />} />

      </Routes>

    </>
    )
}

export default LaunchPadPages