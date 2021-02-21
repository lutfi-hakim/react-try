import React from "react";
import "../App.scss";
import { Button, Jumbotron } from "react-bootstrap";
function Jumbroton() {
  return (
    <div className="container">
      <Jumbotron className="jumbotron text-white">
        <h1>Welcome.</h1>
        <h3>
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
        <div className="text-center py-2 px-2 my-3">
          <div className="col-xs-10 col-xs-offset-1">
            <form action="#" method="#" role="search">
              <div className="input-group">
                <input
                  className="form-control"
                  placeholder="cari sebuah film, serial tv, kru / aktor..."
                  name="srch-term"
                  id="ed-srch-term"
                  type="text"
                ></input>
                <div class="input-group-btn">
                  <button type="submit" id="searchbtn">
                    search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Jumbroton;
