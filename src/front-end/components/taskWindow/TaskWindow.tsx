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
                    <p className="taskWindow__problem">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of de
                        Finibus Bonorum et Malorum (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, Lorem
                        ipsum dolor sit amet.., comes from a line in section
                        1.10.32. To add hyphens when words are broken, use the
                        CSS hyphens property. Using a value of auto, the browser
                        is free to automatically break words at appropriate
                        hyphenation points, following whatever rules it chooses.
                        To have some control over the process, use a value of
                        manual, then insert a hard or soft break character into
                        the string. A hard break (‐) will always break, even if
                        it is not necessary to do so. A soft break only breaks
                        if breaking is needed.
                    </p>
                    {/* <p>{problem.description()}</p> */}
                </div>
                <div className="taskWindow__description"></div>
            </div>
        </div>
    );
};
