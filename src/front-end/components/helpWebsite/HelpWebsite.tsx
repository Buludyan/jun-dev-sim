import React, {FC} from 'react';
import './HelpWebsite.scss';
import queue from '../../../assets/queue.png';
import {useAppSelector} from '../../hooks/storeSelector';

export const HelpWebsite: FC = () => {
  const {isActive} = useAppSelector(state => state.helpWebsite);
  return (
    <div className={isActive ? 'opened' : 'closed'}>
      <div className="helpWebsite">
        <div className="helpWebsite__inner">
          <div className="helpWebsite__header">
            <img className="helpWebsite__logo" src={queue}></img>
            <p>QUEUE FLOW</p>
          </div>
          <div className="helpWebsite__search">
            <input type="text" />
            <button>Search...</button>
          </div>
        </div>
      </div>
    </div>
  );
};
