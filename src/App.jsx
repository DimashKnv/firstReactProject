import { useState } from "react";
import "./App.css";
import gamesLogo from "./assets/games_icon.png";
import shopLogo from "./assets/shop-icon.png";
import settingsLogo from "./assets/settings_icon.png";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main_content">
        <div className="left_content">
          <div className="nav_bar">
            <a href="">
              <img src={gamesLogo} alt="games" />
            </a>
            <a href="">
              <img src={shopLogo} alt="shop" />
            </a>
            <a href="">
              <img src={settingsLogo} alt="" />
            </a>
          </div>
          <div className="game_space">
            <div className="game_card">
              <img src="" alt="" />
              <h3>name Game</h3>
            </div>
          </div>
        </div>

        <div className="right_content">
          <h2>Comp_number</h2>
          <h1>Login info</h1>
          <div className="pack_info">
            <h2>pack</h2>
            <h2>time else</h2>
            <img src="" alt="computerclub_logo" />
          </div>

          <button className="logout_but">Logout</button>
        </div>
      </div>
    </>
  );
}

export default App;
