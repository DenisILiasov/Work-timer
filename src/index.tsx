import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store  from './store/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading = {null} persistor={persistor}>
        
      </PersistGate> */}
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
