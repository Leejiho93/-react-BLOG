import React from 'react'
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import AppLayout from '../components/AppLayout'
import reducer from '../reducers';
import rootSaga from '../sagas';

const Blog = ({ Component, store }) => {
    return(
        <Provider store={store}>
        <Head>
            <title>EASYHO Blog</title>
            {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.0/antd.css"/> */}
            {/* <script src="https://kit.fontawesome.com/d206a06276.js" crossorigin="anonymous"></script>  */}
        </Head>
        <AppLayout>
           <Component/>
        </AppLayout>
        </Provider>
    )
}

const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
        applyMiddleware(...middlewares),
        !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
      );
    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
};
  

export default withRedux(configureStore)(Blog);