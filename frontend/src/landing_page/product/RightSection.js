import React from 'react'

const RightSection = ({imageURL, title, description}) => {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center'>
      <div className="col-1"></div>
        <div className='col-5'>
          <h2 className='mb-5'>{title}</h2>
          <p className='mb-4'style={{width:'55%'}}>{description}</p>
          <a style={{textDecoration: 'none'}} href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        
        <div className='col-4'>
        <img src={imageURL} alt={title} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  )
}

export default RightSection