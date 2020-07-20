import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Form, Input, Button, Collapse } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../../reducers/post';

const PostForm = ({ category }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
    const imageInput = useRef();

    useEffect(() => {
        setTitle(''),
            setText('')
    }, [postAdded === true])

    const onSubmitForm = useCallback(() => {
        console.log('글쓰기 폼');
        if (!title || !title.trim()) {
            return alert('제목을 작성하세요')
        }
        if (!text || !text.trim()) {
            return alert('게시글을 작성하세요')
        }
        const formData = new FormData();
        imagePaths.forEach((i) => {
            formData.append('image', i);
        })
        formData.append('title', title);
        formData.append('content', text);
        formData.append('category', category);
        // console.log('fromdata: ', formData);
        dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
            // data: {
            //     title,
            //     content: text,
            //     category,
            // },
        })
    }, [title, text, imagePaths])

    const onChangeText = useCallback((e) => {
        setText(e.target.value)
    }, []);

    const onChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);

    // AJAX 이용
    const onChangeImages = useCallback((e) => {
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);  
        })
        
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        })
    }, []);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current])

    const onRemoveImage = useCallback(index => () => {
        dispatch({
            type: REMOVE_IMAGE,
            index,
        })
    }, []);

    return (
        <Collapse style={{ width: '100%'}} ghost>
            <Collapse.Panel header="글쓰기" >
                <Form style={{ margin: '10px 0 20px', width: '100%' }} encType="multipart/form-data" onFinish={onSubmitForm}>
                    <Input maxLength={60} placeholder="제목" value={title} onChange={onChangeTitle} style={{ marginBottom: "10px"}}/>
                    <Input.TextArea rows={10} placeholder="게시글을 작성하세요" value={text} onChange={onChangeText} />
                    <div>
                        <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
                        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                        <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>확인</Button>
                    </div>
                    <div>
                        {imagePaths.map((v, i) => (
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />   
                            <div>
                                <Button onClick={onRemoveImage(i)}>제거</Button>
                            </div>
                        </div>
                ))}
                    </div>
                </Form>
            </Collapse.Panel>
        </Collapse>
    )
}

export default PostForm;