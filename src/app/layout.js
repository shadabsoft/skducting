import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientSessionProvider from '../../clientsessionprovider';
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'SK Air Ducting Systems',
  description: 'Welcome to SK Air Ducting Systems website!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ClientSessionProvider>
          <Navbar />
          {children}
        </ClientSessionProvider>     
         </body>
    </html>
  );
}







