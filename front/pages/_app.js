import React from 'react'
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import withReduxSaga from 'next-redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';

import AppLayout from '../components/AppLayout'
import reducer from '../reducers';
import rootSaga from '../sagas';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Blog = ({ Component }) => {
  return (
    <>
      <Head>
        <title>EASYHO BLOG</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.0/antd.css" />
        <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@900&family=Noto+Sans+KR:wght@500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  )
}

// Blog.getInitialProps = async (context) => {
//   // console.log('app context: ', context);
//   const { ctx, Component} = context;
//   let pageProps = {};

//   const state = ctx.store.getState();
//   const cookie = ctx.isServer ? ctx.req.headers.cookie : '';

//   if (ctx.isServer && cookie) {
//     axios.defaults.headers.cookie = cookie;
//   }

//   if (!state.user.me) {

//   }

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx) || {};
//   }

//   // if (!state.post.singlePost) {
//   //   ctx.store.dispatch({
//   //     type: LOAD_MAIN_POSTS_REQUEST,
//   //   })
//   // }

//   return { pageProps }
// }


export default wrapper.withRedux(Blog);