import React, {useEffect, useState} from 'react';
import './Header.scss';
import money from '../../assets/money.png';
import energy from '../../assets/energy.png';
import happy from '../../assets/happy.png';
import leader from '../../assets/leader.png';
import {loadGameState, updateGameState} from '../../../back-end/api';

export const Header = () => {
  const [state, setState] = useState<{length: number; color: number}>({length: 56, color: 100});

  const setParameters = () => {
    setState({
      length: (state.length -= 0.0056),
      color: state.color <= 0 ? 0 : (state.color -= 0.01),
    });
  };

  const gameState = loadGameState();

  useEffect(() => {
    setInterval(() => {
      setParameters();
      // TODO: Question to Arman, is this OK?
      gameState.currentMoney = gameState.currentMoney + 1;
    }, 15);
  }, []);

  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__stats">
          <div className="header__stat">
            <img className="header__icon" src={money}></img>
            <div className="header__value">${gameState.currentMoney}</div>
          </div>
          <div className="header__stat" style={{boxSizing: 'border-box', padding: '0 15px'}}>
            <img className="header__icon" src={happy}></img>
            <div className="header__value">{gameState.currentMood}</div>
          </div>
          <div className="header__stat" style={{boxSizing: 'border-box', padding: '0 40px'}}>
            <img className="header__icon" src={leader}></img>
            <div className="header__value">{gameState.currentMotivation}</div>
          </div>
          <div className="header__stat">
            <img className="header__icon" src={energy}></img>
            <div className="header__energy-value">
              <div
                className="header__energy-degree"
                style={{width: `${state.length}px`, backgroundColor: `hsl(${state.color}, 100%, 50%)`}}
              />
              <div className="header__energy-degree-number">
                {(state.color + '').slice(0, (state.color + '').indexOf('.'))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
