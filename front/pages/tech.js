import React from 'react';
import PostCard from '../components/PostCard'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const TechWrapper = styled.div`
    display: flex;
` 

const Tech = () => {
    const { allPosts } = useSelector(state => state.post);
    return (
        <>
            <TechWrapper>
                { allPosts.filter(v => v.category  === 'tech').map(v => {
                    return <PostCard key={v.id} post={v} />
                })}
                
                 {/* {allPosts.map(v => {
                     return ( <PostCard key={v.id} post={v} />)
                 })} */}
            </TechWrapper>
        </>
    )
}

export default Tech;