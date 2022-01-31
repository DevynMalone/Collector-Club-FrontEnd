import Collector from "./Collector";
import axios from "axios";
import React, { Component } from "react";
const { REACT_APP_SERVER_URL } = process.env;

class CollectorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${REACT_APP_SERVER_URL}/users/info`)
      .then((response) => {
        console.log(response.data.user);
        this.setState({
          data: response.data.user, //===> Where API data is actually stored
        });
      })
      .catch((error) => {
        console.log("ERROR hitting api", error);
      });
  }

  displayCollectors() {
    const displayCollector = this.state.data.map((user, index) => {
        console.log(user)
      return (
        <Collector key={index}  profilePic={user.profilePic} username={user.username} about={user.about} />
      )
    });
    return displayCollector;
    
  }

  render() {
    return (
      <div>
        <h2>MONGODB TEST</h2>
        <p>TESTING.....</p>
        {this.displayCollectors()}
      </div>
    );
  }
}


export default CollectorContainer
