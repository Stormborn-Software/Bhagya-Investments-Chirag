'use client';
import reviews from '@/data/reviews.json';
import { Avatar, Box, Card, CardContent, Container, Grid, Rating, Typography } from '@mui/material';

export const Reviews = () => {
  return (
    <Box
      id="reviews"
      sx={{
        py: 8,
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
          Devotee Testimonials
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Read what our devotees say about their spiritual journey with us
        </Typography>

        <Grid container spacing={4}>
          {reviews.reviews.map((review) => (
            <Grid item xs={12} md={4} key={review.id}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={review.image}
                      alt={review.name}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6">{review.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {review.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={review.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body1" color="text.secondary">
                    {review.comment}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}; 