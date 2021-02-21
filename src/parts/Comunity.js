import React, { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";
export default class Community extends Component {
  render() {
    return (
      <Jumbotron className="jumbotron-community text-white">
        <div class="row">
          <div className="col-sm-6">
            <h1>Join Today</h1>
            <p>
              Get access to maintain your own custom personal lists, track what
              you've seen and search and filter for what to watch
              next—regardless if it's in theatres, on TV or available on popular
              streaming services like Netflix, Amazon Prime Video, and iflix.
            </p>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Enjoy TMDb ad free</li>
              <li>Maintain a personal watchlist</li>
              <li>
                Filter by your subscribed streaming services and find something
                to watch
              </li>
              <li>Log the movies and TV shows you've seen</li>
              <li>Build custom lists</li>
              <li>Contribute to and improve our database</li>
            </ul>
          </div>
        </div>
      </Jumbotron>
    );
  }
}
