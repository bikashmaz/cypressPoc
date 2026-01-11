describe('OrangeHRM Logout Tests', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('img[alt="company-branding"]').should('be.visible');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.contains('button', 'Login').click();

    cy.contains('Dashboard').should('be.visible');
  });

  it('Logout Functionality', () => {
  cy.get('i.oxd-userdropdown-icon').should('be.visible').click();
  cy.get('a.oxd-userdropdown-link').contains('Logout').should('be.visible').click();
  cy.get('img[alt="company-branding"]').should('be.visible');
  });

});