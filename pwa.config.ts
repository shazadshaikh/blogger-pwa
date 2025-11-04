import type { Config } from './types';

export default {
  id: '/',
  name: 'BloodBank+',
  shortName: 'BloodBank+',
  description: 'Blood Bank Plus - Complete free blood bank management software.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#071826',
  themeColor: '#071826',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'About',
      shortName: 'About',
      description: 'BloodBank+ About Us',
      url: '/p/about.html',
    },
    {
      name: 'Disclaimer',
      shortName: 'Diclaimer',
      description: 'BloodBank+ Dislaimer',
      url: '/p/disclaimer.html',
    },
    {
      name: 'Privacy Policy',
      shortName: 'Privacy',
      description: 'BloodBank+ Privacy Policy',
      url: '/p/privacy-policy.html',
    },
    {
      name: 'Term & Conditions',
      shortName: 'T&C',
      description: 'BloodBank+ Term & Conditions',
      url: '/p/terms-conditions.html',
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
