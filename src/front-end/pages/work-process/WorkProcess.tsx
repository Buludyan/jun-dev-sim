import React from 'react';
import {CharWindow} from '../../components/charWindow/CharWindow';
import {TaskWindow} from '../../components/taskWindow/TaskWindow';
import './WorkProcess.scss';

export const WorkProcess = () => {
  return (
    <div className="work">
      <div className="work__inner">
        <TaskWindow />
        <CharWindow />
      </div>
    </div>
  );
};
