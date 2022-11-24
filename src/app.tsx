import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './app.scss';
import {EventManager} from './front-end/components/event-manager/EventManager';
import {Header} from './front-end/components/header/Header';
import {LeftHalf} from './front-end/pages/left-half/LeftHalf';
import {RightHalf} from './front-end/pages/right-half/RightHalf';
import {store} from './front-end/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="app__inner">
          {/* <EventManager /> */}
          <LeftHalf />
          <RightHalf />
        </div>
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
