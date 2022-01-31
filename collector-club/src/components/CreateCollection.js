//components
import './CreateCollections.css';
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from "../utils/setAuthToken";
const { REACT_APP_SERVER_URL } = process.env;

class CreateCollection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    handleTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    handleCategory(e) {
        this.setState({
            category: e.target.value,
        });
    }

    handleAbout(e) {
        this.setState({
            about: e.target.value,
        });
    }

    handlePhotoUrl(e) {
        this.setState({
            photoUrl: e.target.value,
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const collectionData = {
            title: this.state.title,
            category: this.state.category,
            about: this.state.about,
            photoUrl: this.state.photoUrl,
        }
        axios.post(`${REACT_APP_SERVER_URL}/users/collection`, collectionData)
            .then(response => {
                const { token } = response.data;
                // save token to localStorage
                localStorage.setItem('jwtToken', token);
                // set token to headers
                setAuthToken(token);
                // decode token to get the user data
                const decoded = jwt_decode(token);
                // set the current user
                this.props.nowCurrentUser(decoded); // funnction passed down as props.
            })

            .catch(error => {
                alert('Either email or password is incorrect. Please try again');
            });

        this.state.redirect = true;

    };




    render() {
        return (
            <div>
            <>
            
            <form onSubmit={this.handleSubmit.bind(this)} className="decor" className="body">
        <div className="form-left-decoration" />
        <div className="form-right-decoration" />
        <div className="circle" />
        <div className="form-inner" >
          <h1>Create New Collection</h1>
          <input  type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleTitle.bind(this)} required />
          <input  className="input is-medium" type="text" placeholder="Category" name="category" value={this.state.category} onChange={this.handleCategory.bind(this)} required />
          <input  className="input is-medium" type="text" placeholder="About" name="about" value={this.state.about} onChange={this.handleAbout.bind(this)} required />
          <input  className="input is-medium" type="text" placeholder="Photo Url" name="photoUrl" value={this.state.photoUrl} onChange={this.handlePhotoUrl.bind(this)} required />
          <button type="submit" 
          className="button is-block is-primary is-fullwidth is-medium" >Submit</button>
        </div>
      </form>
  






                {/* <section className="container">
                    <div className="columns is-multiline">
                        <div className="column is-8 is-offset-2 register">
                            <div className="columns">
                                <div className="column left">
                                    <h1 className="title is-1">Collector Club</h1>
                                    <h2 className="subtitle colored is-4">
                                        Create a New Collection!
                                    </h2>
                                    <p id="smallText">
                                        Text Goes Here
                                    </p>
                                    <img src="" alt="" />
                                </div>
                                <div className="column right has-text-centered">
                                    <h1 className="title is-4">Create a New Collection</h1>

                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Title"
                                                    name="title"
                                                    value={this.state.title}
                                                    onChange={this.handleTitle.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Category"
                                                    name="category"
                                                    value={this.state.category}
                                                    onChange={this.handleCategory.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="About"
                                                    name="about"
                                                    value={this.state.about}
                                                    onChange={this.handleAbout.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Photo Url"
                                                    name="photoUrl"
                                                    value={this.state.photoUrl}
                                                    onChange={this.handlePhotoUrl.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>


                                        <button type="submit" className="button is-block is-primary is-fullwidth is-medium">
                                            Submit
                                        </button>
                                        <br />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </>
            </div>
        )
    }
}



export default CreateCollection;