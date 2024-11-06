"use client";

import poojas from '@/data/poojas.json';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function PoojaDetail({ params }) {
  const router = useRouter();
  const id = use(params).id;
  const pooja = poojas.poojas.find(p => p.id === id);

  if (!pooja) {
    return null;
  }

  return (
    <Box sx={{ 
      pt: 2, 
      pb: 8, 
      background: 'linear-gradient(135deg, #FFF8F3 0%, #FFE5D9 100%)', 
      minHeight: '100vh' 
    }}>
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ mb: 4 }}
        >
          Back
        </Button>

        <Paper 
          elevation={0} 
          sx={{ 
            p: 6, 
            mb: 4, 
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            background: 'rgba(255,255,255,0.9)',
          }}
        >
          <Box sx={{ position: 'relative', height: '600px', mb: 6, borderRadius: '12px', overflow: 'hidden' }}>
            <Image
              src={pooja.image.url}
              alt={pooja.image.name}
              fill
              style={{ 
                objectFit: 'cover'
              }}
            />
          </Box>

          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              mb: 4,
              background: 'linear-gradient(45deg, #FF7722 30%, #FF9B57 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {pooja.title}
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              whiteSpace: 'pre-line',
              lineHeight: 1.8,
              color: 'text.secondary',
              textAlign: 'justify',
              textJustify: 'inter-word'
            }}
          >
            {pooja.descriptionMain}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
} 