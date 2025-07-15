class UserRegistration {
  selectorsList() {
    return {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      passwordAlertField: "#password-helper-text",
      passwordConfirmField: "[name='confirmPassword']",
      passwordConfirmAlertField: "#confirmPassword-helper-text",
      submitButton: "[type='submit']"
    }
  }
  signUpButtonPage() {
    cy.get('[href="/signup"]').click()
  }

  fillAccountDetails(firstName, lastName, username, password, passwordConfirm) {
    const s = this.selectorsList()
    cy.get(s.firstNameField).clear().type(firstName)
    cy.get(s.lastNameField).clear().type(lastName)
    cy.get(s.usernameField).clear().type(username)
    cy.get(s.passwordField).clear().type(password)
    cy.get(s.passwordConfirmField).clear().type(passwordConfirm)
  }

  fillAccountFailPasswordBlank(firstName, lastName, username) {
    const s = this.selectorsList()
    cy.get(s.firstNameField).clear().type(firstName)
    cy.get(s.lastNameField).clear().type(lastName)
    cy.get(s.usernameField).clear().type(username)
    cy.get(s.passwordConfirmField).click()
    cy.get(s.passwordField).click()
    cy.get(s.passwordConfirmField).click()
    cy.get(s.passwordConfirmAlertField).should('be.visible')
    cy.get(s.passwordAlertField).should('be.visible')
  }

  fillAccountMustContain(firstName, lastName, username, password, passwordConfirm) {
    const s = this.selectorsList()
    cy.get(s.firstNameField).clear().type(firstName)
    cy.get(s.lastNameField).clear().type(lastName)
    cy.get(s.usernameField).clear().type(username)
    cy.get(s.passwordField).clear().type(password)
    cy.get(s.passwordConfirmField).clear().type(passwordConfirm)
    cy.get(s.passwordAlertField).should('be.visible')
  }

  fillAccountWrongPassword(firstName, lastName, username, password, passwordConfirm) {
    const s = this.selectorsList()
    cy.get(s.firstNameField).clear().type(firstName)
    cy.get(s.lastNameField).clear().type(lastName)
    cy.get(s.usernameField).clear().type(username)
    cy.get(s.passwordField).clear().type(password)
    cy.get(s.passwordConfirmField).clear().type(passwordConfirm)
    cy.get(s.passwordConfirmAlertField).should('be.visible')
  }

  submitSignUpPage() {
    cy.get(this.selectorsList().submitButton).click()
  }
}

export default UserRegistration
