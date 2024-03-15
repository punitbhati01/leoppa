import * as React from 'react';
import "../../styles/HeaderStyles.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import constant from '../constant';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';


const pages = [
  { id: 1, name: 'Home', path: constant.APP_ROUTES.HOME },
  { id: 2, name: 'Products', path: constant.APP_ROUTES.PRODUCTS },
  { id: 3, name: 'About', path: constant.APP_ROUTES.ABOUT },
  { id: 4, name: 'Contact', path: constant.APP_ROUTES.CONTACTUS },
];
const settings = ['Profile', 'Wishlist', 'Logout'];

function Navbar() {
  const [mobileViewOpen, setMobileViewOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileViewOpen(!mobileViewOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography component={'div'} variant="h6" sx={{ flexGrow: 1, mt: 1 }}>
        <Box
          component="img"
          sx={{
            height: 50,
            width: 140,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="logo"
          src="../assets/images/logo_new_2.png"
        />
      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
        {pages && pages.map((page) => (
          <li key={page.id}><Link to={page.path} >{page.name}</Link></li>
        ))}
      </ul>
    </Box>
  )

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar component={'nav'} position="static" sx={{ bgcolor: "rgb(212 157 25)" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            sx={{
              mr: 2,
              w: 0,
              display: { sm: 'none' }
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography component={'div'} variant="h6" sx={{ flexGrow: 1, display: 'flex' }}>
            <Box
              component="img"
              sx={{
                height: 50,
                width: 130,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="logo"
              src="../assets/images/logo_new_2.png"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <ul className='navigation-menu'>
              {pages && pages.map((page) => (
                <li key={page.id}><Link to={page.path} >{page.name}</Link></li>
              ))}
            </ul>
          </Box>
          <Box component="nav">
            <Drawer variant='temporary' open={mobileViewOpen} onClose={handleDrawerToggle}
              sx={{
                display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "200px"
                }
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
  );
}
export default Navbar;