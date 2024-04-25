const products = require("../../Submission/products");

const assertProduct = (nthChild, product) => {
  cy.visit("http://localhost:5000");

  cy.get(`#products li:nth-child(${nthChild})`).should(
    "have.class",
    "product-grid-item"
  );

  cy.get(`#products li:nth-child(${nthChild}) img`)
    .invoke("attr", "src")
    .should("eq", product.images[0]);

  cy.get(`#products li:nth-child(${nthChild}) h3`).should(
    "have.text",
    product.name
  );

  cy.get(`#products li:nth-child(${nthChild}) p`).should(
    "have.text",
    product.description
  );

  cy.get(`#products li:nth-child(${nthChild}) button`).should(
    "have.text",
    "Buy now"
  );
};

describe("Display products using a Loop", () => {
  it("should display product 1 correctly", () => {
    const nthChild = 1;
    const product = products[0];
    assertProduct(nthChild, product);
  });

  it("should display product 2 correctly", () => {
    cy.visit("http://localhost:5000");

    const nthChild = 2;
    const product = products[1];
    assertProduct(nthChild, product);
  });

  it("should display product 3 correctly", () => {
    cy.visit("http://localhost:5000");

    const nthChild = 3;
    const product = products[2];
    assertProduct(nthChild, product);
  });

  it("should display product 4 correctly", () => {
    cy.visit("http://localhost:5000");

    const nthChild = 4;
    const product = products[3];
    assertProduct(nthChild, product);
  });

  it("should display product 5 correctly", () => {
    cy.visit("http://localhost:5000");

    const nthChild = 5;
    const product = products[4];
    assertProduct(nthChild, product);
  });

  it("should display product 6 correctly", () => {
    cy.visit("http://localhost:5000");

    const nthChild = 6;
    const product = products[5];
    assertProduct(nthChild, product);
  });

  it("should display product 7 correctly", () => {
    cy.visit("http://localhost:5000");

    const nthChild = 7;
    const product = products[6];
    assertProduct(nthChild, product);
  });

  it("should display product 8 correctly", () => {
    cy.visit("http://localhost:5000");

    const nthChild = 8;
    const product = products[7];
    assertProduct(nthChild, product);
  });

  it("should display product 9 correctly", () => {
    cy.visit("http://localhost:5000");

    const nthChild = 9;
    const product = products[8];
    assertProduct(nthChild, product);
  });

  it("should display product 10 correctly", () => {
    cy.visit("http://localhost:5000");

    const nthChild = 10;
    const product = products[9];
    assertProduct(nthChild, product);
  });

  it("should display product 11 correctly", () => {
    cy.visit("http://localhost:5000");

    const nthChild = 11;
    const product = products[10];
    assertProduct(nthChild, product);
  });

  it("should display product 12 correctly", () => {
    cy.visit("http://localhost:5000");

    const nthChild = 12;
    const product = products[11];
    assertProduct(nthChild, product);
  });
});
