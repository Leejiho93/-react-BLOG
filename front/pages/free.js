import React from 'react';
import Link from 'next/link'
import { Button } from 'antd';

const Talk = () => {
    return (
    <>
        <div>자유게시판</div>
        <Link href="/signup"><Button>회원가입</Button></Link>
        
    </>)
}

export default Talk;