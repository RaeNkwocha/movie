import React from "react";
import Flip from "react-reveal/Flip";
import "./movie css/header.css";

const Header = () => {
  return (
    <>
      <header>
        <main className="header-grid">
          <div className="grid-1">
            <h2>
              Stay connected and see the latest Movies and Tv shows when they
              come out
            </h2>
            <button>See more</button>
          </div>
          <div>
            <Flip top>
              <img
                width="100%"
                src="https://wordpress.iqonic.design/streamit_wp/wp-content/uploads/2021/08/background-2banner.png"
                alt=""
              ></img>
            </Flip>
          </div>
        </main>
      </header>
    </>
  );
};

export default Header;
