$(document).ready(function(){
    sessionCheck();
});

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
                $('.login-link').removeClass('d-none');
                $('.myAccount-link').addClass('d-none');
            }
        }
    })
}