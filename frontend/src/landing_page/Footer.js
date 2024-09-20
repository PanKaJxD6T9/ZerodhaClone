import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:'#F5F5F5', paddingLeft:'150px'}} className='footerMain border-top py-5'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-3'>
            <img style={{width:'150px'}} className='mb-4' src='assets/logo.svg' alt='logo' />
            <p style={{fontSize:'13px'}} className='text-muted'>© 2010 - 2024, Zerodha Broking Ltd.</p>
            <p style={{fontSize:'13px'}} className='text-muted'>All rights reserved.</p>
            <div style={{display:'flex', gap:'20px'}} className='border-bottom py-3'>
              <i style={{fontSize:'25px'}} className="fa-brands fa-instagram"></i>
              <i style={{fontSize:'25px'}} className="fa-brands fa-twitter"></i>
              <i style={{fontSize:'25px'}} className="fa-brands fa-linkedin"></i>
            <i style={{fontSize:'25px'}} className="fa-brands fa-youtube"></i>
            </div>
            {/* <hr /> */}
            <div style={{display:'flex', gap:'20px'}} className='py-3'>
              <i style={{fontSize:'25px'}} className="fa-brands fa-whatsapp"></i>
              <i style={{fontSize:'25px'}} className="fa-brands fa-facebook"></i>
              <i style={{fontSize:'25px'}} className="fa-brands fa-telegram"></i>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'10px'}} className='col-3'>
            <h5>Company</h5>
            <a href='#'>About</a>
            <a href='#'>Products</a>
            <a href='#'>Pricing</a>
            <a href='#'>Referral programme</a>
            <a href='#'>Careers</a>
            <a href='#'>Zerodha.tech</a>
            <a href='#'>Press & media</a>
            <a href='#'>Zerodha Cares (CSR)</a>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'10px'}} className='col-3'>
            <h5>Support</h5>
            <a href='#'>Contact us</a>
            <a href='#'>Support portal</a>
            <a href='#'>Z-Connect blog</a>
            <a href='#'>List of charges</a>
            <a href='#'>Downloads & resources
            </a>
            <a href='#'>Videos</a>
            <a href='#'>Market overview</a>
            <a href='#'>How to file a complaint?  </a>
            <a href='#'>Status of your complaints</a>

          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'10px'}} className='col-3'>
            <h5>Account</h5>
            <a href='#'>Open an account</a>
            <a href='#'>Fund Transfer</a>
          </div>
        </div>
        <p style={{fontSize:'12px', color:'#666666'}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p style={{fontSize:'12px', color:'#666666'}}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p style={{fontSize:'12px', color:'#666666'}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p style={{fontSize:'12px', color:'#666666'}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p style={{fontSize:'12px', color:'#666666'}}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
        <p style={{fontSize:'12px', color:'#666666'}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      </div>
    </div>
  )
}

export default Footer