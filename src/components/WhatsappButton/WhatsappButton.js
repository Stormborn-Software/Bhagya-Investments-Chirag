'use client';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Fab, Tooltip, Zoom } from '@mui/material';

export const WhatsappButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/+917987196114', '_blank');
  };

  return (
    <Zoom in={true}>
      <Tooltip title="Chat on WhatsApp" placement="left">
        <Fab
          color="primary"
          onClick={handleClick}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            bgcolor: '#25D366',
            '&:hover': {
              bgcolor: '#128C7E',
            },
            zIndex: 1000,
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
}; 