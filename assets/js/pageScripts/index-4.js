var apiLink = "http://localhost/nobelcrmbackend/index.php";
var swiperFeatures;
var defaultQyValue = 0;
$(document).ready(function () {
  getFeaturedProducts();
  getAllProducts();

  //quick view modal get more details
  $(".dynamic-dataset").on(
    "click",
    ".product-modal-trigger",
    getFeaturedModalDetails
  );

  $("#modalslider-thumbnails").on("click", "a", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    var target = $(this).attr("href"); // Get the target from the href attribute

    // Activate the target tab
    $(".tab-pane").removeClass("active show");
    $(target).addClass("active show");
  });

  //cart minus handler
  $(".cart-plus-minus").on("click", ".dec", quantityDecrement);

  //cart plus handler
  $(".cart-plus-minus").on("click", ".inc", quantityIncreament);

  //on close bootstrap modal
  $("#exampleModal").on("hidden.bs.modal", onCloseModalDetails);
});

//fetch all products on load
function getAllProducts() {
  $.ajax({
    type: "POST",
    url: apiLink,
    data: {
      action: "fetchProducts",
    },
    success: function (response) {
      var receivedData = response.data;
      var baseUrl = "http://localhost/nobelcrmbackend/";
      var producTemplate = "";

      receivedData.forEach((item, index) => {
        // console.log(item);
        producTemplate += `
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div class="product-wrap mb-35">
                            <div class="product-img mb-15">
                                <img src="${baseUrl + item.images[0].image_url}"
                                alt="product">
                                <div class="product-action-3">
                                    <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View"
                                        href="#"><i class="la la-arrows"></i></a>
                                    <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                                    <a title="Add To Cart" href="#"><i class="la la-cart-plus"></i></a>
                                   
                                </div>
                            </div>
                            <div class="product-content">
                                <span>${item.product_category}</span>
                                <h4><a href="product-details.html">${
                                  item.product_name
                                }</a></h4>
                                <div class="price-addtocart">
                                    <div class="product-price">
                                        <span>$${item.product_price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        `;
      });

      $("#all-products-home").html(producTemplate);
    },
  });
}

