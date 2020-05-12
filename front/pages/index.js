import React from 'react';
import Link from 'next/link'
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';

const Home = () => {

    const { allPosts } = useSelector(state => state.post);

    return (
        <>
            {allPosts.map(v => {
                    return (
                        <PostCard key={v} post={v} />
                    )
                })}
        </>)
}

export default Home;