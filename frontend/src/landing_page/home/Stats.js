import React from 'react'

const Stats = () => {
  return (
    <div style={{marginTop:'150px'}} className='container'>
      <div className='row'>
        <div className='col-6'>
          <h1 className='mb-5'>Trust with confidence</h1>
          <h3 className='mb-2'>Customer-first always</h3>
          <p style={{width:'70%',opacity:'0.8'}} className='mb-5'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          <h3 className='mb-2'>No spam or gimmicks</h3>
          <p style={{width:'70%',opacity:'0.8'}} className='mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          <h3 className='mb-2'>The Zerodha universe</h3>
          <p style={{width:'70%',opacity:'0.8'}} className='mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h3 className='mb-2'>Do better with money</h3>
          <p style={{width:'70%',opacity:'0.8'}} className='mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className='col-6'>
          <img style={{width:'100%'}} src="assets/ecosystem.png" alt='stats' />
          <div style={{display:'flex',justifyContent:'center',gap:'50px'}} className='mt-3'>
            <a style={{textDecoration:'none',color:'#257DDF'}} href='#'>Explore Our Products <i style={{fontSize:'14px'}} class="fa-solid fa-arrow-right"></i></a>
            <a style={{textDecoration:'none',color:'#257DDF'}} href='#'>Try Kite Demo <i style={{fontSize:'14px'}} class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        {/* <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{width:'60%'}} src="assets/pressLogos.png" alt='awards' className='mt-4 mb-5'/>
        </div> */}
      </div>
    </div>
  )
}

export default Stats