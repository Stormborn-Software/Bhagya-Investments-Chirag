'use client';

import { Contact } from '@/components/Contact/Contact';
import { Home } from '@/components/Home/Home';
import { Pooja } from '@/components/Pooja/Pooja';
import { Reviews } from '@/components/Reviews/Reviews';
import { Box } from '@mui/material';

export default function Page() {
  return (
    <Box sx={{ pt: { xs: 8, md: 10 } }}>
      <Home />
      <Pooja />
      <Reviews />
      <Contact />
    </Box>
  );
}
