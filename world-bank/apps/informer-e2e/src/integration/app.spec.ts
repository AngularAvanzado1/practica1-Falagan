import { getHeaderTitle, checkMinTableResults, getInformerContinentalTable } from '../support/app.po';

describe('GIVEN: The informer web app', () => {
  beforeEach(() => cy.visit('/'));
  context('WHEN: user visits home page', () => {
    it('THEN: should display title World Bank App and Informer Section', () => {
      getHeaderTitle().contains('World Bank App');
    });
    it('THEN: should display a table with results from world bank api: Continental Regions at least one row', () => {
     checkMinTableResults(getInformerContinentalTable(),0);
    });
  });
});
