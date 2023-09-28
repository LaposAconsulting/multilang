import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import './globals.css'
import Menu from './menu';
import { Inter, Roboto_Mono } from 'next/font/google'

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Menu />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
