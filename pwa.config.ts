export default {
  id: '/',
  name: 'Blood Bank Plus',
  shortName: 'BloodBank+',
  description: 'Find blood donors, request blood, save lives - Blood Bank Plus',
  direction: 'ltr',
  language: 'en-US',
  backgroundColor: '#ffffff',
  themeColor: '#d32f2f',  // Red color (blood theme)
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Request Blood',
      shortName: 'Request',
      description: 'Urgent blood request form',
      url: '/p/request-blood.html?utm_source=homescreen',
    },
    {
      name: 'Find Donor',
      shortName: 'Donors',
      description: 'Search blood donors near you',
      url: '/search/label/Donors?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    oneSignalEnabled: false, // JsDelivr mein OneSignal nahi chalega
  },
  origin: 'https://bloodbankplus.blogspot.com', // YEH JARURI HAI!
} satisfies Config;
