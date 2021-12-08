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

    username.addEventListener("change", APP.testName);

    username.addEventListener("invalid", APP.fail);

    // when the form gets submitted
    form.addEventListener("submit", APP.validate);
  },
  validate(ev) {
    ev.preventDefault();
    const form = ev.target;
  },
  testName(ev) {
    const fullname = ev.target;

    fullname.setCustomValidity("");

    const currently = fullname.checkValidity();
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
