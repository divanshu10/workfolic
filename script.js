
function validate(){
  let firstName = document.getElementById("first-name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobileNumber").value;
  let country = document.getElementById("country").value;
  let industry = document.getElementById("industry").value;
  let tnC = document.getElementById('t-and-c').checked
  let error = false; 

      //first name condition
      if(firstName.length >= 2) {
          document.getElementById('first-name-valid').style.display = 'block'
          document.getElementById('first-name-invalid').style.display = 'none'
      } else {
          document.getElementById('first-name-invalid').style.display = 'block'
          document.getElementById('first-name-valid').style.display = 'none'
          error = true
      }
      console.log("Name:", firstName);
    
//  email condition

if (
email.includes("@") &&
email.includes(".") &&
email.indexOf("@") != 0 &&
email.length - email.lastIndexOf(".") >= 3
) {
document.getElementById("email-valid").style.display = "block";
document.getElementById("email-invalid").style.display = "none";
} else {
document.getElementById("email-invalid").style.display = "block";
document.getElementById("email-valid").style.display = "none";
  error = true
}
console.log("Email:", email);
  // mobile number

   // isNaN = it checks output is number or Not a number
  // !isNaN = it returns true if there is a number
  var validNumber = /^\d{10}$/;
  let get_num = String(mobile).charAt(0);
  var firstIndex = Number(get_num);

  let mobilenumber = parseInt(mobile);
  if (
    mobile.length == 10 &&
    !isNaN(mobilenumber) &&
    firstIndex > 5 &&
    mobile.match(validNumber)
  ) {
    document.getElementById("mobileNumber-valid").style.display = "block";
    document.getElementById("mobileNumber-invalid").style.display = "none";
  } else {
    document.getElementById("mobileNumber-invalid").style.display = "block";
    document.getElementById("mobileNumber-valid").style.display = "none";
    error = true;
  }
  console.log("mobileNumber:", mobilenumber );

  // country
  if (country != "None") {
      document.getElementById("country-valid").style.display = "block";
      document.getElementById("country-invalid").style.display = "none";
    } else {
      document.getElementById("country-invalid").style.display = "block";
      document.getElementById("country-valid").style.display = "none";
      error = true;
    }
    console.log("country:", country)

  //  industry 
  if (industry != "None") {
      document.getElementById("industry-valid").style.display = "block";
      document.getElementById("industry-invalid").style.display = "none";
    } else {
      document.getElementById("industry-invalid").style.display = "block";
      document.getElementById("industry-valid").style.display = "none";
      error = true;
    }
    console.log("industry:", industry)

  //  t and c 
  if(tnC) {
  document.getElementById('t-and-c-invalid').style.display = 'none'
} else {
  document.getElementById('t-and-c-invalid').style.display = 'block'
  error = true
}
    if(!error) {
  alert('Your details have been saved successfully!')

  document.getElementById('registration-form').reset()

  let validFeedbacks = document.getElementsByClassName('valid-feedback')
  for(let i = 0; i < validFeedbacks.length; i++) {
    validFeedbacks[i].style.display = 'none'
  }
  let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
  for(let i = 0; i < invalidFeedbacks.length; i++) {
    invalidFeedbacks[i].style.display = 'none'
  }
}
}


