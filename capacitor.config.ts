import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.winner.app',
  appName: 'winner-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
