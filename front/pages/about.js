import React from 'react';
import Link from 'next/link'
import { Button } from 'antd';

const About = () => {
    return (
    <>
        <div>내 정보</div>
        <Link href="/"><Button>홈</Button></Link>
        
    </>)
}

export default About;