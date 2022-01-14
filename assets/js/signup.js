const firebaseConfig = {
  apiKey: "AIzaSyDr0RfdwQoiSUJ9CdSpo639Ez5WvzD0KJQ",
  authDomain: "oneauto-d157b.firebaseapp.com",
  projectId: "oneauto-d157b",
  storageBucket: "oneauto-d157b.appspot.com",
  messagingSenderId: "205060289634",
  appId: "1:205060289634:web:3586c94919ac24c3c34d3b",
  measurementId: "G-X36S4W0771"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  var contactFormDB = firebase.database().ref('signupForm')

  document.getElementById('signupForm').addEventListener("submit", submitForm);





  function submitForm(e){

    e.preventDefault();

    var firstname= getElementVal('firstname');
     var lastname= getElementVal('lastname');
    var emailid=getElementVal('emailid');
    var password=getElementVal("password");


    console.log(firstname, lastname, emailid, password);

saveMessages(firstname, lastname, emailid, password);



  }



const saveMessages=(firstname, lastname, emailid, password)=>{
  var newContactForm=contactFormDB.push();
  newContactForm.set({
    firstname:firstname,
    lastname:lastname,
    emailid:emailid,
    password:password
  })
}

  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };