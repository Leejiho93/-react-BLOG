import React, { useState, useCallback } from 'react';
import { Card, Avatar, List, Space, Button } from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import CommentForm from '../CommentForm';
import { CardWrapper, CardTitle, PostContent } from './style';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const PostCard = ({ post }) => {
  // const [commentFormOpened, setCommentFormOpened] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { pid } = router.query;

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
    // if (!commentFormOpened) {
    //   dispatch({

    //   })
    // }
  }, []);
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  // var listData = JSON.parse(JSON.stringify(post));
  // console.log('listData: ', listData);

  return (
    <List
      style={{ width: '100%' }}
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
          href={{ pathname: '/post', query: { id: item.id } }}>
          <a>
            <List.Item
              key={item.title}
              actions={[
                <IconText icon={MessageOutlined} text={post.Comments ? post.Comments.length : 0} key="list-vertical-message" />,
                <p>2020 09 09 14:20</p>,
              ]}

              extra={
                <img
                  width={270}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                avatar={
                  <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                    <a>
                      <Avatar>{item.User.nickname[0]}</Avatar>
                    </a>
                  </Link>}
                title={item.title}
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
    // <CardWrapper>
    //     <CardTitle>
    //       {post.title}
    //     </CardTitle>
    //   <Card
    //     cover={post.Images && post.Image[0] && <PostImages images={post.Images} />}
    //     actions={[
    //       <MessageOutlined onClick={onToggleComment} />,
    //     ]}
    //   // style={{ marginBottom: '30px', width: '100%' }}
    //   >
    //     <Card.Meta
    //       avatar={
    //         <Link href={{ pathname: '/user', query: { id: post.User.id } }} as={`/user/${post.User.id}`}>
    //           <a><Avatar>{post.User.nickname[0]}</Avatar></a>
    //         </Link>
    //       }
    //       title={post.User.nickname}
    //       description={post.content}
    //     />

    //   </Card>
    //   {commentFormOpened && (
    //     <>
    //       <CommentForm post={post} />
    //       <List
    //         header={`${post.Comments ? post.Comments.length : 0} 댓글`}
    //       >

    //       </List>
    //     </>
    //   )}
    // </CardWrapper>
  )
};

export default PostCard;