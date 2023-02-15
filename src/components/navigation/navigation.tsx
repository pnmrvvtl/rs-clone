import * as React from 'react';
import { ReactNode, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import { UserContext } from '../../context/user-context';
import styles from '../../pages/main-page/main-page.module.scss';

const pages = [
  ['Data collection', 'data-collection'],
  ['Research result', 'research-results'],
  ['Meals page', 'meals-page'],
  ['Favourites meals', 'favorites'],
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function RestoreIcon() {
  return null;
}

function FavoriteIcon() {
  return null;
}

function LocationOnIcon() {
  return null;
}

interface Props {
  children?: ReactNode;
}

function Navigation({ children, ...props }: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { userData } = useContext(UserContext);

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
      <AppBar position="sticky" sx={{ backgroundColor: '#37664E', color: '#ffff' }}>
        <Container maxWidth="xl" className={styles.header}>
          <Toolbar disableGutters>
            {/* <WbSunnyIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Ubuntu',
                fontWeight: 700,
                fontSize: '3rem',
                letterSpacing: '.3rem',
                color: 'white',
                '&:hover': { color: '#05AA58' },

                textDecoration: 'none',
              }}
            >
              RS-Healthy
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                    <Link key={idx} style={{ textDecoration: 'none', color: 'black' }} to={`/${page[1]}`}>
                      <MenuItem key={page[1]} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page[0]}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
              </Menu>
            </Box>
            <WbSunnyIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
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
              {userData.isEditedByUser &&
                pages.map((page, idx) => (
                  <Button
                    key={page[1]}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <Link
                      key={idx}
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                        fontFamily: 'Ubuntu',
                        fontSize: '1.1rem',
                      }}
                      to={`/${page[1]}`}
                    >
                      {page[0]}
                    </Link>
                  </Button>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {/*<Tooltip title="Open settings">*/}
              {/*    /!*<IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>*!/*/}
              {/*    /!*    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>*!/*/}
              {/*    /!*</IconButton>*!/*/}
              {/*</Tooltip>*/}
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
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