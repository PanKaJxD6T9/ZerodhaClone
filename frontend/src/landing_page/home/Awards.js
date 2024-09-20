import React from 'react'

const Awards = () => {
  return (
    <div style={{marginTop:'50px'}} className='container'>
        <div className='row'>
            <div className='col-6'>
                <img src="assets/largestBroker.svg" alt='awards' />
            </div>
            <div className='col-6'>
              <h1 className='mt-4'>Largest Stock Broker in India</h1>
              <p className='mt-4'>
                Grow your wealth with us. We provide you with the best investment options and the most advanced trading platforms.
              </p>
              <ul className='mt-4'>
                <div className='row'>
                  <div className='col-6'>
                    <li><p>Futures and Options</p></li>
                    <li><p>Commodity Trading</p></li>
                    <li><p>Currency Trading</p></li>
                  </div>
                  <div className='col-6'>
                    <li><p>Crypto Trading</p></li>
                    <li><p>Derivatives Trading</p></li>
                    <li><p>Mutual Funds</p></li>
                  </div>
                </div>
              </ul>
              <img style={{width:'100%'}} src="assets/pressLogos.png" alt='awards' className='mt-4 mb-5'/>
            </div>
        </div>

    </div>
  )
}

export default Awards