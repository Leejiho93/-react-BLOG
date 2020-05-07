import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Avatar } from 'antd';

const PostCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText] = useState('');

    const dispatch = useDispatch();
    const { Meta } = Card;


    //카드 클릭시 내용 보여주기
    const onClickCard = () => { 

    }

    return (
        <div>
            <Card
                hoverable
                // style={{ width: 250, heigth: 350}}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                onClick={onClickCard}
            >
                <Meta title={post.title} />
            </Card>
        </div>
    )
}

export default PostCard;