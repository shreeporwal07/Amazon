import React from "react";
import "./Prime.css";
import PHead from "./PHead";
import Slider1 from "./Slider1";
function Prime() {
  return (
    <div className="prime">
      <PHead />
      <Slider1 />
      <br></br>
      <div className="div1">
        <div className="text1">
          <div className="welcome">
            <h1>Welcome to Prime video</h1>
            <br />
            <p>
              Watch the latest movies, TV shows, and award-
              <br />
              winning Amazon Originals
            </p>
            <br />
            <button className="sib">Sign in to join Prime</button>
          </div>
        </div>
      </div>
      <div className="div2">
        <div className="text2">
          <div className="rental">
            <h1>
              Movie rentals on Prime <br />
              <br /> Video
            </h1>
            <br />
            <p>
              Early Acess to new movies, before digital
              <br />
              subscription
            </p>
            <br />
            <button className="sib2">Rent now</button>
          </div>
        </div>
      </div>
      <div className="div3"></div>
      <div className="div4">
        <div className="text2">
          <div className="fs">
            <h1>Even better with Fire TV Stick</h1>
            <p>
              The biggest movies and TV shows are always better on a big screen.
              <br /> Simply plug in your Amazon Fire TV Stick and stream on any
              HDTV.
              <br /> Press the voice button on the remote and say the name of
              the title
              <br /> you want to watch to find it in seconds.
            </p>
            <br />
            <button className="sib2">Get Started</button>
          </div>
        </div>
      </div>
      <div className="end">
        <img
          className="primelogo"
          src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"
        />
        <p><br/><br/><br/>© 1996-2023, Amazon.com, Inc. or its affiliates<br/>.</p>
      </div>
    </div>
  );
}

export default Prime;
