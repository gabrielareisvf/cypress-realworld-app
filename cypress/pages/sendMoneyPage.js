class SendMoneyPage {
  selectorsList() {
    return {
      newTransactionButton: "[data-test='nav-top-new-transaction']",
      userListItemPrefix: "[data-test^='user-list-item-']",
      amountMoney: "#amount",
      noteMoney: "#transaction-create-description-input",
      submitSendMoney: "[data-test='transaction-create-submit-payment']",
      successMessage: "[data-test='toast-success']"
    }
  }

  newTransactionButtonPage() {
    cy.get(this.selectorsList().newTransactionButton).click()
  }

  choosePersonPage() {
    cy.get(this.selectorsList().userListItemPrefix).first().click()
  }

  personToSendMoneyPage(amount, description) {
    cy.get(this.selectorsList().amountMoney).type(amount)
    cy.get(this.selectorsList().noteMoney).type(description)
  } 

  submitSendMoneyPage() {
    cy.get(this.selectorsList().submitSendMoney).click()
  }
} 

export default SendMoneyPage
