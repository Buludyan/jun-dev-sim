import React, {useEffect, useState} from 'react';
import {useActions} from '../../hooks/actions';
import './Clock.scss';

export const Clock = () => {
  const {setLunchTime} = useActions();
  const [state, setState] = useState<{minute: number; hour: number}>({minute: 1, hour: 0.83});

  const setClock = () => {
    // TODO: refine
    // TODO: move to config file
    const oneHourElapseTimeInSeconds = 15;
    const timeCoef = oneHourElapseTimeInSeconds * 100;
    setState({
      minute: (state.minute += 1 / timeCoef),
      hour: (state.hour += 1 / timeCoef / 12),
    });
  };

  useEffect(() => {
    setInterval(() => {
      if (state.hour > 1.083 && state.hour < 1.084) {
        setLunchTime(true);
      }
      if (state.hour > 1.166 && state.hour < 1.167) {
        setLunchTime(false);
      }
      setClock();
    }, 10);
  }, []);

  return (
    <div className="clock">
      <div className="hand hour" style={{transform: `translate(-50%) rotate(${state.hour * 360}deg)`}}></div>
      <div className="hand minute" style={{transform: `translate(-50%) rotate(${state.minute * 360}deg)`}}></div>

      <div className="number number1">
        <div>1</div>
      </div>
      <div className="number number2">
        <div>2</div>
      </div>
      <div className="number number3">
        <div>3</div>
      </div>
      <div className="number number4">
        <div>4</div>
      </div>
      <div className="number number5">
        <div>5</div>
      </div>
      <div className="number number6">
        <div>6</div>
      </div>
      <div className="number number7">
        <div>7</div>
      </div>
      <div className="number number8">
        <div>8</div>
      </div>
      <div className="number number9">
        <div>9</div>
      </div>
      <div className="number number10">
        <div>10</div>
      </div>
      <div className="number number11">
        <div>11</div>
      </div>
      <div className="number number12">
        <div>12</div>
      </div>
    </div>
  );
};
