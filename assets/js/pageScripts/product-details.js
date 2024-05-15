var defaultQyValue = 0;
$(document).ready(function () {
  //onload view all the functions
  viewSelectedItemDetails();

  //cart minus handler
  $(".cart-plus-minus").on("click", ".dec", quantityDecrement);
  //cart plus handler
  $(".cart-plus-minus").on("click", ".inc", quantityIncreament);
  //on click add to cart in product details page
  $(".btn-add-cart").on("click", onClickaddToCart);
});

function updateSwiper() {
  var swiperA = document.querySelector(".mySwiper2").swiper;
  var swiperB = document.querySelector(".mySwiper").swiper;
  if (swiperA) {
    swiperA.destroy();
    swiperB.destroy();
  } else {
  }
}

//view item details
function viewSelectedItemDetails() {
  startLoading();
  var productId = localStorage.getItem("selectedItemNumber");
  console.log(productId);
  updateSwiper();
  $.ajax({
    type: "POST",
    url: apiLink,
    data: {
      action: "selectedProduct",
      product_id: productId,
    },
    success: function (response) {
      stopLoading();
      var quickViewBigImg = "";
      var bigImageThumbnails = "";
      if (response.success == true) {
        var productDetails = response.data[0];
        $("#product-category").text(productDetails.product_category);
        $("#product-name").text(productDetails.product_name);
        $("#product-description").text(productDetails.description);
        $("#product-price-number").text(`Rs ${productDetails.price}`);
        $("#details-product-id").val(productDetails.product_id);
        $("#remaining-quantity").text(
          productDetails.quantity != 0
            ? productDetails.quantity
            : "Out Of Stock"
        );

        $(".cart-plus-minus-box").val(defaultQyValue);
        console.log(productDetails);
        productDetails.images.forEach((eachItem, index) => {
          quickViewBigImg += `
                      <div class="swiper-slide">
                        <img src="${imageBaseUrl + eachItem.image_url}" />
                      </div>`;
        });
        $(".main-viewer").html(quickViewBigImg);
        $(".thumb-viewer").html(quickViewBigImg);
        //getRelatedProducts(productDetails.product_category,productDetails.product_id);
      }

      var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiperThumb = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
      
    },
  });
}

//cart increment handler
function quantityIncreament() {
  //get user data to check weather user is available
  var userDataCheck = JSON.parse(localStorage.getItem("userData"));
  //if user is available
  if (userDataCheck != null) {
    var remainingQuantity = $("#remaining-quantity").text();
    console.log(remainingQuantity);
    if (
      remainingQuantity != "Out Of Stock" &&
      defaultQyValue < remainingQuantity
    ) {
      defaultQyValue++;
      $(".cart-plus-minus-box").val(defaultQyValue);
    } else {
      $(".cart-plus-minus-box").val(defaultQyValue);
      showNotification(
        "warning",
        "Caution",
        "You have reach the maximum quantity for the product or Out of Stock"
      );
    }
  } else {
    $(".cart-plus-minus-box").val(defaultQyValue);
    showNotification("warning", "Caution", "Please login to your account");
  }
}

//product decremen handler
function quantityDecrement() {
  //check user logedin or not
  if (localStorage.getItem("userData") !== null) {
    // $(".cart-plus-minus").addClass("d-none");
    // $(".awaiting-preloader").removeClass("d-none");
    if (defaultQyValue != 0) {
      defaultQyValue--;
      $(".cart-plus-minus-box").val(defaultQyValue);
    } else {
      $(".cart-plus-minus-box").val(defaultQyValue);
      $(".cart-plus-minus").removeClass("d-none");
      $(".awaiting-preloader").addClass("d-none");
    }
  } else {
    $(".cart-plus-minus-box").val(defaultQyValue);
    showNotification("warning", "Caution", "Please login to your account");
  }
}

