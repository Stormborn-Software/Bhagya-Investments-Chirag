"use client";

import poojas from '@/data/poojas.json';
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export const Pooja = () => {
  const router = useRouter();

  return (
    <Box
      id="pooja"
      sx={{
        pt: 2,
        pb: 8,
        background: 'linear-gradient(135deg, #FFF8F3 0%, #FFE5D9 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            mb: 2,
            background: 'linear-gradient(45deg, #FF7722 30%, #FF9B57 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Sacred Rituals & Ceremonies
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Discover our range of traditional Vedic ceremonies performed with utmost devotion
        </Typography>

        <Grid container spacing={4}>
          {poojas.poojas.map((pooja) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={pooja.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardActionArea onClick={() => router.push(`/pooja/${pooja.id}`)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={pooja.image.url}
                    alt={pooja.image.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {pooja.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pooja.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}; 