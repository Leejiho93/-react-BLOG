import React, { useState, useCallback } from 'react';
import { Icon } from 'antd';

const PostImages = ({ images }) => {
    // if (images && images.length === 1) {
    //     return (
    //         <>
    //             <img src={images && images[0] && `http://localhost:3065/${images[0].src}`} />
    //         </>
    //     )
    // }

    // if (images && images.length === 2) {
    //     return (
    //         <>
    //             <div>
    //                 <img src={images && images[0] && `http://localhost:3065/${images[0].src}`} />
    //             </div>
    //             <div>
    //                 <img src={images && images[1] && `http://localhost:3065/${images[1].src}`} />
    //             </div>
    //         </>
    //     )
    // }
    return (
        <>
            {images && images.map((v, i) => (
                <div key={i} style={{ width: 'inherit', marginBottom: '20px' }}>
                    <img width='100%' src={`http://localhost:3065/${v.src}`} />
                    {/* <p>{v}</p> */}
                </div>
            ))}
        </>
    )
}

export default PostImages