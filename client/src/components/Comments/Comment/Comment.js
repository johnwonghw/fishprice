import React from 'react';

const comment = (props) => {

  return (
    <div className="comment">
      <div className="comment-header">
        <p className="comment-person-name">
          {props.name} 
          <p className="comment-person-info">
            <span>{props.location}</span>
            <span>{props.phoneNumber}</span>
          </p>
        </p>
        <div className="sold-for">
          <div className="extra-info">
            <p>{props.species}</p>
            <p>sold for</p>
          </div>
          <p className="sold-price">${props.soldPrice}/lb</p>
          <p>by {props.buyer ? props.buyer : 'anonymous'}</p>
        </div>
      </div>
      <div className="comment-body">
        <p>{props.comment}</p>
      </div>
    </div>
  )
}

export default comment;