import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PostCard from '../../containers/PostCard';
import Head from 'next/head';
import { LOAD_USER_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';

const UserPostWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
margin-bottom: 50px;
`

const User = () => {
    const { allPosts } = useSelector(state => state.post);
    const { me } = useSelector(state => state.user);

    return (
    
    <UserPostWrapper>
          <Head>
                <title>
                    {me && me.nickname}님의 글
                </title>
                <meta name="description" content={`${me && me.nickname}님의 게시글`} />
                <meta property="og:title" content={`${me && me.nickname}님의 게시글`} />
                <meta property="og:description" content={`${me && me.nickname}님의 게시글`} />
                {/* <meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebird.com/favicon.ico'} /> */}
                {/* <meta property="og:url" content={`http://localhost3000/post/${id}`} /> */}
                {/* <PostCard post={singlePost} /> */}
            </Head>
        <PostCard post={allPosts}/>
    </UserPostWrapper>
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
        type: LOAD_USER_POSTS_REQUEST,
        data: context.params.id,
    })
    // context.store.dispatch({
    //     type:,
    // });

    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });

    context.store.dispatch(END);
    console.log('getServerSideProps end');
    await context.store.sagaTask.toPromise();
    return { props: {} };
  });

export default User;