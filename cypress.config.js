const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.mostazaweb.com.ar',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      return config
    },
    env: {
      trabajaUrl: 'https://videocv.mostazaweb.com.ar/',
    },
  },
})
