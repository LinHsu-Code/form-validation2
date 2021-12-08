import "./style.css";
/** **
 * References
 * https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation
 * https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
 * https://regexr.com/ - Tool by Grant Skinner for testing Regular Expressions
 *
 */

const APP = {
  init() {
    APP.addListeners();
  },
  addListeners() {
    const form = document.sampleForm;
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const cell = document.getElementById("cell");
    const regcode = document.getElementById("regcode");
    const pets = document.getElementById("pets");
    // after changing the whole value
    username.addEventListener("change", APP.testName);
    email.addEventListener("change", APP.testEmail);
    pass.addEventListener("change", APP.checkPasswordRequirements);

    // while typing
    regcode.addEventListener("input", APP.formatCode);
    cell.addEventListener("input", APP.formatPhone);

    // what to do if something went wrong during validation
    username.addEventListener("invalid", APP.fail);
    email.addEventListener("invalid", APP.fail);

    // when the form gets submitted
    form.addEventListener("submit", APP.validate);
  },
  validate(ev) {
    ev.preventDefault();
    const form = ev.target;

    const email = document.getElementById("email");
    console.log("willValidate", email.willValidate);
    // run validation on the whole form when submitting...

    // form controls have the following
    // invalid event
    console.log(email.validity);
    // validity readonly prop - a ValidityState object
    // ValidityState object props: (Boolean values)
    // badInput, customError, patternMismatch, rangeOverflow, rangeUnderflow
    // stepMismatch, tooLong, tooShort, typeMismatch, valid, valueMissing
    //
    // willValidate readonly prop - boolean

    // validationMessage - readonly prop from browser validation
    //                    or setCustomValidity( ) method

    // checkValidity() checks element, returns boolean,
    //                fires the invalid event

    // reportValidity() checks AND reports result
    //                  this shows the browser tooltip with warning
    //                  can be called at any point to show message

    // setCustomValidity(msg) if called with non-empty string it
    //                    will change the value of validity.valid
    //                    to false and validity.customError to true
  },
  testName(ev) {
    const fullname = ev.target;
    // console.log(fullname.validity);
    fullname.setCustomValidity(""); // clear old message
    // built-in test for error based on type, pattern, and other attrs
    const currently = fullname.checkValidity();
    // console.log("currently", currently);
  },
  testEmail(ev) {
    const email = ev.target;
    // console.log(email.validity);
    email.setCustomValidity(""); // clear old message
    // built-in test for error based on type, pattern, and other attrs
    const currently = email.checkValidity();
    // console.log("currently", currently);
    if (currently) {
      const emReg = /@gmail.com$/i;
      if (emReg.test(email.value) === false) {
        // not a gmail address
        // console.log("NOT a gmail address");
        email.setCustomValidity("NOT a gmail address.");
        // console.log(email.validity);
        email.reportValidity(); // show the custom message, trigger invalid event
      }
    } else {
      email.setCustomValidity("NOT a Email address.");
      email.reportValidity(); // show the custom message, trigger invalid event
    }
  },
  formatCode(ev) {
    const regcode = ev.target;
    let val = regcode.value;
    val = val.toUpperCase();
    regcode.value = val; // converts anything typed to uppercase
    // check for i and o used instead of 1 or 0...
    regcode.setCustomValidity("");
    if (/(1|0)/.test(val)) {
      regcode.setCustomValidity(
        "There are no number 1 or 0 in the codes. Should this be a letter I or O ?"
      );
      regcode.reportValidity(); // display the message and trigger invalid event
    }
  },
  formatPhone(ev) {
    // format and correct the phone number as user is typing?
    // eg: +1 (555) 555-1212
    // restrict to numbers, parentheses, hyphens, and + as typing?
  },
  checkPasswordRequirements(ev) {
    // check password requirements as user types
    // uppercase, lowercase, numeric, length >= 10
    // Allowed: [! @ # $ % ^ & * ( ) . , ? ; : ~]
    const pass = ev.target;
    const response = {
      upper: false,
      lower: false,
      num: false,
      len: false,
      matches: null,
      invalid: true,
    };
    const txt = pass.value.trim();
    response.upper = /[A-Z]/.test(txt);
    response.lower = /[a-z]/.test(txt);
    response.num = /[0-9]/.test(txt);
    response.len = txt.length >= 10;
    response.matches = txt.match(/([^A-Za-z0-9_!@#$%^&*().,?;:~])/);
    if (!response.matches) {
      response.invalid = false;
    }
    console.log(response);
    return response;
  },
  fail(ev) {
    const field = ev.target;
    // the invalid event fired
    console.log("INVALID");
    // standard display change for any element
    switch (field.id) {
      case "email":
        const span = field.parentElement.querySelector(".errMessage");
        span.textContent = "It's not a valid Gmail address.";
        break;
    }
  },
};
document.addEventListener("DOMContentLoaded", APP.init);
