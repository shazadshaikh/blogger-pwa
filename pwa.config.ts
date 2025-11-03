import type { Config } from './types';

export default {
  id: '/',
  name: 'Blood Bank Plus',  // Yahan apna blog name daalo
  shortName: 'BBPlus',      // Short name daalo
  description: 'Blood Bank Plus blog for donations and awareness.',  // Apna description daalo
  direction: 'auto',
  language: 'en-US',        // Apni language daalo, jaise 'hi-IN' for Hindi
  backgroundColor: '#fff',  // Background color (HEX code)
  themeColor: '#ff0000',    // Theme color (aapka red color, jaise blood theme ke liye)
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',  // Home page URL
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [  // Optional: Quick links add karo, jaise blood groups ke labels
    {
      name: 'O+ Donations',
      shortName: 'O+',
      description: 'Find O+ blood donors',
      url: '/search/label/O-Positive?utm_source=homescreen',  // Apna label URL daalo
    },
    {
      name: 'A- Awareness',
      shortName: 'A-',
      description: 'A- blood info',
      url: '/search/label/A-Negative?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal nahi use karo kyuki no Cloudflare, so false rakho
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '',  // Blank rakho
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Yahan apna blog URL daalo (JsDelivr ke liye zaroori)
  origin: 'https://bloodbankplus.blogspot.com',
} satisfies Config;
