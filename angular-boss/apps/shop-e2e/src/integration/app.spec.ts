import { getGreeting } from '../support/app.po';

describe('GIVEN: The shop web app', () => {
  beforeEach(() => cy.visit('/'));

  context('WHEN: user visits home page', () => {
    it('THEN: should display welcome message', () => {
      getGreeting().contains('Hello World!');
    });
    // needs the api server to run
    // yarn start:api
    it('THEN: should display welcome message from the API', () => {
      getGreeting().contains('and Welcome to api!');
    });
  });

});
