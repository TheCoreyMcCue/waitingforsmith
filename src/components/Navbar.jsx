import * as React from 'react';
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
import logo from '../assets/wfs-logo.png';

import { useNavigate } from 'react-router-dom';

const pages = ['About', 'Live', 'Press', 'Lyrics', 'Behind the Song', 'Merch', 'Blog', 'Stay Tuned'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleLinkClick = (page) => {
    setAnchorElNav(null);
    navigate(`/${page.replace(/\s/g, '').toLowerCase()}`);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{background: 'grey'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="div"
              onClick={() => navigate('/')}
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, justifyContent: {md: 'space-between'}, cursor: 'pointer' }}
            >
              <img src={logo} style={{height: '3em', width: 'auto' }} alt="waiting for smith logo" />
            </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: {md: 'space-between'} }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleLinkClick(page)}>
                    <Typography textAlign="center">
                        {page}
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => navigate('/')}
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={logo} style={{height: '3em', width: 'auto' }} alt="waiting for smith logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: {md: 'space-evenly'} }}>
            {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleLinkClick(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;