import pageData from "../support/pageobject";
describe("Sports Test Cases",()=>{

    it("First Page Title Verification",()=>{
       cy.visit("/")
       cy.title().should('include', 'Online Sports Betting')
    })

    it("Scenario 2",()=>{
       cy.get("a").contains(" Football").eq(0).click({force:true})
       cy.get(pageData.DailyList).click({force:true})
       cy.wait(5000)
 /*
      cy.get('[data-test-id="Carousel.item-1"]').then(($btn)=>{
         if($btn.is(":enabled")){
            cy.log("its active")
         }
         else{
            cy.log("its not active ")
         }
      })
      */
      cy.get('[data-test-id="Carousel.item-1"]').find("a").eq(1).then(element =>{
         cy.wrap(element).should('have.class', "top-nav-links__link-dark--active");
      })
    })

    it("Scenario 3",()=>{
       cy.get(pageData.SelButton).click({force:true})
       cy.get(pageData.Selection).invoke("text").then(element=>{
       expect(element).to.include("Selection")
       })
    })

    it("Scenario 4",()=>{
       cy.get(pageData.input).type("1")
       cy.get(pageData.login).should("be.enabled").click({force:true})
       cy.get(pageData.VerifyLogin).should("be.visible")
       })
})