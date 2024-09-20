import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5'>
        <div className='row'>
            <img src="assets/homeHero.png" alt='hero' className='mb-5'/>
            <h1 style={{fontSize:'45px'}} className='text-center mt-4 mb-3'>
                Invest in Everything
            </h1>
            <p style={{fontSize:'20px'}} className='text-center mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
            <button style={{backgroundColor: '#387ED1', padding:'10px', fontSize:'18px', fontWeight:'bold'}} className='col-2 btn btn-primary mx-auto mb-5'>SignUp For Free</button>
        </div>
    </div>
  )
}

export default Hero