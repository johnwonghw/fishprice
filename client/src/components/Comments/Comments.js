import React, { Component } from 'react';
import Comment from './Comment/Comment';

class Comments extends Component {


   comments = [
     {
       name: 'Jeff Ross',
       location: 'Norton Sound, BC',
       phoneNumber: '(604) 555-555',
       comment: "On Friday I sold about 200 lbs worth of Sockeye salmon to Richard's Eatery in Nome, Alaska. They gave me a decent price and I would do business with them again.",
       soldPrice: 0.75,
       buyer: "Richard's Eatery",
       species: 'Sockeye'
     },
     {
       name: 'Jennifer Hope',
       location: 'Kodiak',
       phoneNumber: '(604) 555-555',
       comment: "Sold 50 lbs of chum on Wednesday to the hotel. Guy tried to offer me 27 cents per pound and I laughed in his face. They ended up giving me 35 cents a pound but I won't be doing business with them again any time soon.",
       soldPrice: 4.3,
       buyer: 'MEC',
       species: 'Cod'
     },
     {
       name: 'Tim Treadwell',
       location: 'Alaska Peninsula',
       phoneNumber: '(604) 555-555',
       comment: "Caught a bunch of Coho the other day but couldn't get anything above $0.25 a pound so I'm freezing it and eating it myself lol.",
       soldPrice: 0.25,
       buyer: 'My Belly',
       species: 'Coho'
     }
   ];

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <h2>What people are saying.</h2>
            {this.comments.map((comment) => {
              return (
                <Comment 
                  name={comment.name}
                  location={comment.location}
                  phoneNumber={comment.phoneNumber}
                  comment={comment.comment}
                  soldPrice={comment.soldPrice}
                  buyer={comment.buyer}
                  species={comment.species}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Comments;