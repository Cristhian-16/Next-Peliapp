import { Header } from '@/components';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} flex flex-col h-screen justify-between bg-[#131b2e] box-border text-white`}
      >
        <Header />
        <main className=' max-w-6xl mx-auto'>{children}</main>

        <footer className='bg-black text-center py-9'>
          <p>Todos los derechos Reservados ©</p>
        </footer>
      </body>
    </html>
  );
}
