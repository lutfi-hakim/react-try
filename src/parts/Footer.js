import React, { Component } from "react";
import { Button, Jumbotron, Container } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="footer">
          <nav>
            <div className="row">
              <div className="col-sm-4">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                  alt="The Movie Database (TMDb)"
                  width="130"
                  height="94"
                ></img>
              </div>

              <div className="col-sm-2">
                <h3>Dasar</h3>
                <ul>
                  <li>
                    <a href="/about">Tentang TMDb</a>
                  </li>
                  <li>
                    <a href="/about/staying-in-touch">Hubungi Kami</a>
                  </li>
                  <li>
                    <a href="/talk">Support Forums</a>
                  </li>
                  <li>
                    <a href="/documentation/api">API</a>
                  </li>
                  <li>
                    <a
                      href="https://status.themoviedb.org/"
                      target="_blank"
                      rel="noopener"
                    >
                      System Status
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h3>Sumbang</h3>
                <ul>
                  <li>
                    <a href="/bible">Contribution Bible</a>
                  </li>
                  <li>
                    <a href="/apps">Aplikasi Pihak ke-3</a>
                  </li>
                  <li>
                    <a href="/movie/new">Tambah Film Baru</a>
                  </li>
                  <li>
                    <a href="/tv/new">Tambah Serial TV Baru</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h3>Komunitas</h3>
                <ul>
                  <li>
                    <a href="/documentation/community/guidelines">Guidelines</a>
                  </li>
                  <li>
                    <a href="/discuss">Diskusi</a>
                  </li>
                  <li>
                    <a href="/leaderboard">Papan peringkat</a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/themoviedb"
                      target="_blank"
                      rel="noopener"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h3>Aturan</h3>
                <ul>
                  <li>
                    <a href="/documentation/website/terms-of-use">
                      Ketentuan Penggunaan
                    </a>
                  </li>
                  <li>
                    <a href="/documentation/api/terms-of-use">
                      API Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Kebijakan Privasi</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
