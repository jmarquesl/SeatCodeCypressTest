class cookiesModalPage{
    elements = {
        acceptCookiesBtn : () => cy.get("#onetrust-accept-btn-handler")
    }

    acceptCookies(){
        this.elements.acceptCookiesBtn().click();
    }
} 

export default new cookiesModalPage()