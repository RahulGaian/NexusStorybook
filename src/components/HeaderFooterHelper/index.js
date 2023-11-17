import React from 'react'
import Header from '../Header/header'
import Footer from '../footer'
const HeadFoot = (props) => {
  return (
    <>
        <Header/>
        {props.children}
        <Footer></Footer>
    </>
  )
}

export default HeadFoot