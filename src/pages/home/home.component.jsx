import React from "react";
import { Link } from "react-router-dom";
import imgBg from "../../assits/bg.png";
import "./home.styles.scss";

const homePage = () => (
  <div className="home">
    <div className="home-container">
      <div className="home-wrapper">
        <div className="right-side">
          <img src={imgBg} alt="background" />
        </div>
        <div className="left-side">
          <div className="title">Awixstore</div>
          <div className="subtitle">
            <p>
              YOU'RE A GAMER,
              <br /> YOU LOVE GAMES,
              <br /> THIS IS THE RIGHT PLACE FOR <span>YOU!</span>
            </p>
          </div>
          <div className="games">
            <div className="game">
              <div className="game-name">APEX LEGENDS</div>
              <div className="icon">
                <img src="https://i.imgur.com/GOFU38K.png" alt="apex" />
              </div>
            </div>
            <div className="game">
              <div className="game-name">LEAGUE OF LEGENDS</div>
              <div className="icon">
                <img src="https://i.imgur.com/G5nTjb8.png" alt="apex" />
              </div>
            </div>
            <div className="game">
              <div className="game-name">PLAYERUNKNOWN'S BATTLEGROUNDS</div>
              <div className="icon">
                <img src="https://i.imgur.com/pemLRHP.png" alt="apex" />
              </div>
            </div>
            <div className="game">
              <div className="game-name">STEAM GAMES</div>
              <div className="icon">
                <img src="https://i.imgur.com/DOPXQKy.png" alt="apex" />
              </div>
            </div>
          </div>
          <div className="button">
            <Link to="/collections">
              <button>Discover More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default homePage;
