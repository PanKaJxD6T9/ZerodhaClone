import React from "react";

const Team = () => {
  return (
    <div className="container mb-5">
      <h1 className="text-center mb-5">People</h1>
      <div style={{marginTop:'100px'}} className="row">
        <div style={{paddingRight:'0px'}} className="col-6 d-flex flex-column justify-content-end align-items-center">
          <img style={{width:'50%', borderRadius:'50%'}} src="assets/nithinKamath.jpg" alt="team1" />
          <p style={{fontSize:'20px'}} className="mt-4">Nithin Kamath</p>
          <p style={{fontSize:'15px'}} className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-6">
          <p style={{fontSize:'18px'}} className="mb-4">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p style={{fontSize:'18px'}} className="mb-4">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p style={{fontSize:'18px'}} className="mb-4">Playing basketball is his zen.</p>
          <p style={{fontSize:'18px'}} className="mb-4">Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
