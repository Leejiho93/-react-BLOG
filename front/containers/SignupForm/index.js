import React, { useCallback ,useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useInput } from '../LoginForm';
import { useStyles, ErrorMessage, SuccessMessage } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { ID_CHECK_REQUEST, NICKNAME_CHECK_REQUEST, SIGN_UP_REQUEST } from '../../reducers/user';
import Router from 'next/router'

const SignupForm = () => {
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const {
    signUpIdErrorReason,
    signUpIdSuccessReason,
    signUpNicknameErrorReason,
    signUpNicknameSuccessReason,
    isSignedUp,
  } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect( ()=> {
    if (isSignedUp) {
      alert('회원가입 완료했습니다.');
      Router.push('/login');
    }
  }, [isSignedUp]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);  
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        userId: id,
        password,
        nickname,
      }
    })
  }, [id, password, nickname, passwordCheck])

  const onChangePassword = useCallback((e) => {
    setPasswordError(passwordCheck !== e.target.value);
    setPassword(e.target.value);
  }, [passwordCheck])

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(password !== e.target.value);
    setPasswordCheck(e.target.value);
  }, [password])

  const onCheckId = useCallback(() => {
    dispatch({
      type: ID_CHECK_REQUEST,
      data: id,
    })
  }, [id]);

  const onCheckNickname = useCallback(() => {
    dispatch({
      type: NICKNAME_CHECK_REQUEST,
      data: nickname,
    })
  }, [nickname]);

  const onCheckPassword = useCallback(() => {
    const checkPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;
    if (!checkPassword.test(password)) {
      setPasswordErrorMessage('8~20자의 영문자, 숫자, 특수문자를 사용하세요.')
    } else {
      setPasswordErrorMessage('');
    }
  }, [password]);

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
         <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
      
        <form className={classes.form} onSubmit={onSubmitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="id"
                variant="outlined"
                required
                fullWidth
                id="id"
                label="아이디"
                vaule={id}
                onChange={onChangeId}
                onBlur={onCheckId}
                autoFocus
              />
            </Grid>

            <ErrorMessage>
              {signUpIdErrorReason}
            </ErrorMessage>

            <SuccessMessage>
              {signUpIdSuccessReason}
            </SuccessMessage>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nickname"
                label="닉네임"
                name="nickname"
                autoComplete="nickname"
                value={nickname}
                onChange={onChangeNickname}
                onBlur={onCheckNickname}
              />
            </Grid>

            <ErrorMessage>
              {signUpNicknameErrorReason}
            </ErrorMessage>

            <SuccessMessage>
              {signUpNicknameSuccessReason}
            </SuccessMessage>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={onChangePassword}
                onBlur={onCheckPassword}
              />
            </Grid>

            <ErrorMessage>
              {passwordErrorMessage}
            </ErrorMessage>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordCheck"
                label="비밀번호 확인"
                type="password"
                id="passwordCheck"
                autoComplete="current-password"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              />
            </Grid>
            <ErrorMessage>
              {passwordError && '비밀번호가 일치하지 않습니다.'}
            </ErrorMessage>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            가입하기
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login">
                <a>
                  로그인 하기
                </a>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignupForm;