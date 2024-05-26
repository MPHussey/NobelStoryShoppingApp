var sessionCheckVal;
$(document).ready(function () {
  sessionCheck();
  $("#register-user").on("submit", function (e) {
    userRegister.call(this, e);
  });

  $("#user-login").on("submit", function (e) {
    userLogin.call(this, e);
  });

  //btn forgot password
  $('.btn-forgot-password').on('click',forgotPassword);

  //btn reset
  $('.btn-reset').on('click',onClickReset);
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
  if (password == confirmPassword && password!="" && password.length>5) {
    $.ajax({
      type: "POST",
      url: apiLink,
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
      message: "Passsword must contain ayleast 5 characters.",
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
    url: apiLink,
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
    url: apiLink,
    data: { action: "sessionCheck" },
    success: function (response) {
      console.log(response);
    },
  });
}

// forgot password modal open function
function forgotPassword() {
  $('#modal-forgot-password').modal("show");
}

function onClickReset(){
  Notiflix.Loading.init({
    svgColor: "#ffffff",
  });
  Notiflix.Loading.pulse();
  var resetEmailAddress=$('#resetEmail').val();
  //console.log(resetEmailAddress);
  $.ajax({
    type:"POST",
    url:apiLink,
    data:{
      action:"passwordResetEmail",
      resetEmailAddress:resetEmailAddress
    },
    success:function(response){
      $('#resetEmail').val("");
      Notiflix.Loading.remove();
      console.log(response)
      if(response.success==true){
        iziToast.success({
          title: "Email",
          message: "Password Reset email has sent to your email if already registered.",
          position: "center",
          zindex: 2000,
          overlay: true, 
          timeout: 3000,
        });
      }else{
        iziToast.warning({
          title: "Caution",
          message: "Email Sending Failure",
          position: "center",
          zindex: 2000,
          overlay: true,
          timeout: 3000,
        });  
      }
    }
  })
  
}
