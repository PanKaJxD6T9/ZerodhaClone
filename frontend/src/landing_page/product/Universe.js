import React from "react";

const Universe = () => {
  return (
    <div>
      <h4 style={{marginBottom:'150px', marginTop:'100px'}} className="text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h4>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mx-auto">
            <h1 className="mb-4">The Zerodha Universe</h1>
            <p className="mb-5">
              Extend your trading and investment experience even further with
              our partner platforms
            </p>
          </div>
        </div>
        <div
          style={{ marginBottom: "30px", marginTop: "50px" }}
          className="row"
        >
          <div className="col-4 d-flex flex-column align-items-center text-center">
            <div className="d-flex flex-column align-items-center text-center mb-5">
              <img
                style={{ width: "50%" }}
                src="assets/zerodhaFundhouse.png"
                alt="Zerodha Fundhouse"
              />
              <p
                className="mt-4"
                style={{ fontSize: "14px", marginTop: "10px", width: "75%" }}
              >
                Our asset management venture <br /> that is creating simple and
                transparent index <br /> funds to help you save for your goals.
              </p>
            </div>
          </div>
          <div className="col-4 d-flex flex-column align-items-center text-center">
            <div className="d-flex flex-column align-items-center text-center mb-5">
              <img
                style={{ width: "100%" }}
                src="assets/sensibullLogo.svg"
                alt="Zerodha Fundhouse"
              />
              <p
                className="mt-4"
                style={{ fontSize: "14px", marginTop: "10px", width: "100%" }}
              >
                Our asset management venture <br /> that is creating simple and
                transparent index <br /> funds to help you save for your goals.
              </p>
            </div>
          </div>
          <div className="col-4 d-flex flex-column align-items-center text-center">
            <div className="d-flex flex-column align-items-center text-center mb-5">
              <img
                style={{ width: "50%" }}
                src="assets/tijori.svg"
                alt="Zerodha Fundhouse"
              />
              <p
                className="mt-4"
                style={{ fontSize: "14px", marginTop: "10px", width: "100%" }}
              >
                Our asset management venture <br /> that is creating simple and
                transparent index <br /> funds to help you save for your goals.
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "150px" }} className="row">
          <div className="col-4">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                style={{ width: "50%" }}
                src="assets/streakLogo.png"
                alt="Zerodha Fundhouse"
              />
              <p
                className="mt-4"
                style={{ fontSize: "14px", marginTop: "10px", width: "75%" }}
              >
                Systematic trading platform <br /> that allows you to create and
                backtest <br /> strategies without coding.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                style={{ width: "60%" }}
                src="assets/smallcaseLogo.png"
                alt="Zerodha Fundhouse"
              />
              <p
                className="mt-4"
                style={{ fontSize: "14px", marginTop: "10px", width: "100%" }}
              >
                Systematic trading platform <br /> that allows you to create and
                backtest <br /> strategies without coding.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                style={{ width: "40%" }}
                src="assets/dittoLogo.png"
                alt="Zerodha Fundhouse"
              />
              <p
                className="mt-4"
                style={{ fontSize: "14px", marginTop: "10px", width: "75%" }}
              >
                Systematic trading platform <br /> that allows you to create and
                backtest <br /> strategies without coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universe;
