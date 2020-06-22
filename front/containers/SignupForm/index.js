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
import { useInput } from '../LoginForm';
import { useState } from 'react';
import { useStyles } from './style';
import axios from 'axios';

const SignupForm = () => {
  const [id, setId] = useState('');
  const [idErrorMessage, setIdError] = useState(false);
  const [isDuplicateId, setIsDuplicateId] = useState(false);
  const [nickname, setNickname] = useState('');
  const [isDuplicateNickname, setIsDuplicateNickname] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const checkId = /^[a-z0-9]{5,20}$/;
  const checkNickname = /^[a-zA-Z0-9가-힣]{2,20}$/;
  const checkPassword = /^[a-zA-Z0-9]{8, 20}$/;

  const onChangeId = (e) => {
    setId(e.target.value);

    // const userIdCheck = await axios.get();
  }

  const onCheckId = async() => {  
    // const userIdCheck = await axios.post('/user/checkid', id);


  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {/* <Typography component="h1" variant="h5">
          Sign up
        </Typography> */}
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="id"
                label="아이디"
                vaule={id}
                onChange={onChangeId}
                // onBlur={onCheckId}
                autoFocus
              />
            </Grid>
        
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="닉네임"
                name="email"
                autoComplete="email"
              />
            </Grid>
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호 확인"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
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
              <Link href="/login" variant="body2">
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