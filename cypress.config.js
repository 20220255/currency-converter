import { defineConfig } from 'cypress';

module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 1440,
  video: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    excludeSpecPattern:['**/1-getting-started/**', '**/2-advanced-examples/**'],
    specPattern: 'cypress/e2e/**/*.{js,ts,jsx,tsx}',
    // setupNodeEvents(on, config) {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
