import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7722',
      light: '#FF9B57',
      dark: '#CC5F1B',
    },
    secondary: {
      main: '#2C3E50',
      light: '#34495E',
      dark: '#2C3E50',
    },
    background: {
      default: '#FFF8F3',
      paper: 'rgba(255, 255, 255, 0.8)',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      color: '#2C3E50',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#2C3E50',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#2C3E50',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});