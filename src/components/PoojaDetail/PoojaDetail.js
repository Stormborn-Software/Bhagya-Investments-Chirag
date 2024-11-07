"use client";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PoojaDetail({ pooja }) {
  const router = useRouter();

  return (
    <Box sx={{ py: 8, background: 'linear-gradient(135deg, #FFF8F3 0%, #FFE5D9 100%)', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ mb: 4 }}
        >
          Back
        </Button>

        <Paper elevation={0} sx={{ p: 4, mb: 4 }}>
          <Box sx={{ position: 'relative', height: '400px', mb: 4 }}>
            <Image
              src={pooja.image.url}
              alt={pooja.image.name}
              fill
              style={{ 
                objectFit: 'cover',
                borderRadius: '8px' 
              }}
            />
          </Box>

          <Typography variant="h2" gutterBottom>
            {pooja.title}
          </Typography>

          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
            {pooja.descriptionMain}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
} 