import React from 'react'
import CommunityPage1 from './page1';
import CommunityPage2 from './page2';
import CommunityPage3 from './page3';
// import CommunityPage4 from './page4';
import CommunityPage5 from './page5';
import CommunityPage6 from './page6';
import CommunityPage7 from './page7';


import { Routes, Route, Outlet } from 'react-router-dom';
const CommunityPages = () => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path='our-borg-token' element={<CommunityPage1 />} />
        <Route path='swissborg-heroes' element={<CommunityPage2 />} />
        <Route path='borg-token-metrics' element={<CommunityPage3 />} />
        {/* <Route path='earn-free-crypto-rewards' element={<CommunityPage4 />} /> */}
        <Route path='send-crypto-now' element={<CommunityPage5 />} />
        <Route path='lower-your-fees' element={<CommunityPage6 />} />
        <Route path='swag-shop' element={<CommunityPage7 />} />
      </Routes>

    </>
    )
}

export default CommunityPages;