import React from 'react'

export default function CardItem({card}) {
  return (
    <div>
    <div className="card">
      <img src={card.imgSrc} className="card-img-top" alt="card1" />
      <div className="overlay">{card.overlay}</div>

      <div className="card-body">
        <h5 className="card-title">{card.overlay}</h5>
        <p className="p-title">Multiple deals</p>
        <button className="btn-card">View Collection ></button>
      </div>
    </div>
    <div className="index">"</div>
    <div className="index2"></div>
  </div>
  )
}
