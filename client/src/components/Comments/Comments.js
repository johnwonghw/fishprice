import React, { Component } from 'react';
import Comment from './Comment/Comment';

class Comments extends Component {

  

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