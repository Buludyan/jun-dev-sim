import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './app.scss';
import {Header} from './front-end/components/header/Header';
import {WorkProcess} from './front-end/pages/work-process/WorkProcess';
import {store} from './front-end/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="app__inner">
          <WorkProcess />
        </div>
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
