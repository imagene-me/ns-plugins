import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: '@imagene.me/nativescript-google-login',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  ios: {
    discardUncaughtJsExceptions: true,
  },
} as NativeScriptConfig;
