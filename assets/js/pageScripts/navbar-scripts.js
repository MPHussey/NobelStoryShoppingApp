var apiLink = "http://localhost/nobelcrmbackend/index.php";
var imageBaseUrl = "http://localhost/nobelcrmbackend/";
//shopping cart items for global use
$(document).ready(function () {
  sessionCheck();
  
  $(".btn-logout").on("click", function (e) {
    logOutUser.call(this, e);
  });
});

//session check in each page
function sessionCheck() {
  $.ajax({
    type: "POST",
    url: apiLink,
    data: { action: "sessionCheck" },
    success: function (response) {
      //console.log(response);
      if (response.success == true) {
        $(".login-link").addClass("d-none");
        $('.login-link-mobile').addClass("d-none");
        $(".myAccount-link").removeClass("d-none");
        $(".my-account-mobile-common").removeClass("d-none");
        var userData = JSON.parse(localStorage.getItem("userData"));
        //console.log(userData);
        $("#log-user").text(userData.userName);
        $('.user-name-mobile').text(userData.userName);
        //if there is a session trigger the view cart for the user details
        viewShoppingCart();
      } else {
        localStorage.removeItem("userData");
        $(".login-link").removeClass("d-none");
        $('.login-link-mobile').removeClass("d-none");
        $(".myAccount-link").addClass("d-none");
        $(".my-account-mobile-common").addClass("d-none");
      }
    },
  });
}

//logout trigger
function logOutUser(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: apiLink,
    data: { action: "logout" },
    success: function (response) {
      //console.log(response);
      if (response.success == true) {
        sessionCheck();
        window.location.reload();
      }
    },
  });
}

//view shopping cart
function viewShoppingCart() {
  console.log('working');
  //check whether user singned in
  var userDataCheck = JSON.parse(localStorage.getItem("userData"));
  if (userDataCheck != null) {
    var userId = userDataCheck.userId;
    $.ajax({
      type: "POST",
      url: apiLink,
      data: {
        action: "getUserCartDetails",
        user_id: userId,
      },
      success: function (response) {
        console.log(response);
        var productItemCount = 0;
        if(response.success==true){
          if (response.data) {
            shoppingcartItems=response.data;
            productItemCount = response.data.length;
          }
          //console.log(productItemCount);
          $(".user-item-count").text(productItemCount);
          $('#num-items-mobile').text(productItemCount);
          var template = "";
          var baseUrl = imageBaseUrl;
          response.data.forEach((item, index) => {
            template += `
                          
                          <li class="single-shopping-cart d-flex">
                                          <div style="border: 1px solid #e3e3e3;
                                          border-radius: 5px;
                                          padding: 5px;" class="shopping-cart-img">
                                              <a href="#"><img alt="" src="${
                                                baseUrl + item.images[0].image_url
                                              }"></a>
                                              
                                          </div>
                                          <div class="shopping-cart-title">
                                              <h4 style="font-weight:500"><a href="#">${
                                                item.product_name.length > 30
                                                  ? item.product_name.substring(
                                                      0,
                                                      30
                                                    ) + ".."
                                                  : item.product_name
                                              }</a></h4>
                                              <p style="margin-bottom:0;">Quantity : <span style="
                                              font-size: 13px;
                                          ">${item.quantity}</span></p>
                                              <p>Unit Price : Rs <span style="
                                              font-size: 13px;
                                          ">${item.price}</span></p>
                                          </div>
                                         
                                      </li>
                      `;
          });
          $("#added-cart-item-list").html(template);
        }else{
          $(".user-item-count").text(productItemCount);
          $('#num-items-mobile').text(productItemCount);
          $("#added-cart-item-list").html('');
        }
      },
    });
  }
}