//fetch featured products onload
function getFeaturedProducts() {
  $.ajax({
    url: apiLink,
    type: "POST",
    data: {
      action: "featuredProducts",
    },
    success: function (response) {
      var receivedData = response.data;
      var baseUrl = "http://localhost/nobelcrmbackend/";
      var producTemplate = "";
      receivedData.forEach((product, index) => {
        //console.log(baseUrl + product.images[0].image_url);
        producTemplate += `<div class="swiper-slide"><div class="product-wrap product-border-2 pro-hover-shadow mb-40">
        <div class="product-img mb-15">
            <a href="product-details.html"><img src="${
              baseUrl + product.images[0].image_url
            }" alt="product"></a>
            <div class="product-action-3">
                <a class="product-modal-trigger" data-productid=${
                  product.product_id
                } data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i
                        class="la la-arrows"></i></a>
                <!--<a title="Wishlist" href="#"><i class="la la-heart-o"></i></a> -->
                <a title="Add To Cart" href="#"><i class="la la-cart-plus"></i></a>
            </div>
        </div>
        <div class="product-content-2 text-start">
            <h4><a href="product-details.html">${product.product_name}</a></h4>
            <span>${product.product_category}</span>
            <div class="pro-price-2">
                <span>Rs.${product.price}</span>
            </div>
        </div>
    </div></div>`;
      });

      $(".dynamic-dataset").html(producTemplate);
      swiperFeatures = new Swiper(".mySwiper-feature", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    },
  });
}

function updateSwiper() {
  var swiperA = document.querySelector(".mySwiper2").swiper;
  var swiperB = document.querySelector(".mySwiper").swiper;
  if (swiperA) {
    swiperA.destroy();
    swiperB.destroy();
  } else {
  }
}
//get modal details in featureed section
function getFeaturedModalDetails() {
  updateSwiper();
  var productId = $(this).data("productid");

  $.ajax({
    type: "POST",
    url: apiLink,
    data: {
      action: "selectedProduct",
      product_id: productId,
    },
    success: function (response) {
      var receivedData = response.data[0];
      console.log(receivedData);
      var baseUrl = "http://localhost/nobelcrmbackend/";
      var quickViewBigImg = "";
      var bigImageThumbnails = "";

      defaultQyValue = 0;
      $("#featured-product-id").val(receivedData.product_id);
      $("#selected-item-category").text(receivedData.product_category);
      $("#selected-item-name").text(receivedData.product_name);
      $("#selected-item-price").text(receivedData.price);
      $(".cart-plus-minus-box").val(defaultQyValue);
      receivedData.images.forEach((eachImage, index) => {
        quickViewBigImg += `
                      <div class="swiper-slide">
                        <img src="${baseUrl + eachImage.image_url}" />
                      </div>`;
      });

      // Destroy the current Owl Carousel
      $("#modalslider-thumbnails").trigger("destroy.owl.carousel");
      $("#modalslider-thumbnails").html(bigImageThumbnails);
      $("#quickview-big-img").html(quickViewBigImg);
      $(".main-viewer").html(quickViewBigImg);
      $(".thumb-viewer").html(quickViewBigImg);

      var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 2,
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

//function for plus
function quantityIncreament() {
  $(".cart-plus-minus").addClass("d-none");
  $(".awaiting-preloader").removeClass("d-none");
  var userDataCheck = JSON.parse(localStorage.getItem("userData"));
  if (userDataCheck != null) {
    //check selected product quantity
    var selectedProductId = $("#featured-product-id").val();
    $.ajax({
      type: "POST",
      url: apiLink,
      data: {
        action: "selectedProduct",
        product_id: selectedProductId,
      },
      success: function (response) {
        $(".cart-plus-minus").removeClass("d-none");
        $(".awaiting-preloader").addClass("d-none");
        var receivedData = response.data[0];
        var productQuantity = receivedData.quantity;
        if (productQuantity > 0) {
          defaultQyValue++;
          $(".cart-plus-minus-box").val(defaultQyValue);
          // reduce inventory quantity
          $.ajax({
            type: "POST",
            url: apiLink,
            data: {
              action: "updateInventory",
              product_id: selectedProductId,
              updated_quantity: productQuantity - 1,
            },
            success: function (response) {
              console.log(response);
            },
          });
        } else {
          $(".cart-plus-minus-box").val(defaultQyValue);
          iziToast.warning({
            title: "Caution",
            message: "You have reach the maximum quantity for the product.",
            position: "center",
            zindex: 2000,
            overlay: true,
            timeout: 3000,
          });
        }
      },
    });
  } else {
    $(".cart-plus-minus-box").val(defaultQyValue);
  }
}

//function for minus
function quantityDecrement() {
  $(".cart-plus-minus").addClass("d-none");
  $(".awaiting-preloader").removeClass("d-none");
  if (localStorage.getItem("userData") !== null) {
    if (defaultQyValue != 0) {
      var selectedProductId = $("#featured-product-id").val();
      $.ajax({
        type: "POST",
        url: apiLink,
        data: {
          action: "selectedProduct",
          product_id: selectedProductId,
        },
        success: function (response) {
          $(".cart-plus-minus").removeClass("d-none");
          $(".awaiting-preloader").addClass("d-none");
          var receivedData = response.data[0];
          var productQuantity = receivedData.quantity;
          defaultQyValue--;
          $(".cart-plus-minus-box").val(defaultQyValue);
          $.ajax({
            type: "POST",
            url: apiLink,
            data: {
              action: "updateInventory",
              product_id: selectedProductId,
              updated_quantity: productQuantity + 1,
            },
            success: function (response) {
              console.log(response);
            },
          });
        },
      });
    } else {
      $(".cart-plus-minus-box").val(defaultQyValue);
      $(".cart-plus-minus").removeClass("d-none");
      $(".awaiting-preloader").addClass("d-none");
    }
  } else {
    $(".cart-plus-minus-box").val(defaultQyValue);
  }
}

//on close modal get details
function onCloseModalDetails() {
  Notiflix.Loading.init({
    svgColor: "#ffffff",
  });
  Notiflix.Loading.pulse();
  var productId = $("#featured-product-id").val();
  var selectedQuantity = $(".cart-plus-minus-box").val();
  console.log(selectedQuantity);

  // reset product quantity
  $.ajax({
    type: "POST",
    url: apiLink,
    data: {
      action: "selectedProduct",
      product_id: productId,
    },
    success: function (response) {
      var receivedData = response.data[0];
      var productQuantity = receivedData.quantity;
      var resetAmount=parseInt(selectedQuantity)+productQuantity;
      
      $.ajax({
        type: "POST",
        url: apiLink,
        data: {
          action: "updateInventory",
          product_id: productId,
          updated_quantity:resetAmount
        },
        success: function (response) {
          Notiflix.Loading.remove();
          console.log(response);
        },
      });
    },
  });
}
