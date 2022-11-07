import React from 'react';
import './TaskWindow.scss';
import {randomProblem, initLanguage} from '../../../back-end/language/api';

export const TaskWindow = () => {
    initLanguage();
    const problem = randomProblem(3000);
    return (
        <div className="taskWindow">
            <div className="taskWindow__inner">
                <div className="taskWindow__console">
                    <p>{problem.description()}</p>
                </div>
                <div className="taskWindow__description"></div>
            </div>
        </div>
    );
};
