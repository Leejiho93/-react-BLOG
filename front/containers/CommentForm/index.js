import React, { useState, useCallback, useEffect } from 'react';
import { Form, Button, Input } from 'antd';
import { ADD_COMMENT_REQUEST, LOAD_POST_REQUEST } from '../../reducers/post';
import { useSelector, useDispatch } from 'react-redux';

const CommentForm = ({ post, id }) => {
    const [commentText, setCommentText] = useState('');
    const { isAddingComment, commentAdded } = useSelector(state => state.post);
    const dispatch = useDispatch();
    // const id  = useSelector(state => state.user.id);

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    }, [])

    useEffect(() => {
        if (!isAddingComment) {
            dispatch({
                type: LOAD_POST_REQUEST,
                data: id,
            })
        }
    }, [isAddingComment]);

    useEffect(() => {
        setCommentText('');
    }, [commentAdded === true]);

    const onSubmitComment = useCallback((e) => {
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                content: commentText,
                postId: post.id,
            }
        })
    }, [commentText])

    return (
        <Form style={{ width: '100%'}} onFinish={onSubmitComment}
        >
            <Form.Item>
                <Input.TextArea
                style={{ marginTop: '15px'}}
                placeholder="댓글을 작성해주세요"
                rows={2} 
                value={commentText} 
                onChange={onChangeCommentText} />
            </Form.Item>
            <Button style={{ float: 'right', marginRight: '10px' }} htmlType="submit">등록</Button>
        </Form>
    )
}

export default CommentForm;