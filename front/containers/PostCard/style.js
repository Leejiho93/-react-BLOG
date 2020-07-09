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

export const CardTitle = styled.div`
    text-align: center;
    font-size: 30px;
    // height: 40px;
    border: 1px solid #f0f0f0;
    color: #1890FF;
`

export const PostContent = styled.p`
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
`