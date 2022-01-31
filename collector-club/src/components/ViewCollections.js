import Collection from "./Collection";
import axios from "axios";
import React, { Component } from "react";
const { REACT_APP_SERVER_URL } = process.env;



class CollectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get(`${REACT_APP_SERVER_URL}/users/info`)
      .then((response) => {
        console.log(response.data.user);
        this.setState({
          data: response.data.user//===> Where API data is actually stored
        })
      })
      .catch((error) => {
        console.log('ERROR hitting api', error)
      })
  }
  displayCollections() {
    const displayCollection = this.state.data.map((user, index) => {
        // console.log(user)
        console.log(user.collections)
        let collectionsList = user.collections

        let titleList = collectionsList.map((obj, index)=>{
            let titleArray = []
            // console.log(obj.title)
            titleArray.push(obj.title)
            return titleArray
        })
        let photoList = collectionsList.map((obj, index)=>{
          let photoArray = []
          photoArray.push(obj.photoUrl)
          return photoArray
        })
        console.log(titleList)
        console.log(photoList)
      return (
        <Collection key={index}  photoUrl={photoList} collections={titleList} profilePic={user.profilePic} username={user.username} about={user.about} category={user.category} photoUrl={user.photoUrl}/>
      )
    });
    return displayCollection;
    
  }


  render() {
    return (
      <div>
      <h1>MONGODB TEST</h1>
      {this.displayCollections()}

      </div>
    )
  }
}

export default CollectionContainer;