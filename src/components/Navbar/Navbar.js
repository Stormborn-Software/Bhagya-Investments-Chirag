"use client";

import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const pages = ['Home', 'Pooja', 'Reviews', 'Contact'];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (sectionId) => {
    handleCloseNavMenu();
    
    if (pathname !== '/') {
      router.push('/#' + sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              pt: { xs: 10, md: 0 },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            पंडित चिराग नागर
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
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
                '& .MuiPaper-root': {
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  mt: 1,
                  minWidth: '200px',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={() => handleNavigation(page.toLowerCase())}
                  sx={{
                    py: 2,
                    px: 3,
                    borderRadius: '8px',
                    mx: 1,
                    my: 0.5,
                    transition: 'all 0.3s ease',
                    background: 'linear-gradient(45deg, #FF7722 30%, #FF9B57 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #FF7722 30%, #FF9B57 90%)',
                      WebkitBackgroundClip: 'unset',
                      WebkitTextFillColor: 'white',
                      transform: 'translateX(5px)',
                    }
                  }}
                >
                  <Typography 
                    textAlign="center"
                    sx={{ 
                      fontSize: '1.2rem',
                      fontWeight: 600
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              fontSize: { xs: '1.4rem', sm: '1.6rem' },
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
              maxWidth: '100%',
              px: 2,
            }}
          >
            पंडित चिराग नागर
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigation(page.toLowerCase())}
                sx={{
                  my: 2,
                  mx: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(45deg, #FF7722 30%, #FF9B57 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF7722 30%, #FF9B57 90%)',
                    WebkitBackgroundClip: 'unset',
                    WebkitTextFillColor: 'white',
                    transform: 'translateY(-2px)',
                  }
                }}
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