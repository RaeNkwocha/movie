import React from "react";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

import "./movie css/mobile.css";

const Mobile = () => {
  return (
    <>
      <section className="mobile-grid">
        <div className="mobile-textholder">
          <div>
            <h2>Avaliable on all devices</h2>
          </div>
          <div>
            <h5>
              Movie apps such as Showbox are very easy to use. You do not have
              to be an expert to find the movie app, download and use it. The
              app is compatible with your Smartphone. If you are not tech savvy,
              you will still enjoy using these apps on your tablet or
              smartphone.
            </h5>
            <br />
            <h5>
              raenMoviesapp is avaliable on all mobile devices. It's only a
              click away visit our website so you can stay tuned as new movies
              and tv shows are released
            </h5>
          </div>
        </div>
        <Zoom top>
          <img
            src="https://wordpress.iqonic.design/streamit_wp/wp-content/uploads/elementor/thumbs/09_one-click-demo-pb7gxeradrfjge0h5yw5kkymet7ef2lw62dfyvxavu.png"
            alt=""
            width="100%"
          ></img>
        </Zoom>
      </section>
      <section>
        <div className="band">
          <h3>What are you waiting for?</h3>
        </div>
        <Bounce top>
          <img
            src="https://wordpress.iqonic.design/streamit_wp/wp-content/uploads/2021/08/background-2banner.png"
            alt=""
            width="100%"
          ></img>
        </Bounce>

        <div className="last">
          <button>See more</button>
        </div>
      </section>
    </>
  );
};

export default Mobile;
