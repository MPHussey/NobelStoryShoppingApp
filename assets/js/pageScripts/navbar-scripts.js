var apiLink = "http://localhost/nobelcrmbackend/index.php";
$(document).ready(function(){
    sessionCheck();
    viewShoppingCart();
    $('#btn-logout').on('click',function(e){
        logOutUser.call(this,e);
    })
});

//session check in each page
function sessionCheck(){
    $.ajax({
        type:"POST",
        url:apiLink,
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
        url:apiLink,
        data:{action:"logout"},
        success:function(response){
            console.log(response);
            if(response.success==true){
                sessionCheck();
                window.location.href='index.php';
            }
           
        }
    })
}

//view shopping cart
function viewShoppingCart(){
    //check whether user singned in
    var userDataCheck = JSON.parse(localStorage.getItem("userData"));
    if (userDataCheck != null) {
        var userId = userDataCheck.userId;
        $.ajax({
            type:"POST",
            url:apiLink,
            data:{
                action:"getUserCartDetails",
                user_id:userId
            },
            success:function(response){
                console.log(response.data);
                var productItemCount=0;
                if(response.data){
                    productItemCount=response.data.length;
                }
                console.log(productItemCount);
                $('.user-item-count').text(productItemCount);
                var template="";
                var baseUrl = "http://localhost/nobelcrmbackend/";
                response.data.forEach((item,index)=>{
                    
                    template+=`
                        <li class="single-shopping-cart">
                            <div class="shopping-cart-img">
                                <a href="#"><img alt="" src="${baseUrl+item.images[0].image_url}"></a>
                                <div class="item-close">
                                    <a href="#"><i class="sli sli-close"></i></a>
                                </div>
                            </div>
                            <div class="shopping-cart-title">
                                <h4><a href="#">${item.product_name}</a></h4>
                                <span>Rs${item.price}</span>
                            </div>
                            <div class="shopping-cart-delete">
                                <a href="#"><i class="la la-trash"></i></a>
                            </div>
                        </li>
                    `;
                });
                $('#added-cart-item-list').html(template);
            }
        })
    }

}