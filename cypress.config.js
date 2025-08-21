
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6ni4ti',
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    setupNodeEvents(on, config) {
    },
  },
});
