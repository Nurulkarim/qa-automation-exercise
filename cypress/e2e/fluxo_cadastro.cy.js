import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';


describe('Fluxo de Acesso - Automation Exercise', () => {

  beforeEach(() => {
    homePage.abrirNavegador();
    homePage.validarQueCarregou();
    homePage.irParaLogin();
  });

  it('Deve navegar da Home para a tela de Login corretamente', () => {
    loginPage.validarPaginaDeLogin();
  });

  it('Deve tentar logar com usuário inválido', () => {
    loginPage.preencherLogin('emailerrado@teste.com', 'senha123');
  });

  it('Deve tentar cadastrar com usuário inválido', () => {
    loginPage.preencherCadastroErro('teste', 'teste');
  });

  it('Deve tentar cadastrar com usuário válido', () => {
    loginPage.preencherCadastroSucesso('teste','teste@teste.com');
  });

});