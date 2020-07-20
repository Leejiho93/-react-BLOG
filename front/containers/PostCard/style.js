import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        margin: '30px auto',
    },
    media: {
        height: 0,
        paddingTop: '40.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export const CardWrapper = styled.div`
    width: 100%;
    margin-bottom: 40px;
`

export const PostTitle = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    width: 50%;
    font-weight: bold;
`

export const PostContent = styled.p`
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`

export const PostCardWrapper = styled.div`
    width: 100%;
    a {
        color: black;
    }
`

export const PostImage = styled.img`
    // max-width: 100%
`