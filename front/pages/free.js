import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import PostCard from '../containers/PostCard';
import PostForm from '../containers/PostForm';
import { useSelector } from 'react-redux';

export const TalkWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`

const Talk = () => {
    const { allPosts } = useSelector(state => state.post);
    return (
        <>
            <TalkWrapper>
                <PostForm />
                <PostCard post={allPosts.filter(v => v.category === 'talk')} />
            </TalkWrapper>
        </>)
}

export default Talk;