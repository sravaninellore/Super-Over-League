const element = (
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TeamCard = ({ image, name }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-logo" />
      <p className="team-name">{name}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="super-over-league">
      <h1 className="title">Super Over League</h1>
      <div className="team-container">
        <TeamCard
          image="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
          name="Royal Challengers Bangalore"
        />
        <TeamCard
          image="https://assets.ccbp.in/frontend/react-js/csk-img.png"
          name="Chennai Super Kings"
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

)

ReactDOM.render(element, document.getElementById('root'))
