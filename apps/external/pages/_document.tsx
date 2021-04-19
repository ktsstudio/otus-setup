import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
  Html,
} from 'next/document';
import * as React from 'react';

import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document<
  DocumentProps & { styleTags: Array<React.ReactElement> }
> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...initialProps, ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
