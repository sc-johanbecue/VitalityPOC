import { JSX, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import Bootstrap from 'src/Bootstrap';
import { SitecorePageProps } from '@sitecore-content-sdk/nextjs';
import scConfig from 'sitecore.config';
import './globals.css';

function App({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  const templateName = pageProps?.page?.layout.sitecore?.route?.templateName;

  useEffect(() => {
    import('wc-sitecore-demo/dist/card.js' as any);
  }, []);

  useEffect(() => {
    if (templateName !== 'ComponentPage') return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.vitality.co.uk/dist/vds/css/presales.css?v=2025.12.9175638';

    document.head.appendChild(link);

    // 3. Inline overrides
    const style = document.createElement('style');
    style.innerHTML = `
      .vds-button {
        box-sizing: border-box;
        min-width: 100% !important;
        margin-right: unset !important;
        margin-bottom: unset !important;
      }
    `;

    document.head.appendChild(style);

    // Cleanup on route change
    return () => {
      link.remove();
      style.remove();
    };
  }, [templateName]);

  return (
    <>
      <Bootstrap {...pageProps} />
      {/*
        // Use the next-localization (w/ rosetta) library to provide our translation dictionary to the app.
        // Note Next.js does not (currently) provide anything for translation, only i18n routing.
        // If your app is not multilingual, next-localization and references to it can be removed.
      */}
      <I18nProvider
        lngDict={dictionary}
        locale={pageProps.page?.locale || scConfig.defaultLanguage}
      >
        <Component {...rest} />
      </I18nProvider>
    </>
  );
}

export default App;
