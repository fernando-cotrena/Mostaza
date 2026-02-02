import { JoinUsFormPage } from '../pages/join-us-form-page';

export class JoinUsFormActions {
  constructor() {
    this.page = new JoinUsFormPage();
  }

  openPage() {
    cy.visit(Cypress.env('trabajaUrl'));
    return this;
  }

  fillPersonalData({ name, surname, cuit, birthday, email, phone }) {
    this.page.typeName(name);
    this.page.typeSurname(surname);
    this.page.typeCuit(cuit);
    this.page.typeBirthday(birthday);
    this.page.typeEmail(email);
    this.page.typePhone(phone);
    return this;
  }

  fillEducation({ studies, career }) {
    this.page.selectStudies(studies);
    this.page.typeCareer(career);
    return this;
  }

  fillPreference({ position }) {
    this.page.selectPreference(1);
    return this;
  }

  fillAddress({ street, number, location, state }) {
    this.page.typeStreet(street);
    this.page.typeNumber(number);
    this.page.typeLocation(location);
    this.page.typeState(state);
    return this;
  }

  fillAvailability({ time }) {
    this.page.selectTime(time);
    return this;
  }

  uploadVideo(filePath) {
    this.page.uploadVideo(filePath);
    return this;
  }

  submitApplication() {
    this.page.clickSend();
    return this;
  }

  goBack() {
    this.page.clickBack();
    return this;
  }
}
