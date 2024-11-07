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
