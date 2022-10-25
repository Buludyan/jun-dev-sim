import React from 'react';
import ReactDOM from 'react-dom';
import {writeFile} from './back';
import {WorkPage} from './WorkPage';

const Index = () => {
  return (
    <div>
      <p>Hello React!</p>
      <button onClick={e => writeFile()}>asdasd</button>;
      <WorkPage />
    </div>
  );
};
//

ReactDOM.render(<Index />, document.getElementById('app'));
