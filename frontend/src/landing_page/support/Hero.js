import React from 'react'

const Hero = () => {
  return (
    <div style={{ backgroundColor: '#387ED1' }}>
      <div
        style={{ marginTop: '75px', paddingLeft: '65px' }}
        className="container py-5"
      >
        <div className="d-flex justify-content-between text-white mb-5">
          <h5>Support Portal</h5>
          <h5>
            <a
              style={{ color: 'white', textUnderlineOffset: '0.4em' }}
              href="#"
            >
              Track Tickets
            </a>
          </h5>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 style={{ color: 'white' }} className="mb-4">
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input
              style={{
                width: '100%',
                height: '60px',
                padding: '25px',
                outline: 'none',
              }}
              className="mb-3"
              type="text"
              placeholder="Eg: how do i activate F&O"
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <a
                style={{
                  color: '#ffffff',
                  fontSize: '18px',
                  textUnderlineOffset: '0.4em',
                }}
                href="#"
              >
                Track account opening
              </a>
              <a
                style={{
                  color: '#ffffff',
                  fontSize: '18px',
                  textUnderlineOffset: '0.4em',
                }}
                href="#"
              >
                {' '}
                Track segment activation
              </a>
              <a
                style={{
                  color: '#ffffff',
                  fontSize: '18px',
                  textUnderlineOffset: '0.4em',
                }}
                href="#"
              >
                {' '}
                Intraday margins
              </a>
              <a
                style={{
                  color: '#ffffff',
                  fontSize: '18px',
                  textUnderlineOffset: '0.4em',
                }}
                href="#"
              >
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-1"></div>
          <div
            style={{ flexDirection: 'column', color: 'white' }}
            className="col-5 d-flex justify-content-center px-5"
          >
            <h4 className="mb-4">Featured</h4>
            <ol>
              <li className="mb-3">
                <a
                  style={{ color: 'white', textUnderlineOffset: '0.4em' }}
                  href="#"
                >
                  Surveillance measure on scrips - September 2024
                </a>
              </li>
              <li>
                <a
                  style={{ color: 'white', textUnderlineOffset: '0.4em' }}
                  href="#"
                >
                  Rights Entitlements listing in September 2024
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero