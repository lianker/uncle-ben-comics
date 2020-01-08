import React from 'react'
import './ComicDetail.css'

function ComicDetail({ id, description, imgUrl, price, title }) {
  return (
    <div className="comic-detail-container">
      <div className="detail-wrapper">
        <div
          className="comic-cover"
          style={{
            backgroundSize: '100% 100%',
            backgroundImage: 'url(' + imgUrl + ')'
          }}
        ></div>
        <div className="description-wrapper">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ComicDetail
