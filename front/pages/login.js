import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
import Router from 'next/router';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggingIn, me } = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        if (me) {
            Router.push('/');
        }
    }, [me && me.id])


    const onSubmitLogin = useCallback((e) => {
        e.preventDefault();
        console.log({
            id,
            password
        })

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
            <form onSubmit={onSubmitLogin}>
                <label for="id">ID:</label>
                <input type="text" id="id" name="id" value={id} onChange={onChangeId}></input>
                <label for="password">PASSWORD:</label>
                <input type="password" id="password" name="password" value={password} onChange={onChangePassword}></input>
                <input type="submit" value="로그인"/>
            </form>
            {/* <Form 
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
            </Form> */}
        </>
    )
}

export default Login;