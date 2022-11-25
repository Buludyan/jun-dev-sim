import React, {useEffect, useState} from 'react';
import './Header.scss';
import money from '../../../assets/money.png';
import energy from '../../../assets/energy.png';
import happy from '../../../assets/happy.png';
import leader from '../../../assets/leader.png';
import {Clock} from '../clock/Clock';
import calendar from '../../../assets/calendar.png';
import {
  loadGameState,
  weekDayNames,
  inGameMinutesPerRealMsecs,
  energyConsumptionPerMinute,
} from '../../../back-end/api';

export const Header = () => {
  const gameState = loadGameState();
  const energyBarLength = (56 * gameState.currentEnergy) / 100;
  const [state, setState] = useState<{length: number}>({length: energyBarLength});

  const setParameters = () => {
    setState({
      length: (70 * gameState.currentEnergy) / 100,
    });
  };

  useEffect(() => {
    let beginTime = Date.now();
    setInterval(() => {
      setParameters();
      const endTime = Date.now();
      const durationTime = endTime - beginTime;
      beginTime = endTime;

      const inGameMinutesPassed = durationTime * inGameMinutesPerRealMsecs;
      const totalEnergyConsumed = energyConsumptionPerMinute * inGameMinutesPassed;
      gameState.currentMoney = gameState.currentMoney + 1;
      gameState.currentEnergy <= 0 ? (gameState.currentEnergy = 0) : (gameState.currentEnergy -= totalEnergyConsumed);
    }, 15);
  }, []);

  const currentClock = gameState.currentClock;
  let clockStr = '';
  if (currentClock !== null) {
    const hours = `${Math.floor(currentClock.currentInGameMinutes / 60)}`.padStart(2, '0');
    const minutes = `${Math.floor(currentClock.currentInGameMinutes % 60)}`.padStart(2, '0');
    clockStr = `${hours}:${minutes}`;
  }
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__stats">
          <div className="header__stat">
            <img className="header__icon" src={calendar}></img>
            <div className="header__value">
              Day {gameState.currentDayNumber + 1}, {weekDayNames(gameState.currentDayNumber)}
            </div>
          </div>
          <div className="header__stat">
            <img className="header__icon" src={money}></img>
            <div className="header__value">${gameState.currentMoney}</div>
          </div>
          <div className="header__stat" style={{boxSizing: 'border-box', padding: '0 20px'}}>
            <img className="header__icon" src={happy}></img>
            <div className="header__value">{gameState.currentMood}</div>
          </div>
          <div className="header__stat" style={{boxSizing: 'border-box', padding: '0 20px'}}>
            <img className="header__icon" src={leader}></img>
            <div className="header__value">{gameState.currentMotivation}</div>
          </div>
          <div className="header__stat">
            <img className="header__icon" src={energy}></img>
            <div className="header__energy-value">
              <div
                className="header__energy-degree"
                style={{width: `${state.length}px`, backgroundColor: `hsl(${gameState.currentEnergy}, 100%, 50%)`}}
              />
              <div className="header__energy-degree-number">{Math.ceil(gameState.currentEnergy)}</div>
            </div>
          </div>
          {currentClock && (
            <div className="header__stat">
              <Clock />
              <div className="header__value">{clockStr}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
