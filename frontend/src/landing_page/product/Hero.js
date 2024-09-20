import React from "react";

const Hero = () => {
  return (
    <div className="border-bottom">
      <div
        style={{ marginTop: "175px", marginBottom: "100px" }}
        className="container"
      >
        <div className="row">
          <div className="col-12 text-center mx-auto">
            <h1 style={{fontSize:'45px'}} className="mb-3">Technology</h1>
            <h4 className="mb-4">Sleek, modern, and intuitive trading platforms</h4>
            <p>
              Check out our <a style={{color:'#007bff', textDecoration:'none'}} href="#">investment offerings</a>
              <i style={{marginLeft:'10px'}} class="fa-solid fa-arrow-right"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
