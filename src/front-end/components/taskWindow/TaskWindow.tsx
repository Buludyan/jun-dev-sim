import React, {useCallback, useEffect, useState, FC} from 'react';
import {useActions} from '../../hooks/actions';
import './TaskWindow.scss';

interface ITaskWindow {
  description: string;
  code: string;
}

export const TaskWindow: FC<ITaskWindow> = ({description, code}) => {
  const [solution, setSolution] = useState('');
  const {setActive} = useActions();

  const onEnterHandler = useCallback(() => {
    console.log(code.split('\n'), solution.split('\n'));
    const processedCode = code.split('\n');
    const processedSolution = removeSpaces(solution.split('\n'));

    for (let i = 0; i < processedCode.length; ++i) {
      if (processedCode[i] !== processedSolution[i]) {
        console.log('Wrong solution!');
        return;
      }
    }

    console.log('Correct solution!');
  }, [solution]);

  const removeSpaces = (array: string[]) => {
    const processedArray = array.map(str =>
      str
        .split(' ')
        .filter(str => str !== '')
        .join(' ')
    );
    return processedArray;
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        onEnterHandler();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [onEnterHandler]);

  return (
    <div className="taskWindow">
      <div className="taskWindow__inner">
        <div className="taskWindow__console">
          {/*<p>{JSON.stringify(problem)}</p>*/}
          <p className="taskWindow__problem">{description}</p>
          <p className="taskWindow__problem">{code}</p>
        </div>
        <div className="taskWindow__cl">
          <textarea
            value={solution}
            cols={40}
            rows={8}
            className="taskWindow__cl-text"
            onChange={e => setSolution(e.target.value)}
          ></textarea>
          <div className="taskWindow__cl-btns">
            <button className="taskWindow__cl-btn" onClick={() => setActive()}>
              ?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
