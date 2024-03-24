$(document).ready(function () {
  getFeaturedProducts();
  getAllProducts();
});

function getAllProducts() {
  $.ajax({
    type: "POST",
    url: "http://localhost/nobelcrmbackend/index.php",
    data: {
      action: "fetchProducts",
    },
    success: function (response) {
      var receivedData = response.data;
      var baseUrl = "http://localhost/nobelcrmbackend/";
      var producTemplate = "";

      receivedData.forEach((item,index)=>{
        console.log(item);
        producTemplate+=
                        `
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
                                <h4><a href="product-details.html">${item.product_name}</a></h4>
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

      $('#all-products-home').html(producTemplate);
    },
  });
}

function getFeaturedProducts() {
  $.ajax({
    url: "http://localhost/nobelcrmbackend/index.php",
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
        producTemplate += `<div class="product-wrap product-border-2 pro-hover-shadow mb-40">
        <div class="product-img mb-15">
            <a href="product-details.html"><img src="${
              baseUrl + product.images[0].image_url
            }" alt="product"></a>
            <div class="product-action-3">
                <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i
                        class="la la-arrows"></i></a>
                <!--<a title="Wishlist" href="#"><i class="la la-heart-o"></i></a> -->
                <a title="Add To Cart" href="#"><i class="la la-cart-plus"></i></a>
            </div>
        </div>
        <div class="product-content-2">
            <h4><a href="product-details.html">${product.product_name}</a></h4>
            <span>${product.product_category}</span>
            <div class="pro-price-2">
                <span>$${product.price}</span>
            </div>
        </div>
    </div>`;
      });

      $(".dynamic-dataset").html(producTemplate);
      $(".dynamic-dataset").owlCarousel("destroy"); // Destroy any existing initialization
      $(".dynamic-dataset").owlCarousel({
        // Your Owl Carousel settings here
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 4,
          },
        },
      });
    },
  });
}
