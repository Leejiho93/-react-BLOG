import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PostCard from '../../containers/PostCard';

const PostWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 100px;
`

const Post = () => {
    const { singlePost } = useSelector(state => state.post);
    const router = useRouter();
    const { id } = router.query;

    return (
        <PostWrapper>
            <title>
                {singlePost.User.nickname}
          님의 글
            </title>
            <meta name="description" content={singlePost.content} />
            <meta property="og:title" content={`${singlePost.User.nickname}님의 게시글`} />
            <meta property="og:description" content={singlePost.content} />
            {/* <meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebird.com/favicon.ico'} /> */}
            {/* <meta property="og:url" content={`https://nodebird.com/post/${id}`} /> */}
            {/* <PostCard post={singlePost} /> */}
            <p>제목{singlePost.title}</p>
            
            <p>내용{singlePost.content}</p>
        </PostWrapper >
    )
}

export default Post;