import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Avatar } from 'antd';
import Router from 'next/router';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const PostCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText] = useState('');

    const dispatch = useDispatch();
    const { Meta } = Card;


    //카드 클릭시 내용 보여주기

    return (
        <div style={{ margin: '30px'}} >
            {/* <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title={post.title} />
            </Card> */}
            <Card
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>

        </div>
    )
}

export default PostCard;