import React from 'react';
import { RigthUl } from './style';
import Link from 'next/link'

const RigthNav = ({ open }) => {
    return (
        <RigthUl open={open}>
            <li><Link href="/"><a>RigthNav</a></Link></li>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/tech"><a>Tech</a></Link></li>
            <li><Link href="/free"><a>Free</a></Link></li>
            <li><Link href="/gallery"><a>Gallery</a></Link></li>
        </RigthUl>
    )
}

export default RigthNav;