function onClickaddToCart() {
  startLoading();
  //get the quantity that is coming from plus minus
  var selectedItemQuantity = $(".cart-plus-minus-box").val();
  if (selectedItemQuantity != "Out Of Stock" && selectedItemQuantity > 0) {
    //check the user login or not
    if (localStorage.getItem("userData") !== null) {
      var userData = JSON.parse(localStorage.getItem("userData"));
      var userId = userData.userId;
      var productId = $("#details-product-id").val();
      //double check enough inventory
      $.ajax({
        type: "POST",
        url: apiLink,
        data: {
          action: "selectedProduct",
          product_id: productId,
        },
        success: function (response) {
          var finalConfirmProductquantity = response.data[0].quantity;
          //check the item is already there in users cart to get current quantiy
          if (selectedItemQuantity <= finalConfirmProductquantity) {
            $.ajax({
              type: "POST",
              url: apiLink,
              data: {
                action: "getCartItemOfUser",
                user_id: userId,
                product_id: productId,
              },
              success: function (response) {
                var currenlyAvailableQuantity = 0;
                var totalQuantity;
                if (response.success == false) {
                  totalQuantity = parseInt(selectedItemQuantity);
                } else {
                  currenlyAvailableQuantity = response.data[0].quantity;
                  totalQuantity =
                    currenlyAvailableQuantity + parseInt(selectedItemQuantity);
                }

                //reduce added quantity from inventory
                $.ajax({
                  type: "POST",
                  url: apiLink,
                  data: {
                    action: "updateInventory",
                    product_id: productId,
                    updated_quantity:
                      finalConfirmProductquantity - selectedItemQuantity,
                  },
                  success: function (response) {
                    if (response.success == true) {
                      $.ajax({
                        type: "POST",
                        url: apiLink,
                        data: {
                          action: "addToCart",
                          user_id: userId,
                          product_id: productId,
                          product_quantity: totalQuantity,
                        },
                        success: function (response) {
                          $.ajax({
                            type: "POST",
                            url: apiLink,
                            data: {
                              action: "selectedProduct",
                              product_id: productId,
                            },
                            success: function (response) {
                              viewShoppingCart();
                              var newUpdatedQuantity =
                                response.data[0].quantity;
                              $("#remaining-quantity").text(newUpdatedQuantity);
                              $(".cart-plus-minus-box").val("0");
                              defaultQyValue = 0;
                              showNotification("success", "Success", "Item Added Successfully");
                              
                              stopLoading();
                            },
                          });
                        },
                      });
                    } else {
                      stopLoading();
                    }
                  },
                });
              },
            });
          } else {
            stopLoading();
          }
        },
      });
    } else {
      stopLoading();
      showNotification("warning", "Caution", "Login First");
    }
  } else {
    stopLoading();
    showNotification("warning", "Caution", "Select the item amount");
  }
}


// function getRelatedProducts(productCategory,productId){
//   console.log(productCategory);
//   $.ajax({
//     type:"POST",
//     url:apiLink,
//     data:{
//       action:"getRelatedProducts",
//       product_id:productId,
//       product_category:productCategory
//     },
//     success:function(response){
//       console.log(response);
//       var template="";
//       if(response.success==true){
//         var dataset=response.data;
//         console.log(dataset);
//         dataset.forEach((eachItem,index)=>{
//           console.log(eachItem);
//           template+=`
//           <div class="product-wrap">
//               <div class="product-img mb-15">
//                   <a href="product-details.html"><img src="${imageBaseUrl + eachItem.images[0]['image_url']}" alt="product"></a>
//               </div>
//               <div class="product-content">
//                   <span>${eachItem.product_category}</span>
//                   <h4><a>${eachItem.product_name}</a></h4>
//                   <div class="price-addtocart">
//                       <div class="product-price">
//                           <span>Rs ${eachItem.product_price}</span>
//                       </div>
//                   </div>
//               </div>
//           </div>
//           `;

//         });
      
        
//       $('#view-related-products').html(template);
//       }
//     }
//   })
// }