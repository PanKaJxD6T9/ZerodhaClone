import React from 'react'

const Brokerage = () => {
  return (
    <div className="container mt-5 mb-5 border-top py-5">
      <div className="row">
        <div className="col-8">
          <h4 style={{ color: '#387ED1' }} className="text-center mb-5">
            Brokerage Calculator
          </h4>
          <ul className="text-muted">
            <li className="mb-4">
              Call & Trade and RMF auto-squareoff: Additional charges of 50rs +
              GST per order
            </li>
            <li className="mb-4">
              Digital Contract Notes will be sent via e-mail
            </li>
            <li className="mb-4">
              Physical Copies of Contract notes, if required, will be sent via
              post
            </li>
            <li className="mb-4">
              For NRI Accounts (non-PIS), additional charges of Rs. 100 + GST
              will be applicable for each order
            </li>
            <li className="mb-4">
              For NRI Accounts (PIS), additional charges of Rs. 200 + GST will
              be applicable for each order
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 style={{ color: '#387ED1' }}>List of Charges</h4>
        </div>
      </div>
    </div>
  )
}

export default Brokerage