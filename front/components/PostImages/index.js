import React, { useState, useCallback } from 'react';
import { Icon } from 'antd';

const PostImages = ({ images }) => {
    const [showImageZoom, setShowImageZoom] = useState(false);
    const onZoom = useCallback(() => {
        setShowImageZoom(true);
    }, []);
    const onClose = useCallback(() => {
        setShowImageZoom(false);
    })
    return (
        <>
        <div>
            <img src={`http://localhost:3065/${images[0].src}`} width="50%" onClick={onZoom}/>
            <div onClick={onZoom}>
                <Icon type="plus" />
                <br/>
            </div>
        </div>
        </>
    )
}

export default PostImages