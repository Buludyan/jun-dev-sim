import React from 'react';
import './TaskWindow.scss';

export const TaskWindow = () => {
  return (
    <div className="taskWindow">
      <div className="taskWindow__inner">
        <div className="taskWindow__console"></div>
        <div className="taskWindow__description"></div>
      </div>
    </div>
  );
};
