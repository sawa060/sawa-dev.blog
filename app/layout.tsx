import {GoogleAnalytics} from '@next/third-parties/google';
import {Footer} from '@/components/Footer';
import {Header} from '@/components/Header';
import '@/styles/globals.css';
import styles from '@/styles/Layout.module.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'sawa-dev.blog',
  description: 'NewtとNext.jsを利用したブログです',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ja">
      <body>
        <div className={styles.Wrapper}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
    </html>
  );
}
