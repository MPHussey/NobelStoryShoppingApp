$(document).ready(function(){
    sessionCheck();

    $('#btn-logout').on('click',function(e){
        logOutUser.call(this,e);
    })
});

//session check in each page
function sessionCheck(){
    $.ajax({
        type:"POST",
        url:"http://localhost/nobelcrmbackend/index.php",
        data:{action:"sessionCheck"},
        success:function(response){
            console.log(response);
            if(response.success==true){
                $('.login-link').addClass('d-none');
                $('.myAccount-link').removeClass('d-none');
                var userData=JSON.parse(localStorage.getItem('userData'));
                console.log(userData);
                $('#log-user').text(userData.userName);
            }else{
                localStorage.removeItem('userData');
                $('.login-link').removeClass('d-none');
                $('.myAccount-link').addClass('d-none');
            }
        }
    })
}


//logout trigger
function logOutUser(e){
    e.preventDefault();
    console.log("click");
    $.ajax({
        type:"POST",
        url:"http://localhost/nobelcrmbackend/index.php",
        data:{action:"logout"},
        success:function(response){
            console.log(response);
            sessionCheck();
        }
    })
}