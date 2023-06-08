import cookiesModalPage from "../support/pages/components/cookiesModalPage";
import configuratorPage from "../support/pages/configuratorPage"

describe('Configurator', {defaultCommandTimeout: 10000} , () => {
  it('Happy Path', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    configuratorPage.visit();
    cookiesModalPage.acceptCookies();
    configuratorPage.selectCar('ARONA');
    configuratorPage.selectFinish();
    configuratorPage.selectDefault();
    configuratorPage.checkDownloadLink();
  })
})