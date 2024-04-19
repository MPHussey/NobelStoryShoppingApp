var sessionCheckVal;
$(document).ready(function () {
  sessionCheck();
  $("#register-user").on("submit", function (e) {
    userRegister.call(this, e);
  });

  $("#user-login").on("submit", function (e) {
    userLogin.call(this, e);
  });
});

//User Register Submit function
function userRegister(e) {
  Notiflix.Loading.init({
    svgColor: "#ffffff",
  });
  Notiflix.Loading.pulse();
  e.preventDefault();
  var formData = new FormData(this);
  formData.append("action", "addCustomer");

  var password = formData.get("password");
  var confirmPassword = formData.get("confirm-password");
  if (password == confirmPassword) {
    $.ajax({
      type: "POST",
      url: "http://localhost/nobelcrmbackend/index.php",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        console.log(response);
        if (response.success == true) {
            Notiflix.Loading.remove();
          iziToast.success({
            title: "Registration",
            message: "Registered Successfully",
            position: "center",
            zindex: 2000,
            overlay: true, 
            timeout: 3000,
          });
          $("#register-user")[0].reset();
        } else {
            Notiflix.Loading.remove();
            iziToast.warning({
                title: "Caution",
                message: "Already have an account !!",
                position: "center",
                zindex: 2000,
                overlay: true,
                timeout: 3000,
              });
        }
      },
    });
  } else {
    Notiflix.Loading.remove();
    iziToast.warning({
      title: "Caution",
      message: "Password missmatchd",
      position: "center",
      zindex: 2000,
      overlay: true,
      timeout: 3000,
    });
  }
}

//function for user login
function userLogin(e) {
  Notiflix.Loading.init({
    svgColor: "#ffffff",
  });
  Notiflix.Loading.pulse();
  e.preventDefault();
  var formData = new FormData(this);
  formData.append("action", "login");
  $.ajax({
    type: "POST",
    url: "http://localhost/nobelcrmbackend/index.php",
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      //console.log(response.data);
      if (response.success == true) {
        Notiflix.Loading.remove();
        localStorage.setItem("userData", JSON.stringify(response.data));
        window.location.href = "my-account.php";
      } else {
        Notiflix.Loading.remove();
        iziToast.warning({
          title: "Caution",
          message: "Incorrect username or password !!",
          position: "center",
          zindex: 2000,
          overlay: true,
          timeout: 3000,
        });
      }
    },
  });
}

function sessionCheck() {
  $.ajax({
    type: "POST",
    url: "http://localhost/nobelcrmbackend/index.php",
    data: { action: "sessionCheck" },
    success: function (response) {
      console.log(response);
    },
  });
}
