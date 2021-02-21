import React, { Component } from "react";
import Header from "../parts/Header";
import Card from "../parts/Card";
import Form from "../parts/Form";
import Jumbotrons from "../parts/Jumbroton";
import Community from "../parts/Comunity";
import Leaderboad from "../parts/LeaderBoad";
import Footer from "../parts/Footer";
import { Button, ListGroup } from "react-bootstrap";
import axios from "axios";
export default class LandingPage extends Component {
  state = {
    data: [],
    popular: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=cab1bfdcab9dc7c24e9132e4fb6c85f2&language=en-US&page=1`
      )
      .then((res) => {
        const data = res.data.results;
        this.setState({ data });
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=cab1bfdcab9dc7c24e9132e4fb6c85f2&language=en-US&page=1`
      )
      .then((res) => {
        const popular = res.data.results;
        this.setState({ popular });
      });
  }
  render() {
    const movies = this.state;

    return (
      <>
        <Header></Header>
        <Jumbotrons></Jumbotrons>
        <div className="container">
          <div>
            <h3>Now Playing</h3>
          </div>
          <div class="scrolling-wrapper row flex-row flex-nowrap  pb-1">
            <Card data={movies.data}></Card>
          </div>
          <div>
            <h3>Popular</h3>
          </div>
          <div class="scrolling-wrapper row flex-row flex-nowrap  pb-1">
            <Card data={movies.popular}></Card>
          </div>
          <Community></Community>
          <div>
            <h3>Leaderboad</h3>
          </div>
          <Leaderboad></Leaderboad>
        </div>
        <Footer></Footer>
      </>
    );
  }
}
