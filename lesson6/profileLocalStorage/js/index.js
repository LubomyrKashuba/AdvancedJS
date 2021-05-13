$("#signInLink").click(() => {
  $("#signUpForm").hide();
  $("#signInForm").show();
  $("#empty").hide();
});

$("#signUpLink").click(() => {
  $("#signInForm").hide();
  $("#signUpForm").show();
});

let signUpInputs = signUpForm.elements.signUp;

class User {
  constructor(firstName, lastName, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }
}
let check = false;
$("#signUpButton").click(() => {
  signUpInputs.forEach((item) => {
    if (item.value === "") {
      item.classList.add("is-invalid");
      check = false;
    } else {
      item.classList.remove("is-invalid");
      item.classList.add("is-valid");
      check = true;
    }
  });
  if (check) {
    if (localStorage.getItem($("#emailAddress").val()) !== null) {
      $("#emailAddress").removeClass("is-valid");
      $("#emailAddress").addClass("is-invalid");
      $("#invalidEmail").html("This email already exist");
    } else {
      let user1 = new User(
        $("#firstName").val(),
        $("#lastName").val(),
        $("#password").val()
      );
      localStorage.setItem($("#emailAddress").val(), JSON.stringify(user1));
      $("#emailAddress").removeClass("is-invalid");
      $("#emailAddress").addClass("is-valid");
      signUpInputs.forEach((item) => {
        item.value = "";
        item.classList.remove("is-valid");
      });
    }
  }
});

$("#signInButton").click(() => {
  if (localStorage.length === 0) {
    $("#empty").show();
  } else {
    $("#empty").hide();
    let user1 = JSON.parse(
      localStorage.getItem($("#signInForm_floatingInput").val())
    );
    if (
      localStorage.getItem($("#signInForm_floatingInput").val()) !== null &&
      user1.password === $("#signInForm_Password").val()
    ) {
      $("#empty").hide();

      $("#signInForm").hide();
      $("#name").html(user1.firstName + " " + user1.lastName);
      $("#email").html($("#signInForm_floatingInput").val());
      $(".proFile").css("display", "flex");
    } else {
      $("#empty").html("Incorrect email or address");
      $("#empty").show();
    }
  }
});

$("#exit").click(() => {
  $(".proFile").hide();
  $("#signInForm").show();
  $("#signInForm_floatingInput").val("");
  $("#signInForm_Password").val("");
});
