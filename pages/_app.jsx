/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import https from 'https';
import 'moment/locale/fr';
import { DefaultSeo } from 'next-seo';
import PropTypes from 'prop-types';
import SEO from '../next-seo.config';
import '../styles/global.scss';
import { insertAnalytics, insertAxeptio } from '../axeptio';

if (process.env.NODE_ENV === 'development') {
  axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}

config.autoAddCss = false;

library.add(fas, far, fab);

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component }) {
  if (typeof window !== 'undefined') {
    if (!window.axeptioSettings) {
      window.axeptioSettings = {
        clientId: '608a63fa96c7dd3c31e28d9b',
      };

      insertAxeptio(document, 'script');

      window._axcb = window._axcb || [];
      window._axcb.push((axeptio) => {
        axeptio.on('cookies:complete', (choices) => {
          if (choices.google_analytics) {
            insertAnalytics(
              window,
              document,
              'script',
              'https://www.google-analytics.com/analytics.js',
              'ga',
            );

            window.ga('create', 'UA-119345981-2', 'auto');
            window.ga('send', 'pageview');
          }
        });
      });
    }
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
};
