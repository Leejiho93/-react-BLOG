import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
import Router from 'next/router';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggingIn } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const onFinishLogin = useCallback(() => {
        return dispatch({
            type: LOG_IN_REQUEST,
            data: {
                userId: id,
                password,
            }
        })
    }, [id, password])

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);

    }
    return (
        <>
            <Form
                onFinish={onFinishLogin}>
                <Form.Item
                    label="아이디"
                    name="id"
                    rules={[
                        {
                            required: true,
                            message: '아이디를 입력해주세요!',
                        },
                    ]}
                >
                    <Input value={id} onChange={onChangeId} />
                </Form.Item>

                <Form.Item
                    label="비밀번호"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '비밀번호를 입력해주세요!',
                        },
                    ]}
                >
                    <Input.Password value={password} onChange={onChangePassword} />
                </Form.Item>
                <Form.Item
                >
                    <Button type="primary" htmlType="submit" loading={isLoggingIn}>
                        로그인
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default LoginForm;