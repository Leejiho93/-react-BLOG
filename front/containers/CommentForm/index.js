import React, { useState, useCallback } from 'react';
import { Form, Button, Input } from 'antd';

const CommentForm = ({ post }) => {
    const [commentText, setCommentText] = useState('');

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    }, [])

    const onSubmitComment = (e) => {
        e.preventDefault();

    }

    return (
        <Form onSubmit={onSubmitComment}>
            <Form.Item>
                <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText}/>
            </Form.Item>
            <Button htmlType="submit">등록</Button>
            
        </Form>
    )
}

export default CommentForm;