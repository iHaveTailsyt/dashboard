import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"
 
export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The Acme Dashboard used for handling Acme\'s Payments.'
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <Analytics />
    </html>
  );
}