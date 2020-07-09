import React, { useEffect } from 'react';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import PostCard from '../containers/PostCard';
import styled from 'styled-components';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

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
    useEffect(() => {
        dispatch({
            type: LOAD_MAIN_POSTS_REQUEST,
        })
    }, [])

    const { allPosts } = useSelector(state => state.post)
    
    return (
        <>
            <IndexWrapper>
                {/* {allPosts.map(v => {
                    return (
                        <PostCard key={v.id} post={v} />
                    )
                })} */}
                 <PostCard post={allPosts} />
            </IndexWrapper>
        </>)
}

export default Home;