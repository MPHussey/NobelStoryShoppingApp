$(document).ready(function(){
    getAccountDetails();

    //toggle save chnages button
    $('.btn-account-details-update').on('click',saveToggleButton);
});

function getAccountDetails(){
    var accountDetails=JSON.parse(localStorage.getItem('userData'));
    console.log(accountDetails);
    $('#first-name').val(accountDetails.userName);
    $('#last-name').val(accountDetails.lastName);
    $('#email').val(accountDetails.emailAddress);
    $('#resident-address').val(accountDetails.residentAddress);
    $('#phone-number').val(accountDetails.phoneNumber);
}

function saveToggleButton(){
    $('#submit-account-details').toggleClass('d-none');
    $('.account-common').prop('disabled', function(i, val) {
        return !val;
    });
}