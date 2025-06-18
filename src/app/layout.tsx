'use client';
import { Inter } from 'next/font/google';
import './globals.css'; // グローバルCSSは引き続き必要（MUIのリセットCSSなど）

// MUI関連のインポート
import { CacheProvider } from '@emotion/react'; // Emotion CacheProviderを使用
import createCache from '@emotion/cache'; // Emotionのキャッシュ作成関数

const muiCache = createCache({ key: 'mui', prepend: true }); // MUI用のキャッシュを作成
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // MUIのリセットCSS
import theme from '@/app/theme'; // カスタムテーマファイル (後で作成)

import Header from '@/app/components/Header'; // ヘッダーコンポーネント (後でMUIで再作成)

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <CacheProvider value={muiCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>{children}</main>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}