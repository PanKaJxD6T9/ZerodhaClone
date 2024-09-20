import React from 'react'

const Education = () => {
  return (
    <div style={{marginTop:'150px'}} className='container'>
      <div className='row'>
        <div className='col-6'>
          <img style={{width:'70%'}} src="assets/education.svg" alt='education' />
        </div>
        <div className='col-6'>
          <h4 className='mb-5'>Free and open market education</h4>
          <p style={{width:'80%'}} className='mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a style={{textDecoration:'none',color:'#257DDF'}} href='#'>Varsity <i style={{fontSize:'14px'}} class="fa-solid fa-arrow-right"></i></a>
          <p style={{width:'80%'}} className='mb-4 mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a style={{textDecoration:'none',color:'#257DDF'}} href='#'>TradingQ&A <i style={{fontSize:'14px'}} class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education