import homePage from '../support/pages/HomePage';
import contatoPage from '../support/pages/ContatoPage';

describe('Fluxo de Acesso - Automation Exercise', () => {

    beforeEach(() => {
      homePage.abrirNavegador();
      homePage.validarQueCarregou();
      homePage.irParaContato();
    });

  it('Deve navegar da Home para a tela de Contato corretamente', () => {
    contatoPage.validarPaginaDeContato();
  });

    it('Deve tentar enviar uma mensagem de contato', () => {
      contatoPage.preencherContato('Teste', 'emailerrado@teste.com', 'Assunto Teste', 'Mensagem Teste', 'teste.txt');
    });
});