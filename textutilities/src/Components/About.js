import React from 'react'


export default function AboutUs(props) {

 let myStyle = {
  color: props.Mode === 'dark'?'white':'#042743',
  backgroundColor: props.Mode ==='dark'?'rgb(36 74 104)':'white'
}

  return (
    <div>
     <div className="card mb-3 container my-5" style= {myStyle}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="TextUtility.jpg" className="img-fluid rounded-start" alt="About"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">About TextUtility</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text">Get in touch with us</p>
        <p className="card-text"><small><i className="bi bi-envelope"></i>textutils@yahoo.com</small></p>
        <p className="card-text"><small>1234567890</small></p>

      </div>
    </div>
  </div>
</div>   
    </div>
  )
}
