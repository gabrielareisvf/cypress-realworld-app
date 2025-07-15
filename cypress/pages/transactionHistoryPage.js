class TransactionHistoryPage {
  selectorsList() {
    return {
      mineTransactionNavButton: "[data-test='nav-personal-tab']",
      noTransactionButton: "[data-test='transaction-list-empty-create-transaction-button']",
      transactionList: "[data-test='transaction-list']"
    }
  }

    // Clicks on the "My Transactions" tab
    mineTransactionNavButton() {
    cy.get(this.selectorsList().mineTransactionNavButton).click();
  }

    // Checks if the "Create a Transaction" button is visible (waits for the element to be present)
  noTransactionStatus() {
  cy.get('body').then(($body) => {
    const selector = this.selectorsList().noTransactionButton;
    const element = $body.find(selector);

    if (element.length === 0) {
      cy.log('ℹ️ O botão de "Create a Transaction" não existe — provavelmente há transações.');
    } else if (!element.is(':visible')) {
      cy.log('ℹ️ O botão de "Create a Transaction" existe, mas não está visível.');
    } else {
      cy.log('✔️ O botão de "Create a Transaction" existe e está visível — não há transações.');
    }
  });
}

    // Checks if the transaction list is visible
    transactionListStatus() {
    cy.get(this.selectorsList().transactionList)
      .should('be.visible')
      .then(() => {
        cy.log('✔️ A lista de transações existe e está visível.');
      });
  }
}

export default TransactionHistoryPage;
