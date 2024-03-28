$(document).ready(function () {
  getAccountDetails();

  //toggle save chnages button
  $(".btn-account-details-update").on("click", saveToggleButton);

  //account details submission
  $("#form-account-details").on("submit", function (e) {
    accountDetailsUpdate.call(this, e);
  });

  //password reset
  $("#form-password-reset").on("submit", function (e) {
    passwordChange.call(this, e);
  });
});

function getAccountDetails() {
  var accountDetails = JSON.parse(localStorage.getItem("userData"));
  //console.log(accountDetails);
  $("#first-name").val(accountDetails.userName);
  $("#last-name").val(accountDetails.lastName);
  $("#email").val(accountDetails.emailAddress);
  $("#resident-address").val(accountDetails.residentAddress);
  $("#phone-number").val(accountDetails.phoneNumber);
  $("#user-id").val(accountDetails.userId);
}

function saveToggleButton() {
  $("#submit-account-details").toggleClass("d-none");
  $(".account-common").prop("disabled", function (i, val) {
    return !val;
  });
}

//account details update function
function accountDetailsUpdate(e) {
  e.preventDefault();
  var formData = new FormData(this);
  formData.append("action", "updateAccount");
  // for(let [key,value] of formData.entries()){
  //     console.log(key,value);
  // }

  iziToast.question({
    timeout: 20000,
    close: false,
    overlay: true,
    displayMode: "once",
    id: "question",
    zindex: 2000,
    title: "Hey",
    message: "Are you sure about that?",
    position: "center",
    buttons: [
      [
        "<button><b>YES</b></button>",
        function (instance, toast) {
          // User clicked YES, hide the toast and proceed with AJAX call
          instance.hide({ transitionOut: "fadeOut" }, toast, "button");

          // Here, place your AJAX call
          $.ajax({
            type: "POST",
            url: "http://localhost/nobelcrmbackend/index.php",
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
              console.log(response);
              if (response.success == true) {
                localStorage.setItem("userData", JSON.stringify(response.data));
                getAccountDetails();
                saveToggleButton();
                iziToast.success({
                  timeout: 3000,
                  title: "OK",
                  message: "Successfully Updated !!",
                  position: "center",
                  zindex: 2000,
                  overlay: true,
                });
              } else {
                iziToast.error({
                  timeout: 3000,
                  title: "Error",
                  message: "Update Unsuccessfull !!",
                  position: "center",
                  zindex: 2000,
                  overlay: true,
                });
              }
            },
          });
        },
        true,
      ], // The true at the end means this button will close the dialog

      [
        "<button>NO</button>",
        function (instance, toast) {
          // User clicked NO, just hide the toast
          instance.hide({ transitionOut: "fadeOut" }, toast, "button");
        },
      ],
    ],
    onClosing: function (instance, toast, closedBy) {},
    onClosed: function (instance, toast, closedBy) {},
  });
}

function passwordChange(e) {
  e.preventDefault();
  var formData = new FormData(this);
  var userId=JSON.parse(localStorage.getItem('userData')).userId;
  var password = formData.get("newPassword");
  var confirmPassword = formData.get("confirmNewPassword");
  formData.append('userId',userId);
  formData.append('action','passwordReset');

  console.log(userId);
  if (password == confirmPassword) {
    $.ajax({
        type:"POST",
        url:"http://localhost/nobelcrmbackend/index.php",
        data:formData,
        contentType:false,
        processData:false,
        success:function(response){
            console.log(response);
            if(response.success==true){
                $('#form-password-reset')[0].reset();
                iziToast.success({
                    timeout: 3000,
                    title: "OK",
                    message: "Successfully Updated !!",
                    position: "center",
                    zindex: 2000,
                    overlay: true,
                  });
            }else{
                
            }
        }
    });

  } else {
    iziToast.warning({
      title: "Caution",
      message: "Password Mismatch !!",
      position: "center",
      zindex: 2000,
      overlay: true,
      timeout:3000
    });
  }
}
