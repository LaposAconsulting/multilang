'use client';
import Link from 'next-intl/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Index() {
  const pathname = usePathname();
  const t = useTranslations('Index');
  const locale = useLocale();

  console.log(pathname)

  return (
    <>
      <h1>{t('title')}</h1>
      <p>{locale}</p>
      <div className='flex flex-col'>
        <Link href="/test">test</Link>
        <Link href="/about">About</Link>
        <Link href="/" locale="de">Switch to German</Link>
      </div>
    </>
  );
}