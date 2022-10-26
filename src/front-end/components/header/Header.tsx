import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__stats">
          <div className="header__stat">
            <div className="header__icon"></div>
            <div className="header__value"></div>
          </div>
          <div className="header__stat"></div>
          <div className="header__stat"></div>
          <div className="header__stat"></div>
        </div>
      </div>
    </div>
  );
};
