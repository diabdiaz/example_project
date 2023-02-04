describe('Script sample', () => {
    before(() => {
        cy.visit('/');
    });
    it('Test', () => {
        cy.log('Hi')
    });
});