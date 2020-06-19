import React, { useRef } from 'react';
import { useSelector } from 'react-redux'
import Link from 'next/link';
import { Ul } from './style';

const LeftNav = ({ open }) => {
    const me = useSelector(state => state.user);

    return (
        <Ul open={open}>
            <li><Link href="/"><a>LeftNav</a></Link></li>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/tech"><a>Tech</a></Link></li>
            <li><Link href="/free"><a>Free</a></Link></li>
            <li><Link href="/gallery"><a>Gallery</a></Link></li>
        </Ul>
    )
}

export default LeftNav;