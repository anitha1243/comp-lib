describe('Navigate to Groups -> Billing Tab', function () {
    before(function (){
        cy.fixture('locators').then(function (locators){
            this.locators=locators
        })
    })

    it('Settings -> Groups', function () {
        cy.login(this.locators)
        cy.clickProfileTab(this.locators.profileTabLoc)
        cy.clickTab(this.locators.settingsTabLoc)
        cy.clickTab(this.locators.groupsTabLoc)
        cy.get(this.locators.muiTabLoc).contains(new RegExp(this.locators.billingTabLoc,"g"))
    })
    after(function(){
        cy.logout(this.locators)
    })
})