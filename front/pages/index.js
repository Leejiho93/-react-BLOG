import React from 'react';
import Link from 'next/link'
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';

const Home = () => {

    const { allPosts } = useSelector(state => state.post);

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px 50px'}}>
                {allPosts.map(v => {
                    return (
                        <PostCard key={v} post={v} />
                    )
                })}
            </div>
        </>)
}

export default Home;