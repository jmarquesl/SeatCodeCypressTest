class configuratorPage{

    elements = {
    
        carList : () => cy.get('seat-car-selector-list-item'),
        finishSelector : () => cy.get('.start-config-button-container').children('seat-button[class="seat-button-text"]').first(),
        default : () => cy.get('b:visible').contains('Siguiente')
    }

    visit(){
        cy.visit("seat-cc/configurator/LIVE/003/DEFAULT/es/car-selector");
    }
    
    selectCar(carName){ 
        this.elements.carList().contains(carName).click();
    }

    selectFinish(){
        this.elements.finishSelector().click();
    }
    selectDefault(){
        this.elements.default().scrollIntoView({ offset: { top: 150, left: 0 } }).click();
        this.elements.default().scrollIntoView({ offset: { top: 150, left: 0 } }).click();
        this.elements.default().scrollIntoView({ offset: { top: 150, left: 0 } }).click();
        this.elements.default().scrollIntoView({ offset: { top: 150, left: 0 } }).click();
    }

    checkDownloadLink(){
        cy.get('a').contains('descarga tu configuración aquí').should('be.visible');
    }
}

export default new configuratorPage()