
// Window (object supported by all browsers) 
// AddeventListener to user of feedback on form. 

window.addEventListener("load", function () {
  var form = document.getElementById("feedbackForm");
  //Gets the element feebackFrom and assigns it to variable form.
  

  formSubmitHandler = function (e) {
    e.preventDefault();
    console.log(form.name.value);
    console.log(form.email.value);
    console.log(form.feedback.value);
    alert("Thank you for your feedback! We will make it better.")
  };

  form.onsubmit = formSubmitHandler;

});
