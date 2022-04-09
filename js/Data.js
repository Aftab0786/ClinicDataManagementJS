//Importing the neccessary module
let prompt = require(`prompt-sync`);

//Created contact class(UC1)
class Contact {
    //Declaring the properties(UC1)
    PatientName;
    PatientId;
    address;
    city;
    state;
    Age;
    phoneNumber;
    emailId;

    //Initializing the parameterized constructor of class using constructor keyword(UC1)
    constructor(...parameters) {
        this.PatientName = parameters[0];
        this.PatientId = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.Age = parameters[5];
        this.phoneNumber = parameters[6];
        this.emailId = parameters[7];
    }

    //Method to return values in string format
    toString() {
        return `Patient Name: ${this.PatientName}\tPatient Id: ${this.PatientId}\nAddress: ${this.address}\tCity: ${this.city}\tState: ${this.state}\nAge: ${this.Age}\tPhone Number: ${this.phoneNumber}\nEmail-Id: ${this.emailId}\n`;
    }
}

//Displaying the welcome message
console.log("Welcome To The AddressBook Program Using Js")

//Function to return object of added contacts(UC1)
function returnAddedContact(PatientName, PatientId, address, city, state, Age, phoneNumber, emailId) {
    let contact
    try {
        //Object for class
        contact = new Contact(PatientName, PatientId, address, city, state, Age, phoneNumber, emailId);
    } catch (e) {
        console.error(e)
    }
    return contact;
}

//Function to get the details of the contact from the user(UC1 && UC2)
function getContactDetails() {
    try {
        //Regex patterns for validating contact details(UC2)
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        let IdPattern = new RegExp('^[0-9]{1,}$');
        let addressPattern = new RegExp('^[A-Za-z]{4,}$');
        let AgePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
        let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
        //Validating first name(UC2)
        let PatientName = prompt('Enter Your PatientName Start With Capital : ');
        if (!namePattern.test(PatientName))
            throw 'First name should have minimum 3 characters';
        //Validating last name(UC2)
        let PatientId = prompt('Enter Your Id : ');
        if (!IdPattern.test(PatientId))
            throw 'Should be Number';
        //Validating address(UC2)
        let address = prompt('Enter Your Address : ');
        if (!addressPattern.test(address))
            throw 'Address should have minimum 4 characters';
        //Validating city name(UC2)
        let city = prompt('Enter Your City Name: ');
        if (!addressPattern.test(city))
            throw 'City should have minimum 4 characters';
        //Validating states name(UC2)
        let state = prompt('Enter Your State Name : ');
        if (!addressPattern.test(state))
            throw 'State should have minimum 4 characters';
        //Validating zip code(UC2)
        let Age = prompt('Enter Your Zip Code : ');
        if (!AgePattern.test(Age))
            throw 'Age is not valid';
        //Validating phone number(UC2)
        let phoneNumber = prompt('Enter Your Phone Number : ');
        if (!phoneNumPattern.test(phoneNumber))
            throw 'Phone number is not valid';
        //Validating email id(UC2)
        let emailId = prompt('Enter Your Email Id : ');
        if (!emailIdPattern.test(emailId))
            throw 'Email id is not valid';
        let contactDetails = returnAddedContact(PatientName, PatientId, address, city, state, Age, phoneNumber, emailId);
        console.log("\nDetails Of Contacts");
        console.log(contactDetails.toString());
    } catch (e) {
        console.error(e);
    }
}

//Calling the function(UC1)
//getContactDetails();
//let prompt = require(`prompt-sync`)({ sigint: true });
const fs = require('fs')
function readfile() 
{
  
  let raw = fs.readFileSync('./add.json','utf8');
  //The JSON.parse() method parases a JSON string, constructing the javascript values or object described by the string...
  let punishments= JSON.parse(raw);
  console.log(punishments);
  console.log("raw",raw);
  return punishments;
  
}
function write(punishments){
 // The stringify() method to convert javascript objects in to string and display it....
  let data = JSON.stringify(punishments);
  console.log("data",data);
 return fs.writeFileSync('./add.json', data);
  
}

//Created contact class(UC1)
class Contact {
    //Declaring the properties(UC1)
    PatientName;
    PatientId;
    address;
    city;
    state;
    Age;
    phoneNumber;
    emailId;

    //Initializing the parameterized constructor of class using constructor keyword(UC1)
    constructor(...parameters) {
        //Regex patterns for validating contact details(UC2&&UC3)
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        let IdPattern = new RegExp('^[0-9]{1,}$');
        let addressPattern = new RegExp('^[A-Za-z0-9]{4,}$');
        let AgePattern = new RegExp('^[0-9]{1,}$');
        let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
        let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
        if (!namePattern.test(parameters[0]))
            throw 'Patient name should have minimum 3 characters';
        this.PatientName = parameters[0];
        //this.PatientId = parameters[1];
        if(!IdPattern.test(parameters[1]))
        throw 'Patient Id is invalid'
        this.PatientId = parameters[1];
        if (!addressPattern.test(parameters[2]) && !addressPattern.test(parameters[3]) && !addressPattern.test(parameters[4]))
            throw 'It Should have minimum 4 characters';
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        if (!AgePattern.test(parameters[5]))
            throw 'Age is not valid';
        this.Age = parameters[5];
        if (!phoneNumPattern.test(parameters[6]))
            throw 'Phone number is not valid';
        this.phoneNumber = parameters[6];
        if (!emailIdPattern.test(parameters[7]))
            throw 'Email id is not valid';
        this.emailId = parameters[7];
    }

