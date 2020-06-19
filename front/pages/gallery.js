import React from 'react';
import Link from 'next/link'
import { Button } from 'antd'

const Gallery = () => {
    return (
    <>
        <div> 인스타 갤러리 화면 </div>
        <Link href="/"><Button>홈</Button></Link>
        <Link href="/profile"><Button>프로필</Button></Link>
    </>)
}

export default Gallery;