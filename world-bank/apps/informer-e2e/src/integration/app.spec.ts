import { getGreeting } from '../support/app.po';

describe('informer', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to informer!');
  });
});
