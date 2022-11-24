import React, {useCallback, useEffect, useState, FC} from 'react';
import {createNewGameState} from '../../../../back-end/api';
import {useActions} from '../../../hooks/actions';
import './Task.scss';

interface ITask {
  description: string;
  code: string;
}

export const Task: FC<ITask> = ({description, code}) => {
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
    <div className="task">
      <div className="task__console">
        {/*<p>{JSON.stringify(problem)}</p>*/}
        <p className="task__problem">{description}</p>
        <p className="task__problem">{code}</p>
      </div>
      <div className="task__cl">
        <textarea
          value={solution}
          cols={40}
          rows={8}
          className="task__cl-text"
          onChange={e => setSolution(e.target.value)}
        ></textarea>
        <div className="task__cl-btns">
          <button className="task__cl-btn" onClick={() => setActive()}>
            ?
          </button>
          <button className="task__cl-btn" onClick={createNewGameState}>
            R
          </button>
        </div>
      </div>
    </div>
  );
};
