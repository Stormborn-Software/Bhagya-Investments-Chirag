"use client";

import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        background: 'linear-gradient(135deg, #FFF8F3 0%, #FFE5D9 100%)',
        pt: { xs: 4, md: 8 },
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                mt: { xs: 2, md: 4 },
                background: 'linear-gradient(45deg, #FF7722 30%, #FF9B57 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2,
                paddingTop: 1,
              }}
            >
              पंडित चिराग नागर
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 3,
                color: 'text.secondary'
              }}
            >
              Vedic Rituals & Ceremonies in Ujjain
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'text.secondary'
              }}
            >
              Experience authentic Vedic rituals at the sacred temples of Ujjain - Mahakaaleshwar, Mangalnath, 
              Harsiddhi Mata, and Ramghat. Pandit Chirag Nagar brings decades of expertise in performing 
              traditional pujas and havans with utmost devotion and precision. Whether at these holy sites 
              or in the comfort of your home, each ceremony is conducted following ancient Vedic traditions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '400px', md: '600px' },
                width: '100%'
              }}
            >
              <Image
                src="/images/pandit-chirag.png"
                alt="Pandit Chirag Nagar"
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
}; 