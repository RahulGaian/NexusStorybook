import React from 'react'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'
import Page6 from './page6'
import Page7 from './page7'
import Page8 from './page8'
import Page9 from './page9'
import { Routes, Route, Outlet } from 'react-router-dom';const InvestPages = () => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path='buy-cryptos' element={<Page1 />} />
        <Route path='earn-cryptos' element={<Page2 />} />
        <Route path='diversify-with-thematics' element={<Page3 />} />
        <Route path='card-funding' element={<Page4 />} />
        <Route path='all-cryptos' element={<Page5 />} />
        <Route path='asset-analysis' element={<Page6 />} />
        <Route path='portfolio-visualizer' element={<Page7 />} />
        <Route path='auto-invest' element={<Page8 />} />
      </Routes>

    </>
    )
}

export default InvestPages