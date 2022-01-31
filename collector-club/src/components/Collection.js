import './Collection.css';
import React, { Component } from "react";


class Collection extends Component {
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
                        <a href='/view-collections'> VIEW </a> </span> </p>
                    <p className="subtitle is-6"></p>
                  </div>
                </div>
                <div className="content">
                  CONTENT
                  <div className="background-icon"><span className="icon-twitter"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>



    //      <div key={this.props.index}>

        
    // <div className="columns body-columns">
    //     <div className="column is-half is-offset-one-quarter">
    //         <div className="card">
    //             <div className="header">
    //                 <div className="media">
    //                     <div className="media-left">
    //                         <figure className="image is-48x48">
    //                             <img src={this.props.profilePic} alt="Placeholder image" />
    //                         </figure>
    //                     </div>
    //                     <div className="media-content">
    //                         <p className="title is-4">{this.props.collections}</p>
    //                         <p className="subtitle is-6">{this.props.username}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="card-image">
    //                 <figure className="image is-4by3">
    //                     <img src={this.props.profilePic} alt="Placeholder image" />
    //                 </figure>
    //             </div>
    //             <div className="card-content">
    //                 <div className="level is-mobile">
    //                     <div className="level-left">
    //                         <div className="level-item has-text-centered">
    //                             <a href="">
    //                                 <i className="material-icons">heart</i>
    //                             </a>
    //                         </div>
    //                         <div className="level-item has-text-centered">
    //                             <div>
    //                                 <a href="">
    //                                     <i className="material-icons">chat_bubble_outline</i>
    //                                 </a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className="content">
    //                     <p>
    //                         <strong>{this.props.about}</strong>
    //                     </p>
    //                     {this.props.category}
                        
    //                     <a href="#">Show Items</a>
                        
    //                     <br />
    //                     <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
    //                 </div>
    //             </div>
    //             <div className="card-footer">
    //                 <div className="columns is-mobile">
    //                     <div className="column is-11">
    //                         <div className="field">
    //                             <div className="control">
    //                                 <input className="input is-medium" type="text" placeholder="Add a comment . . ." />
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="column has-text-centered">
    //                         <button className="button">
    //                             <i className="material-icons">more_horiz</i>
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //         {/* <footer className="footer">
    //             <div className="container is-fluid">
    //                 <div className="content has-text-centered">
    //                     <p>
    //                         <strong>Bulma</strong> by
    //                         <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
    //                         <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
    //                         <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    //                     </p>
    //                 </div>
    //             </div>
    //         </footer> */}
    //     </div>
    // </div>
    // </div>
        )
    }
}

export default Collection;