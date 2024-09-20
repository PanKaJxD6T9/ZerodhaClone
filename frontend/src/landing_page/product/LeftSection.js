import React from 'react'

const LeftSection = ({imageURL, title, description}) => {
  return (
    <div style={{marginBottom:'100px', marginTop:'50px'}} className='container'>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-1"></div>
        <div className="col-4">
          <img src={imageURL} alt={title} />
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <h2 className='mb-5'>{title}</h2>
          <p className='mb-4'style={{width:'55%'}}>{description}</p>
          <div className='d-flex gap-5 mb-4'>
            <a style={{textDecoration: 'none'}} href='#'>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
            <a style={{textDecoration: 'none'}} href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className='d-flex gap-5'>
            <img style={{width:'150px'}} src='assets/googlePlayBadge.svg' />
            <img style={{width:'150px'}} src='assets/appstoreBadge.svg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection