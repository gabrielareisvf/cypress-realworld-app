import userData from '../../fixtures/user-data.json';
import LoginPage from '../../pages/loginPage';
import TransactionHistoryPage from '../../pages/transactionHistoryPage';

const loginPage = new LoginPage();
const transactionHistoryPage = new TransactionHistoryPage();

describe('Transaction History', () => {
  
  // Test with userSuccess2 (no transactions)
  it('Should show the "Create Transaction" button when there are no transactions (João)', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess2.username, userData.userSuccess2.password);
    loginPage.checkFirstLoginDonePage();

    transactionHistoryPage.mineTransactionNavButton();
    cy.get('[data-test="transaction-list-empty-create-transaction-button"], [data-test="transaction-list"]').should('exist');
    cy.get('[data-test="transaction-list-empty-create-transaction-button"]').should('be.visible');
    cy.get('[data-test="transaction-list"]').should('not.exist');
  });

  // Test with userSuccess1 (with transactions)
  it('Should show the transaction list when there are transactions (userSuccess1)', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess1.username, userData.userSuccess1.password);
    loginPage.checkFirstLoginDonePage();
    transactionHistoryPage.mineTransactionNavButton();
    cy.get('[data-test="transaction-list-empty-create-transaction-button"], [data-test="transaction-list"]').should('exist');
    cy.get('[data-test="transaction-list"]').should('be.visible');
    cy.get('[data-test="transaction-list-empty-create-transaction-button"]').should('not.exist');
  });

});
