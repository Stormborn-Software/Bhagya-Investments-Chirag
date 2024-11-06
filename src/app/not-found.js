"use client";

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: '404 - Page Not Found | पंडित चिराग नागर',
  description: 'The requested page could not be found. Return to the homepage to explore Vedic rituals and ceremonies with Pandit Chirag Nagar.',
};

export default function NotFound() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFF8F3 0%, #FFE5D9 100%)',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, md: 0 }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '4rem', md: '6rem' },
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #FF7722 30%, #FF9B57 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                404
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 3,
                  color: 'text.secondary',
                }}
              >
                ॐ नमः शिवाय
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 6,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                The page you seek has transcended beyond our realm. Let us guide you back to the path of dharma.
              </Typography>

              <Button
                onClick={() => router.push('/')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: '8px',
                  background: 'linear-gradient(45deg, #FF7722 30%, #FF9B57 90%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF7722 50%, #FF9B57 100%)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Return to Homepage
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '300px', md: '400px' },
                width: '100%',
                opacity: 0.9,
                animation: 'float 6s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': {
                    transform: 'translateY(0)',
                  },
                  '50%': {
                    transform: 'translateY(-20px)',
                  },
                },
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/om.png`}
                alt="Temple Silhouette"
                fill
                style={{
                  objectFit: 'contain'
                }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 