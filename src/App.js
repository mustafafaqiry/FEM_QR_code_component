import React from "react";
import Qrcode from "./images/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="card">
          <div className="qrcode">
            <img src={Qrcode} alt="QR code" />
          </div>
          <div>
            <h1 className="title">
              Improve your front-end skills by building projects
            </h1>
            <p className="info">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
      <footer>
        challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend
        </a>
        . Code by
        <a href="https://github.com/mustafafaqiry" target="_blank">
          Mustafa Faqiry
        </a>
        .
      </footer>
    </>
  );
}

export default App;
