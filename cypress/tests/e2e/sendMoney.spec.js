import userData from "../../fixtures/user-data.json";
import LoginPage from "../../pages/loginPage";
import SendMoneyPage from "../../pages/sendMoneyPage";

const loginPage = new LoginPage()
const sendMoneyPage = new SendMoneyPage()

describe('Enviar Dinheiro - Saldo Suficiente', () => {
  it.only('Deve enviar dinheiro com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess1.username, userData.userSuccess1.password)
    loginPage.checkFirstLoginDonePage()
    sendMoneyPage.newTransactionButtonPage()
    sendMoneyPage.choosePersonPage() 
    sendMoneyPage.personToSendMoneyPage('500', 'Pagamento')
    sendMoneyPage.submitSendMoneyPage()
  })
})
