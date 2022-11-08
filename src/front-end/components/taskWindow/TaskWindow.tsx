import React from 'react';
import './TaskWindow.scss';
import {randomProblem, initLanguage} from '../../../back-end/language/api';

export const TaskWindow = () => {
    initLanguage();
    const problem = randomProblem(50);
    return (
        <div className="taskWindow">
            <div className="taskWindow__inner">
                <div className="taskWindow__console">
                    <p>{JSON.stringify(problem)}</p>
                    {/* <p>{problem.description()}</p> */}
                </div>
                <div className="taskWindow__description"></div>
            </div>
        </div>
    );
};
