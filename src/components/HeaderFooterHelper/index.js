import React from 'react'
import Header from '../Header/header'
import Footer from '../footer'
const HeadFoot = (props) => {
  // //console.log(props.data)
  return (
    <>
        <Header/>
        {props.children}
        {/* <br></br> */}
        <Footer></Footer>
    </>
  )
}

export default HeadFoot