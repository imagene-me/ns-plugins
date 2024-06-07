module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@imagene.me/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @imagene.me/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@imagene': {
      // @imagene.me/nativescript-ox-button
      'nativescript-ox-button': {
        build: {
          script: 'nx run nativescript-ox-button:build.all',
          description: '@imagene.me/nativescript-ox-button: Build',
        },
      },
      // @imagene.me/nativescript-toast
      'nativescript-toast': {
        build: {
          script: 'nx run nativescript-toast:build.all',
          description: '@imagene.me/nativescript-toast: Build',
        },
      },
      // @imagene.me/nativescript-highcharts
      'nativescript-highcharts': {
        build: {
          script: 'nx run nativescript-highcharts:build.all',
          description: '@imagene.me/nativescript-highcharts: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'nativescript-ox-button': {
        script: 'nx run nativescript-ox-button:focus',
        description: 'Focus on @imagene.me/nativescript-ox-button',
      },
      'nativescript-toast': {
        script: 'nx run nativescript-toast:focus',
        description: 'Focus on @imagene.me/nativescript-toast',
      },
      'nativescript-highcharts': {
        script: 'nx run nativescript-highcharts:focus',
        description: 'Focus on @imagene.me/nativescript-highcharts',
      },
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
