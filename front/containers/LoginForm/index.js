import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { LOG_IN_REQUEST } from '../../reducers/user';
import { LoginError, useStyles } from './style';
import { useEffect } from 'react';

// custom hooks
export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
}

const LoginForm = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const { logInErrorReason } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log('id, password', id, password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId: id,
        password,
      }
    })
  }, [id, password])
  
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {/* <Typography component="h1" variant="h5">
          Login
        </Typography> */}
        <form className={classes.form} onSubmit={onSubmitForm}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="id"
            label="아이디"
            name="id"
            autoComplete="id"
            value={id}
            onChange={onChangeId}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
            autoComplete="current-password"
          />
          <LoginError>
            {logInErrorReason}
          </LoginError>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            로그인
          </Button>


          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                <a>
                회원가입 하기
                </a>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default LoginForm;