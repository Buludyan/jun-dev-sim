import React from 'react';
import './Header.scss';
import money from '../../assets/money.png';
import energy from '../../assets/energy.png';
import happy from '../../assets/happy.png';
import leader from '../../assets/leader.png';

export const Header = () => {
    return (
        <div className="header">
            <div className="header__inner">
                <div className="header__stats">
                    <div className="header__stat">
                        <img className="header__icon" src={money}></img>
                        <div className="header__value">$20000</div>
                    </div>
                    <div
                        className="header__stat"
                        style={{boxSizing: 'border-box', padding: '0 15px'}}
                    >
                        <img className="header__icon" src={happy}></img>
                        <div className="header__value">20</div>
                    </div>
                    <div
                        className="header__stat"
                        style={{boxSizing: 'border-box', padding: '0 40px'}}
                    >
                        <img className="header__icon" src={leader}></img>
                        <div className="header__value">20</div>
                    </div>
                    <div className="header__stat">
                        <img className="header__icon" src={energy}></img>
                        <div className="header__value"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
