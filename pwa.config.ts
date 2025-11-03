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
      name: 'O+ Donations',
      shortName: 'O+',
      description: 'Find O+ blood donors',
      url: '/search/label/O-Positive?utm_source=homescreen',
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
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  origin: 'https://bloodbankplus.blogspot.com',
} satisfies Config;
