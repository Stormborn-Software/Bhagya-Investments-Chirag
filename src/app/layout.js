import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import { ThemeRegistry } from '@/components/ThemeRegistry/ThemeRegistry';
import { WhatsappButton } from '@/components/WhatsappButton/WhatsappButton';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: 'पंडित चिराग नागर - Vedic Rituals & Ceremonies in Ujjain',
  description: 'Experience authentic Vedic rituals and ceremonies with Pandit Chirag Nagar in Ujjain. Specializing in traditional pujas at Mahakaaleshwar, Mangalnath, Harsiddhi Mata, and Ramghat temples.',
  keywords: 'Pandit Chirag Nagar, Ujjain temples, Vedic rituals, Mahakaaleshwar puja, Hindu ceremonies, traditional havans, Mangalnath temple, Harsiddhi Mata',
  icons: {
    icon: [
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    apple: {
      url: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png'
    },
    shortcut: '/favicon/favicon.ico'
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: 'पंडित चिराग नागर - Vedic Rituals & Ceremonies in Ujjain',
    description: 'Experience authentic Vedic rituals and ceremonies with Pandit Chirag Nagar in Ujjain.',
    images: ['/images/pandit-chirag.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
          <WhatsappButton />
        </ThemeRegistry>
      </body>
    </html>
  );
}
