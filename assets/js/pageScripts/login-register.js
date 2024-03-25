$(document).ready(function(){
    $('#register-user').on('submit',function(e){
        userRegister.call(this,e);
    });

});


//User Register Submit function
function userRegister(e){
    e.preventDefault();
    var formData=new FormData(this);
    formData.append("action","addCustomer");

    var password=formData.get('password');
    var confirmPassword=formData.get('confirm-password');
    if(password==confirmPassword){
        $.ajax({
            type:"POST",
            url:"http://localhost/nobelcrmbackend/index.php",
            data:formData,
            processData:false,
            contentType:false,
            success:function(response){
                console.log(response);
                if(response.success==true){
                    iziToast.success({
                        title: 'OK',
                        message: 'Successfully inserted record!',
                        position:'bottomRight'
                    });
                    $('#register-user')[0].reset();
                }else{
                    iziToast.warning({
                        title: 'Caution',
                        message: 'User already Registered !',
                        position:'bottomRight'
                    });
                }
            }
        })

    }else{
        iziToast.warning({
            title: 'Caution',
            message: 'Password Mismatched !',
            position:'bottomRight'
        });
    }
}

