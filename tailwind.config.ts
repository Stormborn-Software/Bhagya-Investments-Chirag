
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Theme
        'midnight-blue': '#0E1A2B',
        'navy': '#16243B',
        'gold': '#D4AF37',
        'teal': '#00BFA5',
        'ivory': '#F5F5F5',
        'light-gray': '#B0BEC5',
        'soft-green': '#81C784',
        'coral-red': '#FF7043',
        
        // Legacy aliases
        'midnight-navy': '#0E1A2B',
        'deep-navy': '#16243B',
        'cloud-white': '#F5F5F5',
        'slate-grey': '#B0BEC5',
        'performance-green': '#81C784',
        'electric-blue': '#00BFA5',
        'gunmetal': '#233554',
        'satin-gold': '#D4AF37',
        'deep-purple': '#00BFA5',
        'vibrant-green': '#81C784',
        'info-blue': '#00BFA5',
        'bright-amber': '#D4AF37',
        'urgent-red': '#FF7043',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backdropBlur: {
        'tier1': '8px',
        'tier2': '12px',
        'tier3': '16px',
      },
    },
  },
  plugins: [],
};
export default config;
