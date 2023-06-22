describe('Configurar Seat Car', () => {
  const carModel = 'Modelo Mii electric';
  let referenceId = '';

  before(() => {
    cy.visit('https://www.seat.com/carworlds/mii-electric.html');
  });

  it('Configurar Mii electric con opciones por defecto', () => {
    cy.get('button[data-test="configuratorButton"]').click();
    cy.contains('h3', carModel).click();
    cy.get('button[data-test="addToCartButton"]').click();
    cy.get('.sc-ekynYh.eDxhUP > span').invoke('text').then((text) => {
      referenceId = text.trim();
    });
  });
});
