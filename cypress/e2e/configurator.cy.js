import configuratorPage from "../support/pages/configuratorPage"

describe('Configurator', {defaultCommandTimeout: 10000} , () => {
  it('Happy Path', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    configuratorPage.visit();
    configuratorPage.selectCar('ARONA');
    configuratorPage.selectFinish();
    configuratorPage.selectDefault();
    configuratorPage.checkDownloadLink();
  })
})