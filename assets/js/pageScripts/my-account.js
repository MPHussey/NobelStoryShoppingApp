$(document).ready(function () {
  getAccountDetails();
  getUserOrderList();
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

  //open view order details
  $(".order-list").on("click", ".view-invoice", viewInvoice);
  //close  modal
  $("#btn-modal-close").on("click", closeModal);
});

function getAccountDetails() {
  var accountDetails = JSON.parse(localStorage.getItem("userData"));
  console.log(accountDetails);
  $("#first-name").val(accountDetails.userName);
  $("#last-name").val(accountDetails.lastName);
  $("#email").val(accountDetails.emailAddress);
  $("#resident-address").val(accountDetails.residentAddress);
  $("#phone-number").val(accountDetails.phoneNumber);
  $("#user-id").val(accountDetails.userId);
  $("#house-number").val(accountDetails.houseNumber);
  $("#town-city").val(accountDetails.townCity);
  $("#state-province").val(accountDetails.stateProvince);
  $("#postal-zip").val(accountDetails.postalZip);
  $("#country").val(accountDetails.country);
}

function saveToggleButton() {
  $("#submit-account-details").toggleClass("d-none");
  $(".account-common").toggleClass("update-detais-highlight");
  $(".account-common").prop("disabled", function (i, val) {
    return !val;
  });
}

//account details update function
function accountDetailsUpdate(e) {
  e.preventDefault();
  var formData = new FormData(this);
  formData.append("action", "updateAccount");
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }

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
            url: apiLink,
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
  var userId = JSON.parse(localStorage.getItem("userData")).userId;
  var password = formData.get("newPassword");
  var confirmPassword = formData.get("confirmNewPassword");
  formData.append("userId", userId);
  formData.append("action", "passwordReset");

  console.log(userId);
  if (password == confirmPassword && password!="" && password.length>5) {
    $.ajax({
      type: "POST",
      url: apiLink,
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {
        console.log(response);
        if (response.success == true) {
          $("#form-password-reset")[0].reset();
          iziToast.success({
            timeout: 3000,
            title: "OK",
            message: "Successfully Updated !!",
            position: "center",
            zindex: 2000,
            overlay: true,
          });
        } else {
        }
      },
    });
  } else {
    iziToast.warning({
      title: "Caution",
      message: "Both fields need to be equal and need to have atleast 5 characters",
      position: "center",
      zindex: 2000,
      overlay: true,
      timeout: 3000,
    });
  }
}

//get all user wise order list
function getUserOrderList() {
  Notiflix.Loading.init({
    svgColor: "#ffffff",
  });
  Notiflix.Loading.pulse();
  var accountDetails = JSON.parse(localStorage.getItem("userData"));
  //console.log(accountDetails.userId);
  $.ajax({
    type: "POST",
    url: apiLink,
    data: {
      action: "userPurchaseHistory",
      userId: accountDetails.userId,
    },
    success: function (response) {
      Notiflix.Loading.remove();
      //console.log(response);
      var orderTemplate = "";
      if (response.data) {
        response.data.forEach((eachItem, index) => {
          //console.log(eachItem);
          var purchasedDate = moment(
            eachItem.purchase_date,
            "YYYY-MM-DD HH:mm:ss"
          );
          var formattedDate = purchasedDate.format("MMM D, YYYY");
          orderTemplate += `
            <tr>
                <td>${eachItem.purchase_id}</td>
                <td>${formattedDate}</td>
                <td>${eachItem.order_status}</td>
                <td><a data-customerid="${eachItem.customer_id}" data-purchaseid="${eachItem.purchase_id}" class="check-btn sqr-btn view-invoice">View</a></td>
            </tr>
          `;
        });
      }

      $(".order-list").html(orderTemplate);
    },
  });
}

//view invoice details in modal
function viewInvoice() {
  Notiflix.Loading.init({
    svgColor: "#ffffff",
  });
  Notiflix.Loading.pulse();
  var userId = $(this).data("customerid");
  var purchaseId = $(this).data("purchaseid");
  console.log(purchaseId);
  $.ajax({
    type: "POST",
    url: apiLink,
    data: {
      action: "selectedInvoiceDetails",
      userId: userId,
      purchasedId: purchaseId,
    },
    success: function (response) {
      Notiflix.Loading.remove();
      if (response.success == true) {
        console.log(response.data[purchaseId]);
        var invoice = response.data[purchaseId];
        var receiverFullName = `${invoice.receiver_fName} ${invoice.receiver_lName}`;
        var address_one = `${invoice.house_number} ${invoice.town_city}`;
        var address_two = `${invoice.state_province} ${invoice.country}`;
        var postalcode = invoice.postal_zip;
        // var purchasedDate=invoice.purchase_date;
        var purchasedDate = moment(
          invoice.purchase_date,
          "YYYY-MM-DD HH:mm:ss"
        );
        var formattedDate = purchasedDate.format("MMM D, YYYY");

        $("#order-to").text(receiverFullName);
        $("#address-one").text(address_one);
        $("#address-two").text(address_two);
        $("#zip-code").text(postalcode);
        $("#order-status").text(invoice.order_status);
        $("#purchased-date").text(formattedDate);
        $("#purchase-id-invoice").text(invoice.purchase_id);
        var subTotal = 0;
        var eachItemsTemplate = "";
        invoice.orderList.forEach((eachProduct, index) => {
          let rowClass = index % 2 !== 0 ? "bgc-default-l4" : ""; // Check if index is odd
          let productTotal =
            parseFloat(eachProduct.price) * eachProduct.quantity;
          subTotal += productTotal;
          eachItemsTemplate += `
          <div class="row mb-2 mb-sm-0 py-25 ${rowClass}"> <!-- Add the class here -->
              <div class="d-none d-sm-block col-1">${index + 1}</div>
              <div class="col-9 col-sm-5">${eachProduct.product_name}</div>
              <div class="d-none d-sm-block col-2">${eachProduct.quantity}</div>
              <div class="d-none d-sm-block col-2 text-95">${
                eachProduct.price
              }</div>
              <div class="col-2 text-secondary-d2">${productTotal.toFixed(
                2
              )}</div>
          </div>
          `;
        });
        $(".invoice-each-items").html(eachItemsTemplate);
        $("#invoice-sub-total").text(subTotal.toFixed(2));
        $("#invoice-total").text(subTotal.toFixed(2));
      }
    },
  });
  $("#invoice-modal").modal("show");
}

function closeModal() {
  $("#invoice-modal").modal("hide");
}
