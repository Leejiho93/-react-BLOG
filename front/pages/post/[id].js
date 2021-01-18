import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Router from 'next/router'
import PostCard from '../../containers/PostCard';
import PostImages from '../../components/PostImages';
import { LOAD_POST_REQUEST, LOAD_MAIN_POSTS_REQUEST, LOAD_COMMENTS_REQUEST, REMOVE_POST_REQUEST, REMOVE_COMMENT_REQUEST } from '../../reducers/post';
import { List, Comment, Card, Avatar, Button } from 'antd';
import Link from 'next/link';
import wrapper from '../../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';
import Head from 'next/head';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import CommentForm from '../../containers/CommentForm';
import moment from 'moment';
moment.locale('ko');


const PostWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
margin-bottom: 50px;
`

const Post = () => {
    const { removePost, singlePost, removeComment } = useSelector(state => state.post);
    const router = useRouter();
    const { id } = router.query;
    const userid = useSelector(state => state.user.me && state.user.me.id)
    const dispatch = useDispatch();

    useEffect(() => {
        if (removePost) {
            Router.push('/');
        }
    }, [removePost])

    useEffect(() => {
        if (removeComment) {
            dispatch({
                type: LOAD_POST_REQUEST,
                data: singlePost.id,
            })         
        }
    }, [removeComment])

    const removePostBtn = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: singlePost.id,
        })
    })

    const removeCommentBtn = useCallback(commentId => () => {
        // console.log('commentId', commentId);
        dispatch({
            type: REMOVE_COMMENT_REQUEST,
            data:{
                postId: singlePost.id,
                commentId: commentId,
            } 
        })
    })

    return (
        <PostWrapper>
            <Head>
                <title>
                    {singlePost && singlePost.User.nickname}님의 글
                </title>
                <meta name="description" content={singlePost && singlePost.content} />
                <meta property="og:title" content={singlePost && `${singlePost.User.nickname}님의 게시글`} />
                <meta property="og:description" content={singlePost && singlePost.content} />
                {/* <meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebird.com/favicon.ico'} /> */}
                {/* <meta property="og:url" content={`http://localhost3000/post/${id}`} /> */}
                {/* <PostCard post={singlePost} /> */}
            </Head>

            {
                userid && (singlePost && singlePost.UserId === userid)
                    ? (<Button onClick={removePostBtn}>삭제</Button>)
                    : null
            }

            <Card title={<p style={{ fontWeight: 'bold' }}>{singlePost && singlePost.title}</p>} style={{ width: '100%', textAlign: 'center'}}>
                <PostImages images={singlePost && singlePost.Images} />
                <p style={{ marginBottom: '70px' }}>{singlePost && singlePost.content}</p>
            </Card>
            <CommentForm post={singlePost} id={id} />

            <List
                style={{ width: '100%', marginLeft: '20px' }}
                header={`${singlePost ? singlePost.Comments.length : 0}개의 댓글`}
                itemLayout="horizontal"
                dataSource={singlePost ? singlePost.Comments : []}
                renderItem={(item) => (
                    <li>
                        <Comment
                            // actions={
                            // }
                            author={item.User ? <p>{item.User.nickname} &nbsp;&nbsp;&nbsp;&nbsp; {moment(item.createdAt).format('YYYY-MM-DD hh:mm:ss')}</p> : null}
                            avatar={
                                <Link href="/user/[id]" as={`/user/${item.User.id}`}>
                                    <a><Avatar>{item.User ? item.User.nickname[0] : null}</Avatar></a>
                                </Link>}
                            content={<p style={{ paddingRight: '20px' }}>{item.content}</p>}
                        ></Comment>
                        {
                            console.log('post.UserId', item && item.UserId),
                            console.log('post.id', item && item.id)
                        }
                        {
                            userid && (item && item.UserId === userid)
                                ? ( <Button onClick={removeCommentBtn(item.id)}>삭제</Button>)
                                : null
                        }
                    </li>
                )}
            />
        </PostWrapper >
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }

    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });

    context.store.dispatch({
        type: LOAD_MAIN_POSTS_REQUEST,
    });

    context.store.dispatch({
        type: LOAD_POST_REQUEST,
        data: context.params.id,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
});

export default Post;