import React from 'react';
import ReactDOM from 'react-dom/client';
import {WorkProcess} from './front-end/pages/work-process/WorkProcess';

const Index = () => {
  return (
    <div style={{backgroundColor: 'black'}}>
      <WorkProcess />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<Index />);
