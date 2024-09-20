import React from 'react'

const OpenAccount = () => {
  return (
    <div style={{marginTop:'100px'}} className='container p-5'>
        <div className='row'>
            <h1 style={{fontSize:'45px'}} className='text-center mt-4 mb-3'>
                Open a Zerodha Account
            </h1>
            <p style={{fontSize:'20px'}} className='text-center mb-5 text-muted'>Modern platforms, more than 130+ order types, and the best research. All in one place.</p>
            <button style={{backgroundColor: '#387ED1', padding:'10px', fontSize:'18px', fontWeight:'bold'}} className='col-2 btn btn-primary mx-auto mb-5'>SignUp For Free</button>
        </div>
    </div>
  )
}

export default OpenAccount