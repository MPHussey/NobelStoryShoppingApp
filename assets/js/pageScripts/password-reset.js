$(document).ready(function () {
  $("#form-password-reset").on("submit", function (e) {
    btnResetPassword.call(this, e);
  });
});

//function reset password
function btnResetPassword(e) {
  startLoading();
  e.preventDefault();
  var formData = new FormData(this);
  var newpassword = formData.get("newPassword");
  var confirmPassword = formData.get("confirmPassword");
  var urlParams = new URLSearchParams(window.location.search);
  var emailAddress = urlParams.get("email");

  console.log(emailAddress);
  if (newpassword == confirmPassword && newpassword!="" && newpassword.length>5) {
    if (emailAddress) {
      $.ajax({
        type: "POST",
        url: apiLink,
        data: {
          action: "updatePasswordByEmail",
          email: emailAddress,
          newPassword: newpassword,
        },
        success: function (response) {
          stopLoading();
          console.log(response);
          $("#form-password-reset")[0].reset();
          if (response.success == true) {
            showNotification(
              "success",
              "Success",
              "Password Updated Successfully !! Now Login."
            );
          } else {
            stopLoading();
            showNotification(
              "warning",
              "Caution",
              "Password update expired, try again !"
            );
          }
        },
      });
    } else {
      stopLoading();
      showNotification("warning", "Caution", "Password reset unsuccessful");
    }
  } else {
    stopLoading();
    showNotification("warning", "Caution", "Password must contains atleast 5 characters");
  }
}