    //Method to return values in string format
    toString() {
        return `PatientName: ${this.PatientName}\tPatientId: ${this.PatientId}\nAddress: ${this.address}\tCity: ${this.city}\tState: ${this.state}\nAge: ${this.Age}\tPhone Number: ${this.phoneNumber}\nEmail-Id: ${this.emailId}\n`;
    }
}

//Initializing an addressbook contact array(UC3)
var addressBookContactArr = new Array();

//Displaying the welcome message
console.log("Welcome To The Clinic Program Using Js")

//Function to return object of added contacts(UC1)
function addContact(PatientName, PatientId, address, city, state, Age, phoneNumber, emailId) {
    let contact
    try {
        //Object for class
        contact = new Contact(PatientName, PatientId, address, city, state, Age, phoneNumber, emailId);
        let myjson = readfile();
        console.log(" before push", myjson);
        myjson.push(contact);
        console.log("addContact",contact);
        console.log("after push",myjson);
        write(myjson);
        console.log(myjson);
    } catch (e) {
        console.error(e)
    }
    addressBookContactArr.push(contact);
}


//Function to get the details of the contact from the user(UC1 && UC2)
function getContactDetails() {
    try {
        let PatientName = prompt('Enter Your PatientName Start With Capital : ');
        let PatientId = prompt('Enter Your PatientId  : ');
        let address = prompt('Enter Your Address : ');
        let city = prompt('Enter Your City Name: ');
        let state = prompt('Enter Your State Name : ');
        let Age = prompt('Enter Your  Age : ');
        let phoneNumber = prompt('Enter Your Phone Number : ');
        let emailId = prompt('Enter Your Email Id : ');
        addContact(PatientName, PatientId, address, city, state, Age, phoneNumber, emailId);
        console.log("Added The Contact Succesfully");
    } catch (e) {
        console.error(e);
    }
}

//Function to display contacts(UC3)
function displayContact() {
    try {
        console.log("\n**************Details Of Clinic Management *********************\n");
        addressBookContactArr.forEach(contact => console.log(contact.toString()));
    } catch (e) {
        console.error(e);
    }
}
//Function to view edit contacts based on the given name(UC4)
function viewAndEditEntry() {
    try {
        let name = prompt('Enter Your Name To View And Modify Contact : ');
        addressBookContactArr.forEach((contact) => {
            if (contact.PatientName == name) {
                console.log(contact.toString());
                while (true) {
                    console.log("1: Patient Name \n2: Patientid \n3: Address \n4: City \n5: State \n6: Age \n7: Phone Number \n8: Email Address \n9: Go Back")
                    let choice = parseInt(prompt("Enter The Choice From Above That You Want Modified : "));
                    switch (choice) {
                        case 1:
                            let newPatientName = prompt("Enter The New Patient Name : ");
                            contact.PatientName = newPatientName;
                            break;
                        case 2:
                            let newPatientId = prompt("Enter The New  PatientId : ");
                            contact.PatientId = newPatientId;
                            break;
                        case 3:
                            let newAddress = prompt("Enter The New Address : ");
                            contact.address = newAddress;
                            break;
                        case 4:
                            let newCity = prompt("Enter The New City Name : ");
                            contact.city = newCity;
                            break;
                        case 5:
                            let newState = prompt("Enter The New State Name : ");
                            contact.state = newState;
                            break;
                        case 6:
                            let newAge = prompt("Enter The New Age : ");
                            contact.Age = newAge;
                            break;
                        case 7:
                            let newPhoneNum = prompt("Enter The New Phone Number : ");
                            contact.phoneNumber = newPhoneNum;
                            break;
                        case 8:
                            let newEmailId = prompt("Enter The New Email Id : ");
                            contact.email = newEmailId;
                            break;
                        case 9:
                            return;
                        default:
                            console.log("Invalid Option");
                            break;
                    }
                }
            }
        });
        console.log("No Contact Found")
    } catch (e) {
        console.error(e);
    }
}
//Function to delete contact based on name(UC5)
function deleteContact() {
    try {
        let name = prompt('Enter The Name Of The Contact To View And Modify Contact : ');
        const index = addressBookContactArr.findIndex((contact) => contact.PatientName == name);;
        //using splice remove the element
        if (index != -1)
            addressBookContactArr.splice(index, 1);
    } catch (e) {
        console.error(e);
    }
}
//Function to seach person in a particular city or state(UC6)
function seachPerson(city, state) {
    let cityOrState = prompt("Enter A City Or State Name To Find Person : ");
    let contact = addressBookContactArr.filter((contact) => contact.city == cityOrState || contact.state == cityOrState);
    console.log(contact.join("\n"));
}

//Function to perform addressbook operations(UC3)
function addressBookOperations() {
    try {
        while (true) {
            console.log("1: Add New Entry  \n2: Display \n3: viewAndEditEntry \n4: DeleteContact \n5: SearchByCityorState \n6: Exit");
            switch (parseInt(prompt('Enter the choice : '))) {
                case 1:
                    getContactDetails();
                    break;
                
                case 2:
                    displayContact();
                    break;
                 case 3:
                 viewAndEditEntry();
                    break;
                case 4:
                    deleteContact();
                    break;
                case 5:
                    seachPerson();
                    break;
                case 6:
                    console.log("Exited");
                    process.exit(1)
                    break;
                default:
                    console.log("Wrong Choice");
                    break;
            }
        }
    } catch (e) {
        console.error(e);
    }
}
//Calling the addressbook operation functions(UC3)
addressBookOperations();

