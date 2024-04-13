$(document).ready(function(){
   
    //get user details
    getUserDetails();
    //function enable billing details
    $('.btn-toggle-billing-details').on('click',enableBillingDetils);

    //submit billing details
    $('#form-billing-details').on('submit',function (e){
        updateBillingDetails.call(this,e);
    })

    //onclick place order button
    $('#btn-place-order').on('click',function(e){
        placeOrder.call(this,e);
    });


})



function enableBillingDetils(){
    $('#update-billing-details').toggleClass('d-none');
    $('.billing-common').toggleClass('active-text-fields');
    $(".billing-common").prop("disabled", function (i, val) {
        return !val;
      });
}

function getUserDetails(){
    var accountDetails = JSON.parse(localStorage.getItem("userData"));
    console.log(accountDetails);
    $('#billingfirstName').val(accountDetails.userName);
    $('#billinglastName').val(accountDetails.lastName);
    $('#billingHouseNumber').val(accountDetails.houseNumber);
    $('#billinglasName').val(accountDetails.lastName);
    $('#billingTownCity').val(accountDetails.townCity);
    $('#billingStateProvince').val(accountDetails.stateProvince);
    $('#billingZip').val(accountDetails.postalZip);
    $('#billingCountry').val(accountDetails.country);
    $('#billingPhoneNumber').val(accountDetails.phoneNumber);
    $('#billingEmail').val(accountDetails.emailAddress);
    $('#user-id').val(accountDetails.userId);
}

//update billing details function
function updateBillingDetails(e){
    e.preventDefault();
    var formData=new FormData(this);
    formData.append("action","updateAccount");

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
                    getUserDetails();
                    enableBillingDetils();
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


//onclick place order button function
function placeOrder(e){
    e.preventDefault();
    //check shipping method
    var checkBoxStatus=$('#check-ship-different').prop('checked');
    //if check box is not checked
    if(!checkBoxStatus){
        //make this true if found any of empty objects
        var userDataStatus=false;
        var userDataCheck = JSON.parse(localStorage.getItem("userData"));
        for (var key in userDataCheck) {
            if (userDataCheck.hasOwnProperty(key)) { // This checks if the key is actually a property of data, not inherited
                if (userDataCheck[key] === "") {     // Checks if the property is an empty string
                    console.log("Empty attribute found: " + key); // Output the key of the empty attribute
                    userDataStatus=true;
                }
            }
        }
        console.log(userDataStatus);
        if(userDataStatus){
            iziToast.warning({
                title: "Caution",
                message: "One or More fields re missing on Billing information. Please fill out.",
                position: "center",
                zindex: 2000,
                overlay: true,
                timeout: 3000,
              });
        }else{
           //service call 
        }
    }else{
        var differentShippingDetails=$('#form-different-shipping')[0];
        if(differentShippingDetails.checkValidity()===false){
            differentShippingDetails.reportValidity();
            return false;
        }else{
            var formData=new FormData(differentShippingDetails);
            for(let [key,value] of formData.entries()){
                console.log(key,value);
            }
        }
        
    }
}