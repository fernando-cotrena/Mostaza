import { JoinUsFormActions } from '../../support/actions/join-us-form-actions'
import { JoinUsFormAsserts } from '../../support/asserts/join-us-form-asserts'

describe('Join Us Form', () => {
  const form = new JoinUsFormActions()
  const formAssert = new JoinUsFormAsserts()

  beforeEach(() => {
    form.openPage()
  })
  it('fills all sections and submits successfully', () => {
    form
      .fillPersonalData({
        name: 'Nicolas',
        surname: 'Dondo',
        cuit: '20312345678',
        birthday: '04/04/1980',
        email: 'nicolas.dondo@example.com',
        phone: '1123456789',
      })
      .fillEducation({
        studies: 'Universitario en curso',
        career: 'Ingeniería en Sistemas',
      })
      .fillPreference({preference:'Restaurantes'}) // revisar implementacion 
      .fillAddress({
        street: 'Calle Falsa',
        number: '1234',
        location: 'Ciudad de Buenos Aires',
        state: 'Ciudad Autónoma de Buenos Aires',
      })
      .fillAvailability({
        time: 'Tarde',
      })
    //  .uploadVideo({ filePath: 'videos/video-intro.mp4' })
    //   .submitApplication()
    formAssert.shouldSeeSuccessMessage()
  })
})
