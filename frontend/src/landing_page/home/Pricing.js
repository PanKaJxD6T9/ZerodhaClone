import React from 'react'

const Pricing = () => {
  return (
    <div style={{marginTop:'150px'}} className='container'>
      <div className='row'>
        <div className='col-4'>
          <h1 className='mb-5'>Unbeatable pricing</h1>
          <p className='mb-3'>We don't believe in hidden fees. Our pricing is transparent and simple.</p>
          <a style={{textDecoration:'none',color:'#257DDF'}} href='#'>See Prices <i style={{fontSize:'14px', marginLeft:'10px'}} class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className='col-2'>
          
        </div>
        <div style={{display:'flex'}} className='col-6'>
          <div style={{width:'100%',height:'100%', display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'space-evenly'}} className='border text-center px-5'>
            <h1>₹0</h1>
            <p style={{fontSize:'16px', opacity:'0.8'}}>Free equity delivery and direct mutual funds</p>
          </div>
          <div style={{width:'100%',height:'100%', display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'space-evenly'}} className='border text-center px-5'>
            <h1>₹20</h1>
            <p style={{fontSize:'16px', opacity:'0.8'}}>Intraday & F&O</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing