import * as React from 'react';
import './style.css';

function Card() {
  return (
    <div className="card">
      <img
        id="thumbnail"
        src="https://www.opovo.com.br/_midias/jpg/2022/06/08/818x460/1_adao_negro_dwayne_johnson-18928759.jpg"
        alt="adao_negro"
      />
      <div className="channel-container">
        <div className="user">
          <img
            id="channel"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/330px-DC_Comics_logo.svg.png"
            alt="dc_films"
          />
        </div>
        <div className="description">
          <h5 id="title">Adão Negro - Teaser Trailer</h5>
          <p id="channelName">DC Films</p>
          <p id="visual">0 visualizações</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const cards = new Array(12).fill('');
  return (
    <div className="root">
      {cards.map(() => (
        <Card />
      ))}
    </div>
  );
}
