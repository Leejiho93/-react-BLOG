import React, { useEffect } from 'react';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import PostCard from '../containers/PostCard';
import styled from 'styled-components';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

export const IndexWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`

const Home = () => {
    const dispatch = useDispatch();
    const { allPosts } = useSelector(state => state.post)

    // useEffect(() => {
    //     dispatch({
    //         type: LOAD_MAIN_POSTS_REQUEST,
    //     })
    // })
    return (
        <>
            <IndexWrapper>
                <PostCard post={allPosts} />
            </IndexWrapper>
        </>)
}

// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//     console.log('getServerSideProps start');
//     const cookie = context.req ? context.req.headers.cookie : '';
//     axios.defaults.headers.Cookie = '';
//     if (context.req && cookie) {
//         axios.defaults.headers.Cookie = cookie;
//     }
//     context.store.dispatch({
//         type: LOAD_MAIN_POSTS_REQUEST,
//     })
//     context.store.dispatch(END);
//     console.log('getServerSideProps end');
//     await context.store.sagaTask.toPromise();
// });

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    console.log('getServerSideProps start');
    // console.log(context.req.headers);
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_MAIN_POSTS_REQUEST,
    });

    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });

    context.store.dispatch(END);
    console.log('getServerSideProps end');
    await context.store.sagaTask.toPromise();
  });
  

export default Home;