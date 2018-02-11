import React, { Component } from 'react';
import Comment from './Comment/Comment';

class Comments extends Component {

  

<<<<<<< HEAD
  //  comments = [
  //    {
  //      name: 'Vinny',
  //      location: 'Hope, BC',
  //      contact: '(604) 555-555',
  //      comment: "Heading up to whistler rent west coast best coast sedins granville lions commercial vancouverites skytrain main street stanley park government developers stanley park stanley park heading up to whistler cambie vancouverites translink ramen main street arby's stanley park heading up to whistler vancouverites ramen vancouverites expensive west coast best coast new brunch spot on main street broadway I just need to be close to the mountains.",
  //      contact: 4.3,
  //      buyerName: 'MEC',
  //      species: 'Cod'
  //    },
  //    {
  //      name: 'Joe',
  //      location: 'Vancouver',
  //      contact: '(604) 555-555',
  //      comment: "Heading up to whistler rent west coast best coast sedins granville lions commercial vancouverites skytrain main street stanley park government developers stanley park stanley park heading up to whistler cambie vancouverites translink ramen main street arby's stanley park heading up to whistler.",
  //      contact: 4.3,
  //      buyerName: 'MEC',
  //      species: 'Cod'
  //    },
  //    {
  //      name: 'Joe',
  //      location: 'Vancouver',
  //      contact: '(604) 555-555',
  //      comment: "Heading up to whistler rent west coast best coast sedins granville lions commercial vancouverites skytrain main street stanley park government developers stanley park stanley park heading up to whistler cambie vancouverites translink ramen main street arby's stanley park heading up to whistler vancouverites ramen vancouverites expensive west coast best coast new brunch spot on main street broadway I just need to be close to the mountains.",
  //      contact: 4.3,
  //      buyerName: 'MEC',
  //      species: 'Cod'
  //    }
  //  ]
=======
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
>>>>>>> f2af0c033a5c2bb744da5afc8f7d31ebca52bda1

  render() {
    console.log(this.props);
    // console.log ('commentsList', this.props.commentsList)

    // const commentListObject = this.props.commentsList.map((comment) => {
    //   return (
    //     <Comment 
    //       name={comment.name}
    //       location={comment.location}
    //       phoneNumber={comment.phoneNumber}
    //       comment={comment.comment}
    //       soldPrice={comment.soldPrice}
    //       buyer={comment.buyer}
    //       species={comment.species}
    //     />
    //   )
    // });
    var commentsList = [];
    if (this.props.commentsList) {
      commentsList = this.props.commentsList
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <h2>What people are saying.</h2>
            {commentsList.map((comment) => {
              return (
                <Comment 
                  name={comment.name}
                  location={comment.location}
                  phoneNumber={comment.contact}
                  comment={comment.comment}
                  soldPrice={comment.soldPrice}
                  buyer={comment.buyerName}
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