import React from 'react'

function Contact() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
                <h1> Contact US</h1>
            </div>
            <div className="col-md-4">
                
            <form className="d-flex flex-column" >
                <input type="text" placeholder="enter your name" className="mt-2 form-control"/>
                <input type="email" placeholder="enter your email" className="mt-2 form-control" />
                <input type="submit" value="save" className="mt-2 form-control" />
            </form>
            </div>
            <div className="col-md-4"></div>
           
        </div>
    </div>
  )
}

export default Contact