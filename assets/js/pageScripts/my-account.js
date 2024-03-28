$(document).ready(function(){
    getAccountDetails();

    //toggle save chnages button
    $('.btn-account-details-update').on('click',saveToggleButton);

    //account details submission
    $('#form-account-details').on('submit',function(e){
        accountDetailsUpdate.call(this,e);
    })

    //password reset
    $('#form-password-reset').on('submit',function(e){
        passwordChange.call(this,e);
    })
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

function accountDetailsUpdate(e){
    e.preventDefault();
    var formData=new FormData(this);
    for(let [key,value] of formData.entries()){
        console.log(key,value);
    }
}

function passwordChange(e){
    e.preventDefault();
    var formData=new FormData(this);
}