//libs
import * as React from 'react';
import { ReactNode, useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
//meterial components
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {
  Avatar,
  Tooltip,
  MenuItem,
  Button,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
} from '@mui/material';
//components
import ThemeSwitcher from '../theme-swither/theme-swither';
import Footer from '../footer/footer';
//context
import { UserContext } from '../../context/user-context';
import { ThemeContext } from '../../context/theme-context';
//types
import { Routes } from '../../types/routes';
//styles
import styles from '../../pages/main-page/main-page.module.scss';

interface Props {
  children?: ReactNode;
}

function Navigation({ children, ...props }: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { userData, user, setUser, setUserData } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const colorHeader = theme === 'dark' ? 'rgba(35, 35, 35, 1)' : '#37664E';
  const hoverHeader = theme === 'dark' ? 'rgba(87, 52, 166, 1)' : '#05AA58';

  const pages = user.uid
    ? userData.isEditedByUser
      ? [
        ['Data collection', 'data-collection'],
        ['Research result', 'research-results'],
        ['Meals plan', 'meals-page'],
        ['Favourite meals', 'favorites'],
      ]
      : [['Data collection', 'data-collection']]
    : [];

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position='sticky' sx={{ backgroundColor: `${colorHeader}`, color: '#ffff' }}>
        <Container maxWidth='xl' className={styles.header}>
          <Toolbar disableGutters>
            {/* <WbSunnyIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/> */}
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Ubuntu',
                fontWeight: 700,
                fontSize: '3rem',
                letterSpacing: '.3rem',
                color: 'white',
                '&:hover': { color: `${hoverHeader}` },
                textDecoration: 'none',
              }}
            >
              RS-Healthy
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {userData.isEditedByUser &&
                  pages.map((page, idx) => (
                    <MenuItem
                      key={page[1]}
                      onClick={() => {
                        navigate(`/${page[1]}`);
                        handleCloseNavMenu();
                      }}
                    >
                      <Typography textAlign='center'>{page[0]}</Typography>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
            <WbSunnyIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Ubuntu',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#ffff',
                textDecoration: 'none',
              }}
            >
              RS-Healthy
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, idx) => (
                <Link
                  key={idx}
                  to={`/${page[1]}`}
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontFamily: 'Ubuntu',
                    fontSize: '1.1rem',
                  }}
                >
                  <Button
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      fontFamily: 'Ubuntu',
                      fontSize: '1.1rem',
                    }}
                    key={page[1]}
                    onClick={handleCloseNavMenu}
                  >
                    {page[0]}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={`${user.email[0]}`} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {user.uid && (
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography style={{ color: 'lightgrey' }} textAlign='center'>
                      {user.email}
                    </Typography>
                  </MenuItem>
                )}
                {!user.uid && (
                  <MenuItem
                    onClick={() => {
                      navigate(`/${Routes.AUTH}`);
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign='center'>Log In</Typography>
                  </MenuItem>
                )}
                {user.uid && userData.isEditedByUser && (
                  <MenuItem
                    onClick={() => {
                      navigate(`/${Routes.PERSONAL}`);
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign='center'>Your personal data</Typography>
                  </MenuItem>
                )}
                {user.uid && (
                  <MenuItem
                    onClick={() => {
                      localStorage.clear();
                      setUser({
                        uid: '',
                        email: '',
                      });
                      setUserData({ ...userData, isEditedByUser: false });
                      navigate('/');
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign='center'>Log Out</Typography>
                  </MenuItem>
                )}
                <ThemeSwitcher />
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children || <Outlet />}
      <Footer />
    </>
  );
}

export default Navigation;