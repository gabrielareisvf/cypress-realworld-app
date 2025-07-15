import UserRegistration from '../../pages/userRegistration'
import LoginPage from '../../pages/loginPage'

describe('User Registration Tests', () => {
  const userRegistration = new UserRegistration()
  const loginPage = new LoginPage()

  it('Register Account Success', () => {
    loginPage.accessLoginPage()
    userRegistration.signUpButtonPage()
    userRegistration.fillAccountDetails('Gabriela', 'Reis', 'gabsbank', 'test2101', 'test2101')
    userRegistration.submitSignUpPage()
  })

  it('Register Account Fail (Password Blank)', () => {
    loginPage.accessLoginPage()
    userRegistration.signUpButtonPage()
    userRegistration.fillAccountFailPasswordBlank('Gabs', 'Reis', 'gabsbank')
  })

  it('Register Account Fail (Password Must Contain)', () => {
    loginPage.accessLoginPage()
    userRegistration.signUpButtonPage()
    userRegistration.fillAccountMustContain('Gabs', 'Reis', 'gabsbank', '034', '034')
  })

  it('Register Account Fail (Password Wrong)', () => {
    loginPage.accessLoginPage()
    userRegistration.signUpButtonPage()
    userRegistration.fillAccountWrongPassword('Gabs', 'Reis', 'gabsbanck', '034test', '035test')
  })
})
