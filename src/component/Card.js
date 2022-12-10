import React from 'react'

function Card({title,content,img}) {
  return (
    <div className="mt-5">
       <div className="card" >
  
  <div className="card-body">
    <h3>{title} </h3>
    <p>{content}</p>
    <img src={img} className="card-img-top"/>

  </div>
</div> 
    </div>
  )
}

export default Card