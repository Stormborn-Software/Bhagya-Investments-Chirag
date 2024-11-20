'use client';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, IconButton, Link, Stack, Typography } from '@mui/material';

export const Footer = () => {
  const socialLinks = [
    {
      icon: <FacebookIcon />,
      url: 'https://www.facebook.com/chirag.nagar.1000',
      label: 'Facebook'
    },
    {
      icon: <TwitterIcon />,
      url: 'https://twitter.com/panditchiragnagar',
      label: 'Twitter'
    },
    {
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/pt_chirag_nagar/',
      label: 'Instagram'
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
              पंडित चिराग नागर
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Vedic Rituals & Ceremonies in Ujjain
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
                aria-label={social.label}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>

          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              © {new Date().getFullYear()} All rights reserved
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                opacity: 0.6,
                fontSize: '0.8rem' 
              }}
            >
              Crafted with ❤️ by <Link href="https://github.com/Stormborn-Software" target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit', textDecoration: 'underline' }}>Stormborn Software</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}; 