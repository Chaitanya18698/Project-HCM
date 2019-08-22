export class ContactRequest {
    personalData : PersonalData
    requestType : any = ''
    text : string = ''
}

class PersonalData {
    email: string = ''
    mobile : string = ''
    country : string = ''
}