import type { Config } from './types';

export default {
  id: '/',
  name: 'Blood Bank Plus',
  shortName: 'BBPlus',
  description: 'Blood Bank Plus blog for donations and awareness.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#ff0000',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Donation Tips',
      shortName: 'Donate',
      description: 'Tips for blood donation',
      url: '/search/label/donation?utm_source=homescreen',
    },
    {
      name: 'Blood Banks',
      shortName: 'Banks',
      description: 'List of blood banks',
      url: '/search/label/banks?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  origin: 'https://bloodbankplus.blogspot.com',
} satisfies Config;
