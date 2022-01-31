import React, { Component } from "react";


class Collector extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            
            <div >
                <div className="container">
      <div className="section">
        <div className="columns">
        </div>
        <div id="app" className="row columns is-multiline">
          <div v-for="card in cardData"  className="column is-4">
            <div className="card large">
              <div className="card-image">
                <figure className="image is-16by9">
                  <img src={this.props.profilePic} alt="Image"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={this.props.profilePic} alt="Image"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4 no-padding">{this.props.username}</p>
                    <p>
                      <span className="title is-6">
                        <a href='/view-collections'> VIEW COLLECTIONS </a> </span> </p>
                    <p className="subtitle is-6">{this.props.about}</p>
                  </div>
                </div>
                <div className="content">
    
                  <div className="background-icon"><span className="icon-twitter"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
           
        )
    }
}


export default Collector;