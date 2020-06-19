// import React, { useState, useCallback, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { Button, Form, Input } from 'antd';
// import { useDispatch } from 'react-redux';
// import { SIGN_UP_REQUEST } from '../reducers/user';
// import Router from 'next/router';

// const Signup = () => {
//     const [id, setId] = useState('');
//     const [nickname, setNickname] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordCheck, setPasswordCheck] = useState('');

//     const [passwordError, setPasswordError] = useState('');
//     const { isSigningUp, isSignedUp } = useSelector(state => state.user);
//     const dispatch = useDispatch();

//     const onFinshSignUpForm = useCallback((e) => {

//         if (password !== passwordCheck) {
//             return setPasswordError(true);
//         }

//         dispatch({
//             type: SIGN_UP_REQUEST,
//             data: {
//                 userId: id,
//                 password,
//                 nickname
//             }
//         })

//     }, [password, passwordCheck])

//     const onChangeId = (e) => {
//         setId(e.target.value)
//     }

//     const onChangeNickname = (e) => {
//         setNickname(e.target.value);
//     }

//     const onChangepassword = (e) => {
//         setPasswordError(e.target.value !== password);
//         setPassword(e.target.value)
//     }

//     const onChangepasswordCheck = (e) => {
//         setPasswordError(e.target.value !== password);
//         setPasswordCheck(e.target.value);
//     }

//     return (
//         <Form onFinish={onFinshSignUpForm}>
//             <Form.Item
//                 label="아이디"
//                 name="id"
//             >
//                 <Input value={id} onChange={onChangeId} placeholder="아이디를 입력하세요" required />
//             </Form.Item>

//             <Form.Item
//                 label="닉네임"
//                 name="nickname"
//             >
//                 <Input value={nickname} onChange={onChangeNickname} placeholder="닉네임을 입력하세요" required />
//             </Form.Item>

//             <Form.Item
//                 label="비밀번호"
//                 name="password"
//             >
//                 <Input type="password" value={password} onChange={onChangepassword} placeholder="비밀번호를 입력하세요" required />
//             </Form.Item>

//             <Form.Item
//                 label="비밀번호 확인"
//                 name="passwordcheck"
//             >
//                 <Input type="password" value={passwordCheck} onChange={onChangepasswordCheck} placeholder="비밀번호를 재입력하세요" required />
//             </Form.Item>
//             {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
//             <Form.Item>
//                 <Button type="primary" htmlType="submit" loading={isSigningUp}>
//                     가입하기
//             </Button>
//             </Form.Item>
//         </Form>
//     )
// }

// export default Signup;

import React from 'react';
import SignupForm from '../containers/SignupForm'

const Signup= () => {
    return (
            <SignupForm />
    )
}

export default Signup;