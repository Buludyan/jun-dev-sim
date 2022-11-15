import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.scss';
import {Header} from './front-end/components/header/Header';
import {WorkProcess} from './front-end/pages/work-process/WorkProcess';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__inner">
        <WorkProcess />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
