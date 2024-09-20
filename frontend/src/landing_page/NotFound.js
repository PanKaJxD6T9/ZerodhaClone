import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const NotFound = () => {
  return (
    <div>
        <Navbar />
        <div style={{marginTop:'100px'}} className='container p-5'>
        <div className='row'>
            <h1 style={{fontSize:'45px'}} className='text-center mt-4 mb-3'>
                404, Page Not Found
            </h1>
            <p style={{fontSize:'20px'}} className='text-center mb-5 text-muted'>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default NotFound