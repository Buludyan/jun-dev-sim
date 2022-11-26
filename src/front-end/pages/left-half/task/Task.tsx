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

  //TODO: fix additional enters in code from back;
  const interpreter = useCallback(() => {
    const dividedCode = code.split('\n');
    const dividedSolution = solution.split('\n').filter(row => row.length !== 0);

    if (!dividedSolution.length) {
      return;
    }

    console.log(dividedCode, dividedSolution);

    if (dividedCode.length !== dividedSolution.length) {
      console.log('wrong length');
      return false;
    }

    const codeParts = [];
    const solutionParts = [];

    for (let i = 0; i < dividedCode.length; ++i) {
      codeParts.push(splitter(code[i]));

      solutionParts.push(splitter(dividedSolution[i]));
    }

    for (let i = 0; i < codeParts.length; ++i) {
      for (let j = 0; j < codeParts[i].length; ++j) {
        if (codeParts[i][j] !== solutionParts[i][j]) {
          console.log('wrong answer');
          return false;
        }
      }
    }

    console.log('right');
    return true;
  }, [solution, code]);

  const splitter = (codeRow: string) => {
    let curStr = '';
    const result = [];
    for (let i = 0; i < codeRow.length; ++i) {
      if (codeRow[i] === ' ') {
        if (curStr.length) {
          result.push(curStr);
          curStr = '';
        }
        continue;
      }
      if (/^[A-Za-z0-9]*$/.test(codeRow[i])) {
        curStr += codeRow[i];
      } else {
        if (curStr.length) {
          result.push(curStr);
          curStr = '';
        }
        result.push(codeRow[i]);
      }
    }

    if (curStr.length) {
      result.push(curStr);
    }

    return result;
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault();
        interpreter();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [interpreter]);

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
