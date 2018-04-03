import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers';
import { createStore } from 'redux';
import { CookiesProvider } from 'react-cookie';

const initialStore = {

}

const store = createStore(
    reducers,
    initialStore,
    window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render((

    <BrowserRouter>
            <Provider store={store} >
                <App />
            </Provider>


    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
