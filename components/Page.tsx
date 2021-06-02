import * as React from 'react';
import { formatDate, widont } from '@/lib/utils';
import Head from 'next/head';
import Banner from '@/components/Banner';
import Views from '@/components/Views';

export default function Page({
  title,
  description,
  date,
  link,
  as: Component = 'div',
  slug,
  children,
}: {
  title?: string;
  description?: string;
  date?: string;
  link?: string;
  as?: 'div' | 'article';
  slug?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{`${title ? `${title} - ` : ''}Alex Carpenter`}</title>
        <meta
          property="og:title"
          content={`${title ? `${title} - ` : ''}Alex Carpenter`}
        />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
      </Head>
      <a
        href="#main"
        className="fixed top-0 left-0 p-1 bg-yellow-400 text-[#111] text-sm transform -translate-y-full focus:translate-y-0"
      >
        Skip to content
      </a>
      <Banner />
      <main id="main">
        <Component>
          {title && Component === 'div' && (
            <h1 className="text-xl border-b border-white border-opacity-10 mb-8 pb-8">
              {title}&nbsp;<span aria-hidden={true}>¬</span>
            </h1>
          )}
          {title && Component === 'article' && (
            <header className="border-b border-white border-opacity-10 mb-8 pb-8">
              <p className="text-white text-opacity-75 space-x-1">
                <time dateTime={date}>{formatDate(date, 'long')}</time>
                {slug && (
                  <>
                    <span role="separator" aria-orientation="vertical">
                      &#183;
                    </span>
                    <Views slug={slug} />
                  </>
                )}
              </p>
              <h1 className="text-xl my-1">{widont(title)}</h1>
              {link && (
                <a
                  href={link}
                  className="text-white text-opacity-75 hover:text-opacity-100 inline-block"
                >
                  {new URL(link).hostname}&nbsp;&#8594;
                </a>
              )}
            </header>
          )}
          {children}
        </Component>
      </main>
    </>
  );
}
