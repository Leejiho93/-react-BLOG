import React, { useState, useCallback } from 'react';
import { Card, Avatar, List, Space, Button } from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import CommentForm from '../CommentForm';
import { CardWrapper, CardTitle, PostContent, PostCardWrapper, PostTitle } from './style';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import moment from 'moment';
moment.locale('ko');

const PostCard = ({ post }) => {
  // const [commentFormOpened, setCommentFormOpened] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { pid } = router.query;

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <PostCardWrapper>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={post}
        renderItem={item => (
          <Link
            href="/post/[id]" as={`/post/${item.id}`}>
            <a>
              <List.Item
                key={item.title}
                actions={[
                  <IconText icon={MessageOutlined} text={item.Comments ? item.Comments.length : 0} key="list-vertical-message" />,
                  <p>{moment(item.createdAt).format('YYYY MMMM Do, h:mm:ss a')}</p>,
                ]}
                // {
                // <div>
                //   <IconText icon={MessageOutlined} text={item.Comments ? item.Comments.length : 0} key="list-vertical-message" />,
                //   <p>{moment(item.createdAt).format('YYYY MMMM Do, h:mm:ss a')}</p>,
                // </div>
                // }

                extra={
                  (item.Images && item.Images[0])
                    ?
                    <img
                      width={270}
                      height={180}
                      alt="thumbnail"
                      src={`http://localhost:3065/${item.Images[0].src}`}
                    />
                    : null
                }
              >
                <List.Item.Meta
                  avatar={
                    <Link
                      href="/user/[id]" as={`/user/${item.User.id}`}>
                      <a>
                        <Avatar>{item.User.nickname[0]}</Avatar>
                      </a>
                    </Link>}
                  title={<PostTitle>{item.title}</PostTitle>}
                  description={[
      
                  ]}
                />
                <PostContent>
                  {item.content}
                </PostContent>
              </List.Item >
        
            </a>
          </Link>
        )}
      />
    </PostCardWrapper>
  )
};

export default PostCard;