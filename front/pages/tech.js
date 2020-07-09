import React from 'react';
import PostCard from '../containers/PostCard';
import PostForm from '../containers/PostForm';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';

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
    allPosts.filter
    return (
        <>
            <TechWrapper>
                <PostForm category="tech"/>
                {/* { allPosts.filter(v => v.category  === 'tech').map(v => {
                    return <PostCard key={v.id} post={v} />
                })} */}
                <PostCard post={ allPosts.filter(v => v.category  === 'tech')} />
            </TechWrapper>
        </>
    )
}

export default Tech;