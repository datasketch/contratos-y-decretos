import Document, { Html, Head, Main, NextScript } from 'next/document';
import Meta from '../components/meta';

const config = require('../next.config');
const GA_TRACKING_ID = 'UA-115081321-1';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <base href={config.basePath + '/'} />
          <Meta />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="font-lato antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
