import React, { useEffect } from 'react';
import PostCard from '../containers/PostCard';
import PostForm from '../containers/PostForm';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import axios from 'axios';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

export const TechWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
` 

const Tech = () => {
    const { allPosts } = useSelector(state => state.post);
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({
    //         type: LOAD_MAIN_POSTS_REQUEST,
    //     })
    // }, [])

    return (
        <>
            <TechWrapper>
                { me 
                ?   <PostForm category="tech"/>
                :   null 
                }
                <PostCard post={ allPosts.filter(v => v.category  === 'tech')} />
            </TechWrapper>
        </>
    )
}

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

export default Tech;