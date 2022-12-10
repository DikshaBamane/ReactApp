import React from 'react'
import Card from './Card'

function Service() {
  return (
    <div className="container mt-5">
        <div className="row">
            <h1 className="text-center"> Services</h1>
        </div>
        <div className="row">
            <div className="col-md-4">
                <Card title="web development" content="this is web development " />
            </div>
            <div className="col-md-4">
                <Card title="desktop development" content=" this is desktop development"/>
            </div>
            <div className="col-md-4">
                <Card title="mobile development" content=" this is mobile development" />
            </div>
        </div>
    </div>
  )
}

export default Service