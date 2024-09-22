import React from 'react'

const Hero = () => {
  return (
    <div style={{marginBottom:'100px'}} className="container">
      <div className="row">
        <div className="col-12 text-center" style={{ marginTop: '175px' }}>
          <h1>Charges</h1>
          <p className="text-muted">List of all charges and taxes</p>
        </div>
        <div style={{ marginTop: '200px' }} className="row text-center">
          <div className="col-1"></div>
          <div className="col-3">
            <img
              style={{ width: '75%' }}
              src="assets/pricingEquity.svg"
              alt=""
            />
            <h2 className='mt-5 mb-4'>Free equity delivery</h2>
            <p className='text-muted'>
              All equity delivery investments (NSE, BSE),  are absolutely
              free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <img
              style={{ width: '75%' }}
              src="assets/intradayTrades.svg"
              alt=""
            />
            <h2 className='mt-5 mb-4'>Intraday and F&O trades</h2>
            <p className='text-muted'>
              Flat ₹ 20 or 0.03% (whichever is lower)  per executed order
              on intraday trades  across equity, currency, and commodity

              trades. Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <img
              style={{ width: '75%' }}
              src="assets/pricingEquity.svg"
              alt=""
            />
            <h2 className='mt-5 mb-4'>Free direct MF</h2>
            <p className='text-muted'>
              All direct mutual fund investments are absolutely free — ₹
              0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
