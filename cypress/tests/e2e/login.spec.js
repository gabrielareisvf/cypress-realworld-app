import userData from "../../fixtures/user-data.json";
import LoginPage from "../../pages/loginPage";

const loginPage = new LoginPage();

describe("Test Login", () => {
  it("Login com sucesso", () => {
    loginPage.acessLoginPage();
    loginPage.loginWithUser(userData.userSuccess1.username, userData.userSuccess1.password);
    loginPage.checkFirstLoginDonePage();
  });

  it("Login com falha", () => {
    loginPage.acessLoginPage();
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password);
    loginPage.checkAccessInvalid();
  });
});
