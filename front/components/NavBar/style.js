import styled from 'styled-components';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    background: 'white',
    minHeight: '64px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center;'
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    minHeight: '64px', 
    display: 'flex', 
    width: '100%', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#1890FF',
    visibility: 'hidden',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: 0,
      display: 'flex',
      visibility: 'visible',
    },
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      margin: 0,
      display: 'flex',
      visibility: 'visible',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  title: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-center'
    },
    fontFamily: 'MuseoModerno, cursive',
  },
  search: {
    position: 'relative',
    borderRadius: '30px',
    backgroundColor: '#1890FF',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    marginLeft: theme.spacing(3),
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: 'auto',
  },
  userIcon: {
    color: '#1890FF',
  },
  sectionDesktop: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: 'auto'
    },

  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export const AppMenu = styled.ul`
    display: flex;
    list-style: none;
    font-family: 'Roboto Slab', serif;
    margin: 0;

    & > li {
      padding: 8px 12px; 
    }
    
    @media(max-width: 960px) {
      display: none;
    }
  `

export const Logout = styled.div`
    display: flex;
    font-family: 'Noto Sans KR', sans-serif;

    & span {
      font-size: 16px;
    }

    & a {
      padding: 3px;
      @media (max-width: 1024px) {
          & span {
              display: none;
          }
      }   
    }
`
export const ListFlex = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & a {
   width: 100%;
  }
`