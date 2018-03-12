import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={`${
              process.env.PUBLIC_URL
            }/images/scramn_clash_clear_background-white.png`}
            className="App-logo"
            alt="Scramn header logo"
          />
        </header>

        <div className="wrapper">
          <img
            src={`${
              process.env.PUBLIC_URL
            }/images/scramn-atlanta-music-hip-hop-rap.jpg`}
            className="mainImage"
          />
          <hr />
          <h2>
            <i className="fab fa-volume-up" /> Music
          </h2>
          <hr />
          <a
            href="https://play.google.com/store/music/album/Scramn_Otw_Home_feat_Fish_Scales_Jozepi_Starfire?id=Bnujj2plmigtkqcykz6a6fnpbee"
            target="_blank"
          >
            <img
              src={`${
                process.env.PUBLIC_URL
              }/images/scramn-on-the-way-home-otw-home-fishscales-nappy-roots.jpg`}
              className="mainImage"
            />
          </a>
          <h3>
            <a
              href="https://play.google.com/store/music/album/Scramn_Otw_Home_feat_Fish_Scales_Jozepi_Starfire?id=Bnujj2plmigtkqcykz6a6fnpbee"
              target="_blank"
            >
              New Single - On The Way Home / OTW Home
            </a>
          </h3>
          <h4>
            New hit single from Scramn - featured on Dj Jelly’s V-103 show!
          </h4>
          <p>
            Features include: A verse from Nappy Roots own Scales and Jozepi
            Starfire on the hook
          </p>
          <a href="https://fanlink.to/scramn-paydirt" target="_blank">
            <img
              src={`${
                process.env.PUBLIC_URL
              }/images/Scramn-Paydirt-newsouth.jpg`}
              className="mainImage"
            />
          </a>
          <h3 className="App-intro">
            <a href="https://fanlink.to/scramn-paydirt" target="_blank">
              New Album - Paydirt
            </a>
          </h3>
          <h4>
            Highly anticipated new album from Scramn, executive produced by
            Bubba Mathis (Sparxxx)!
          </h4>
          <p>
            Features include: Bubba Mathis (Sparxxx), Rico Wade, Nappy Roots (
            Fish Scales + Big V ), Jabba Jaw, Attitude, Bizarre, Jarren Benton,
            Bonecrusher, Sketch McGuinney & Grip Plyaz.
          </p>
          <p>
            Producers + DJ's: DJ Chris Crisis, Insane Beatz, Organized Noize,
            Vitallaz, Ribah on the Beat, Phivestarr, Mr. Enok, Skapezilla, Mike
            "BB Swing" Ownens & DJ KO.
          </p>
          <hr />
          <h2>
            <i className="fab fa-link" /> Links
          </h2>
          <hr />
          <p className="socialLinks">
            <a href="http://scramn.bigcartel.com/" target="_blank">
              <i className="fab fa-shopping-cart" /> Shop Merch
            </a>
            <a
              href="https://open.spotify.com/artist/4MNOkLcT6OFd5C5HyLEruo"
              target="_blank"
            >
              <i className="fab fa-spotify" /> Spotify
            </a>
            <a
              href="https://itunes.apple.com/us/artist/scramn/1103941090"
              target="_blank"
            >
              <i className="fab fa-apple" /> Apple
            </a>
            <a
              href="https://play.google.com/store/music/artist/Scramn?id=A7a4nguohd7tdk7fszy3ab7xqam"
              target="_blank"
            >
              <i className="fab fa-google" /> Google Play
            </a>
            <a
              href="https://www.amazon.com/s/ref=ntt_srch_drd_B01E8SAFEA?ie=UTF8&field-keywords=Scramn&index=digital-music&search-type=ss"
              target="_blank"
            >
              <i className="fab fa-amazon" /> Amazon
            </a>
            <a href="https://www.instagram.com/scramn13/" target="_blank">
              <i className="fab fa-instagram" /> Instagram
            </a>
            <a href="https://www.facebook.com/SCRAMN13/" target="_blank">
              <i className="fab fa-facebook-square" /> Facebook
            </a>
            <a href="https://www.snapchat.com/add/scramn" target="_blank">
              <i className="fab fa-snapchat-square" /> Snapchat
            </a>
            <a href="https://www.bandsintown.com/a/11156237?came_from=114">
              <img
                src="http://corp.bandsintown.com/assets/media-library/bandsintown-logo-black.png"
                className="socialLinkLogos"
                target="_blank"
              />
            </a>
            <a href="http://tidal.com/artist/7741062">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/Antonio_Jackson_Tidal_Logo.png"
                className="socialLinkLogos"
                target="_blank"
              />
            </a>
          </p>
          <hr />
          <h2>
            <i className="fab fa-camera-retro" /> Press
          </h2>
          <hr />
          <h3 className="App-intro">
            <a
              href="https://www.bizjournals.com/atlanta/news/2018/01/16/q-a-atlanta-rapper-scramn-talks-new-music-bubba.html"
              target="_blank"
            >
              Atlanta Business Cronicle
            </a>
          </h3>
          <h3 className="App-intro">
            <a
              href="https://soundcloud.com/nappyhourpodcast/ep-39-w-scramn"
              target="_blank"
            >
              Nappy Hour with Nappy Roots
            </a>
          </h3>
        </div>

        <footer className="App-footer">
          <img
            src={`${
              process.env.PUBLIC_URL
            }/images/scramn_clash_clear_background.png`}
            className="App-logo"
            alt="Scramn footer logo"
          />
        </footer>
      </div>
    );
  }
}

export default App;
