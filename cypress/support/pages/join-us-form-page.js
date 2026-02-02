export class JoinUsFormPage {
  constructor() {
    this.selectors = {
      name: '#name',
      surname: '#surname',
      cuit: '#cuit',
      birthday: '#birthday',
      email: '#email',
      phone: '#phone',
      studies: '#study',
      career: '#career',
      preference: '#preference',
      street: '#street',
      number: '#number',
      location: '#location',
      state: '#state',
      timeAvailability: '#time-availability',
      videoFile: '#video-file',
      sendForm: '#send-form',
      backButton: 'body > div > div > div > div > header > a.back-button',
    };
  }

  // Métodos de interacción básica
  typeName(value) {
    cy.get(this.selectors.name).scrollIntoView().clear().type(value);
  }

  typeSurname(value) {
    cy.get(this.selectors.surname).scrollIntoView().clear().type(value);
  }

  typeCuit(value) {
    cy.get(this.selectors.cuit).scrollIntoView().clear().type(value);
  }

  typeBirthday(value) {
    cy.get(this.selectors.birthday).scrollIntoView().clear().type(value);
  }

  typeEmail(value) {
    cy.get(this.selectors.email).scrollIntoView().clear().type(value);
  }

  typePhone(value) {
    cy.get(this.selectors.phone).scrollIntoView().clear().type(value);
  }

  selectStudies(value) {
    cy.get(this.selectors.studies).select(value);
  }

  typeCareer(value) {
    cy.get(this.selectors.career).scrollIntoView().clear().type(value);
  }

  selectPreference(value) {
    cy.get(this.selectors.preference).select(value);
  }

  typeStreet(value) {
    cy.get(this.selectors.street).scrollIntoView().clear().type(value);
  }

  typeNumber(value) {
    cy.get(this.selectors.number).scrollIntoView().clear().type(value);
  }

  typeLocation(value) {
    cy.get(this.selectors.location).scrollIntoView().clear().type(value);
  }

  typeState(value) {
    cy.get(this.selectors.state).scrollIntoView().clear().type(value);
  }

  selectTime(value) {
    cy.get(this.selectors.timeAvailability).scrollIntoView().select(value);
  }

  uploadVideo(filePath) {
    cy.get(this.selectors.videoFile).attachFile(filePath);
  }

  clickSend() {
    cy.get(this.selectors.sendForm).click();
  }

  clickBack() {
    cy.get(this.selectors.backButton).click();
  }
}
