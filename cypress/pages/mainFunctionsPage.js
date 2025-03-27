class mainFunctions {
  get dropDownMainMenu() {
    return cy.get(".c-UazGY");
  }

  get dropDownProductsMenu() {
    return cy.get(".c-swQxl");
  }

  get buttonVoiceAI() {
    return cy.contains("Voice AI");
  }

  get voiceAIImage() {
    return cy.get('[id*="47IXUipwXaswvrGRT7yea1"] img');
  }

  get voiceAITitle() {
    return cy.get('[id*="47IXUipwXaswvrGRT7yea1"] h1');
  }

  get buttonSMSAPI() {
    return cy.contains("SMS API");
  }

  get imageSMSAPI() {
    return cy.get('[id="1Km13UufIOZIojgMFAN6R9"] img');
  }

  get titleSMSAPI() {
    return cy.get('[id="1Km13UufIOZIojgMFAN6R9"] h1');
  }

  get buttonChat() {
    return cy.get(".c-bpNouX");
  }

  get textAreaChat() {
    return cy.get(".c-fJsHXZ");
  }

  get userMessageChat() {
    return cy.get(".c-bCIlIy.c-bupPtx");
  }

  get assistantMessageChat() {
    return cy.get(".c-bCIlIy.c-khViZk");
  }

  get sendMessageButton() {
    return cy.get(".c-cODSYQ.c-gGVcDH");
  }

  openVoiceAIPage() {
    this.dropDownMainMenu.eq(1).click();
    this.dropDownProductsMenu.eq(0).click();
    this.buttonVoiceAI.click();
  }

  openSMSAPIPage() {
    this.dropDownMainMenu.eq(1).click();
    this.dropDownProductsMenu.eq(0).click();
    this.buttonSMSAPI.click();
  }

  clickButtonChat() {
    this.buttonChat.click();
    this.textAreaChat.type(
      "Hello! I just want to test your site for improving my QA skills"
    );
    this.sendMessageButton.click();
  }
}

module.exports = new mainFunctions();
