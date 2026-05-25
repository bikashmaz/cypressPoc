describe('OrangeHRM Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      timeout: 10000
    });
    cy.contains('button', 'Login', { timeout: 8000 }).should('be.visible');
  });

  it('No Credentials', () => {
    cy.contains('button', 'Login').click();
    cy.wait(2000);
    cy.contains('Required').eq(0).should('be.visible');
  });

  it('Only Username', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.contains('button', 'Login').click();

    cy.contains('Required').should('be.visible');
  });

  it('Only Password', () => {
    cy.get('input[name="password"]').type('admin123');
    cy.contains('button', 'Login').click();

    cy.contains('Required').should('be.visible');
  });

  it('Wrong Credentials', () => {
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.contains('button', 'Login').click();

    cy.contains('Invalid credentials').should('be.visible');
  });

  it('Valid Credentials', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.contains('button', 'Login').click();

    cy.contains('Dashboard').should('be.visible');
  });

});
