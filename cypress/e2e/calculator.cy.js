describe("calc test", () => {
  it("should check that 7 + 2 = 9", () => {
    // 1. ARRANGE
    cy.visit("http://127.0.0.1:5500/index.html");

    // 2. ACT
    cy.get(".calculator__inputs--seven").click();
    cy.get(".calculator__inputs--plus").click();
    cy.get(".calculator__inputs--two").click();
    cy.get(".calculator__inputs--equals").click();

    // 3. ASSERT
    cy.get(".calculator__output").should("contain", 9);
  });

  it("should check that 17 - 3 = 14", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get(".calculator__inputs--one").click();
    cy.get(".calculator__inputs--seven").click();
    cy.get(".calculator__inputs--minus").click();
    cy.get(".calculator__inputs--three").click();
    cy.get(".calculator__inputs--equals").click();

    cy.get(".calculator__output").should("have.text", "14");
  });

  it("should check that 10 * 4 = 40", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get(".calculator__inputs--one").click();
    cy.get(".calculator__inputs--zero").click();
    cy.get(".calculator__inputs--multiply").click();
    cy.get(".calculator__inputs--four").click();
    cy.get(".calculator__inputs--equals").click();

    cy.get(".calculator__output").should("have.text", "40");
  });

  it("should check that 9 / 3 = 3", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get(".calculator__inputs--nine").click();
    cy.get(".calculator__inputs--divide").click();
    cy.get(".calculator__inputs--three").click();
    cy.get(".calculator__inputs--equals").click();

    cy.get(".calculator__output").should("contain", "3");
  });

  it("should check that the operator is visible", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get(".calculator__inputs--nine").click();
    cy.get(".calculator__inputs--divide").click();
    cy.get(".calculator__inputs--three").click();

    cy.get(".calculator__output-symbol").should("contain", "÷");
  });


  it("should check that users can't enter more than one decmial", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get(".calculator__inputs--zero").click();
    cy.get(".calculator__inputs--decimal").click();
    cy.get(".calculator__inputs--three").click();
    cy.get(".calculator__inputs--decimal").click();

    cy.get(".calculator").should("not.contain", "0.3.");
  });

  it("should check that the most recent operator is the only one in use", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get(".calculator__inputs--nine").click();
    cy.get(".calculator__inputs--divide").click();
    cy.get(".calculator__inputs--multiply").click();
    cy.get(".calculator__inputs--three").click();

    cy.get(".calculator__output-symbol").should("not.contain", "÷");
  });

  it("should check that 07734 adds the hello spin class", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get(".calculator__inputs--zero").click();
    cy.get(".calculator__inputs--seven").click();
    cy.get(".calculator__inputs--seven").click();
    cy.get(".calculator__inputs--three").click();
    cy.get(".calculator__inputs--four").click();

    cy.get(".calculator").should("have.class", "hello-spin");
  });
});
