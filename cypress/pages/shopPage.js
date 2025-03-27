class ShopPage {
  get buttonShop() {
    return cy.get("#HeaderMenu-shop");
  }

  get buttonAddToCart() {
    return cy.get("[id*=product-grid6960027533390-submit]");
  }

  get buttonCheckOut() {
    return cy.get("#CartDrawer-Checkout");
  }

  get dropDownSort() {
    return cy.get("#SortBy");
  }

  get priceList() {
    return cy.get('[id="product-grid"] [class*="price-item--sale"]');
  }

  get titleList() {
    return cy.get(".card__heading.h5");
  }

  get titleSwagAlert() {
    return cy.get('[href="/products/telnyx-pullover-hoodie"]');
  }

  get formOfWareAtCart() {
    return cy.get(".i4DWM");
  }

  get pictureOfWareSwagAlert() {
    return cy.get(".product__media.media.media--transparent");
  }

  get titleOfWareSwagAlert() {
    return cy.get(".product__title");
  }

  get priceOfWareSwagAlert() {
    return cy.get("#price-template--14828910936142__main");
  }

  get buttonSearch() {
    return cy.get(".modal__toggle-open.icon.icon-search");
  }

  get inputSearch() {
    return cy.get("#Search-In-Modal");
  }

  get wareHat() {
    return cy.get(
      '[href="/products/telnyx-classic-hat?_pos=1&_sid=5f5dbd22e&_ss=r"]'
    );
  }

  get searchResult() {
    return cy.get("#ProductCountDesktop");
  }

  get cartDeleteButton() {
    return cy.get(".icon.icon-remove");
  }

  get cartEmptyText() {
    return cy.get(".cart__empty-text");
  }

  get buttonContinueShopping() {
    return cy.get(".drawer__close");
  }

  visitShopPage() {
    cy.visit("https://shop.telnyx.com/");
  }

  clickButtonShop() {
    this.buttonShop.click();
  }

  addToCart() {
    this.buttonAddToCart.click();
    this.buttonCheckOut.click();
  }

  sortByPriceDescending() {
    this.dropDownSort.select("price-descending");
  }

  sortByPriceAscending() {
    this.dropDownSort.select("price-ascending");
  }

  sortByTitleAscending() {
    this.dropDownSort.select("title-ascending");
  }

  sortByTitleDescending() {
    this.dropDownSort.select("title-descending");
  }

  clickOnSwagAlert() {
    this.titleSwagAlert.eq(0).click();
  }

  deleteWareAtCart() {
    this.buttonAddToCart.click();
    this.cartDeleteButton.click();
  }

  searchHat() {
    this.buttonSearch.click();
    this.inputSearch.type("hat");
    this.inputSearch.type("{enter}");
  }
}

module.exports = new ShopPage();
