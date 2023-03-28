import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store  from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const container = document.getElementById('root');
const root = createRoot(container);

let persistor = persistStore(store);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {/* PersistGate loading prop can be null, or any react instance, e.g. loading={<Loading />} */}
                <App />
            </PersistGate>

        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
