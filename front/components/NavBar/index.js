import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useStyles, AppMenu, Logout, ListFlex } from './style';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../../reducers/user';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const NavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(false);
  const [state, setState] = useState({
    top: false,
  });

  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const isMenuOpen = anchorEl;

  const handleProfileMenuOpen = (event) => {
    // console.log('event.curr: ', event.currentTarget)
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
  };


  const onClickLogout = () => {
    setAnchorEl(false);
    dispatch({
      type: LOG_OUT_REQUEST,
    })
  }

  const menuId = 'primary-search-account-menu';

  // userIcon 클릭시
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link href="/profile"><a><MenuItem onClick={handleMenuClose}>내정보</MenuItem></a></Link>
      <Link href="/user/[id]" as={`/user/${0}`}><a><MenuItem onClick={handleMenuClose}>내가쓴 글</MenuItem></a></Link>
      <MenuItem onClick={onClickLogout}>로그아웃</MenuItem>
    </Menu>
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top'
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListFlex>
        <Link href="/">
          <a>
            <ListItem button key={'home'}>
              <ListItemText primary={'Home'} style={{ textAlign: 'center'}}/>
            </ListItem>
          </a>
        </Link>

        <Link href="/about">
          <a>
            <ListItem button key={'about'} style={{ textAlign: 'center'}}>
              <ListItemText primary={'About'} />
            </ListItem>
          </a>
        </Link>

        <Link href="/tech"><a>
          <ListItem button key={'tech'} style={{ textAlign: 'center'}}>
            <ListItemText primary={'Tech'} />
          </ListItem>
        </a>
        </Link>

        <Link href="/free">
          <a>
            <ListItem button key={'free'} style={{ textAlign: 'center'}}>
              <ListItemText primary={'Talk'} />
            </ListItem>
          </a>
        </Link>

        <Link href="/gallery">
          <a>
            <ListItem button key={'gallery'} style={{ textAlign: 'center'}}>
              <ListItemText primary={'Gallery'} />
            </ListItem>
          </a>
        </Link>
      </ListFlex>
      <Divider />
    </div>
  );

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <React.Fragment key='top'>
              <IconButton
                className={classes.menuButton}
                onClick={toggleDrawer('top', true)}
              >
                <MenuIcon />
              </IconButton>

              <SwipeableDrawer
                anchor='top'
                open={state['top']}
                onClose={toggleDrawer('top', false)}
                onOpen={toggleDrawer('top', true)}
              >
                {list('top')}
              </SwipeableDrawer>
            </React.Fragment>

            <Typography className={classes.title} variant="h4">
              <Link href="/">
                <a>
                  <span>EASYHO</span>
                </a>
              </Link>
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <AppMenu>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/about"><a>About</a></Link></li>
              <li><Link href="/tech"><a>Tech</a></Link></li>
              <li><Link href="/free"><a>Talk</a></Link></li>
              <li><Link href="/gallery"><a>Gallery</a></Link></li>
            </AppMenu>

            <div className={classes.sectionDesktop}>
              {me ?
                <IconButton
                  // aria-controls={menuId}
                  // aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  className={classes.userIcon}
                >
                  <AccountCircle />
                </IconButton>

                :
                <Logout>
                  <IconButton
                  // color="inherit"
                  >
                    <Link href="/login">
                      <a>
                        <FontAwesomeIcon icon={faSignInAlt} />
                        <span>로그인</span>
                      </a>
                    </Link>
                  </IconButton>
                  <IconButton
                  // color="inherit"
                  >
                    <Link href="/signup">
                      <a>
                        <FontAwesomeIcon icon={faUserPlus} />
                        <span>회원가입</span>
                      </a>
                    </Link>
                  </IconButton>
                </Logout>
              }
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
      {/* <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer> */}
    </>
  );
}

export default NavBar;