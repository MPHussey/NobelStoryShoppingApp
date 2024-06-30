//By default have zero cart items
var CART_ITEMS=0;

$(document).ready(function () {
  viewCartItems();

  //quantity increament
  $(".cart-item-list").on("click", ".item-plus", quantityIncrement);
  //Quantity decreament
  $(".cart-item-list").on("click", ".item-minus", quantityDecement);
  //remove item remove cart
  $(".cart-item-list").on("click", ".item-remove", deleteProductCart);
  //onclick proceed checkout
  $('#btn-proceed-checkout').on('click',checkItemsInCart);
});

//shopping cart page - view items

function viewCartItems() {
  Notiflix.Loading.init({
    svgColor: "#ffffff",
  });
  Notiflix.Loading.pulse();
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
        //console.log(response);
        var cartItemTemplate = "";
        //BY DEFAULT MAKE THE CART ITEMS ZERO
        CART_ITEMS=0;
        if (response.data) {
          CART_ITEMS=response.data.length;
          response.data.forEach((item, index) => {
            //console.log(item);
            var baseUrl = imageBaseUrl;
            cartItemTemplate += `
                  <tr>
                      <td class="product-thumbnail">
                          <a href="#"><img src="${
                            baseUrl + item.images[0].image_url
                          }" alt="item"></a>
                      </td>
                      <td class="product-name"><a href="#">${
                        item.product_name.length > 30
                          ? item.product_name.substring(0, 30) + ".."
                          : item.product_name
                      }</a></td>
                      <td class="product-price-cart"><span class="amount">Rs ${
                        item.price
                      }</span></td>
                      <td class="product-quantity">
                          <div style="display: inline-block;
                          border: 1px solid lightgray;
                          padding: 9px 17px;
                          border-radius: 5px;" class="quantity-wrapper">
                              <span data-quantity="${item.quantity}" data-id="${
              item.product_id
            }" class="item-minus" style="padding: 5px 10px;cursor:pointer;
                              ">-</span>
                              <span style="margin: 0px 10px;">${
                                item.quantity
                              }</span>
                              <span data-quantity="${item.quantity}" data-id="${
              item.product_id
            }" class="item-plus" style="padding: 5px 10px;cursor:pointer;">+</span>
                          </div>
                      </td>
                      <td class="product-subtotal">Rs  ${(
                        parseFloat(item.price) * item.quantity
                      ).toFixed(2)}</td>
                      <td class="product-remove">
                          <a data-id="${item.product_id}" data-quantity="${
              item.quantity
            }" class="item-remove"><i class="la la-close"></i></a>
                      </td>
                  </tr>
                  `;
          });
          viewShoppingCart();
        }

        $(".cart-item-list").html(cartItemTemplate);
        Notiflix.Loading.remove();
      },
    });
  } else {
    window.location.href = "index.php";
  }
}

//each product item increment
function quantityIncrement() {
  Notiflix.Loading.init({
    svgColor: "#ffffff",
  });
  Notiflix.Loading.pulse();
  var productId = $(this).data("id");
  var currentQuantity = $(this).data("quantity");
  var userDataCheck = JSON.parse(localStorage.getItem("userData"));
  var userId = userDataCheck.userId;
  console.log(currentQuantity);
  //get current selected product amount
  $.ajax({
    type: "POST",
    url: apiLink,
    data: {
      action: "selectedProduct",
      product_id: productId,
    },
    success: function (response) {
      console.log(response);
      var currentProductQunatity = response.data[0].quantity;
      console.log(currentProductQunatity);
      //if current inventory is not zero
      if (currentProductQunatity != 0) {
        //update the inventory by reducing 1 item
        $.ajax({
          type: "POST",
          url: apiLink,
          data: {
            action: "updateInventory",
            product_id: productId,
            updated_quantity: currentProductQunatity - 1,
          },
          success: function (response) {
            //console.log(response);
            if (response.success == true) {
              $.ajax({
                type: "POST",
                url: apiLink,
                data: {
                  action: "addToCart",
                  user_id: userId,
                  product_id: productId,
                  product_quantity: currentQuantity + 1,
                },
                success: function (response) {
                  console.log(response);
                  if (response.success == true) {
                    viewCartItems();
                  }
                  Notiflix.Loading.remove();
                },
              });
            }
          },
        });
      } else {
        Notiflix.Loading.remove();
        iziToast.warning({
          title: "Caution",
          message: "Quantity reached its maximum quantity",
          position: "center",
          zindex: 2000,
          overlay: true,
          timeout: 3000,
        });
      }
    },
  });
}

//product quantity decrement
function quantityDecement() {
  Notiflix.Loading.init({
    svgColor: "#ffffff",
  });
  Notiflix.Loading.pulse();
  var productId = $(this).data("id");
  var currentQuantity = $(this).data("quantity");
  var userDataCheck = JSON.parse(localStorage.getItem("userData"));
  var userId = userDataCheck.userId;

  if (currentQuantity != 1) {
    //get current selected product amount
    $.ajax({
      type: "POST",
      url: apiLink,
      data: {
        action: "selectedProduct",
        product_id: productId,
      },
      success: function (response) {
        var currentProductQunatity = parseInt(response.data[0].quantity);
        //console.log(currentProductQunatity);
        //update inventory by adding back
        $.ajax({
          type: "POST",
          url: apiLink,
          data: {
            action: "updateInventory",
            product_id: productId,
            updated_quantity: currentProductQunatity + 1,
          },
          success: function (response) {
            if (response.success == true) {
              //remove item amount from cart
              $.ajax({
                type: "POST",
                url: apiLink,
                data: {
                  action: "addToCart",
                  user_id: userId,
                  product_id: productId,
                  product_quantity: parseInt(currentQuantity) - 1,
                },
                success: function (response) {
                  //console.log(response);
                  if (response.success == true) {
                    viewCartItems();
                  }
                  Notiflix.Loading.remove();
                },
              });
            }
          },
        });
      },
    });
  } else {
    $.ajax({
      type: "POST",
      url: apiLink,
      data: {
        action: "getUserCartDetails",
        user_id: userId,
      },
      success: function (response) {
        console.log(response);
        var cartItemLength = response.data.length;
        if (cartItemLength > 1) {
          //cart id
          var cartId = response.data[0].cart_id;
          console.log(cartId);
          //get current inventory amount
          deleteItem(cartId, productId, currentQuantity, "partial");
        } else {
          //else delete whole cart
          var cartId = response.data[0].cart_id;
          deleteItem(cartId, productId, currentQuantity, "full");
        }
      },
    });
  }
}

//delete an item from the cart
function deleteProductCart() {
  var productId = $(this).data("id");
  var currentQuantity = $(this).data("quantity");
  var userDataCheck = JSON.parse(localStorage.getItem("userData"));
  var userId = userDataCheck.userId;
  iziToast.question({
    timeout: 20000, // Timeout for the toast
    close: false,
    overlay: true,
    displayMode: "once",
    id: "question",
    zindex: 2000,
    title: "Confirm",
    message: "Are you sure you want to delete this item?",
    position: "center",
    buttons: [
      [
        "<button><b>YES</b></button>",
        function (instance, toast) {
          instance.hide({ transitionOut: "fadeOut" }, toast, "button");

          Notiflix.Loading.init({
            svgColor: "#ffffff",
          });
          Notiflix.Loading.pulse();
          //console.log("delete click");

          //check cart item length
          $.ajax({
            type: "POST",
            url: apiLink,
            data: {
              action: "getUserCartDetails",
              user_id: userId,
            },
            success: function (response) {
              //console.log(response);
              var cartItemLength = response.data.length;
              if (cartItemLength != 1) {
                //cart id
                var cartId = response.data[0].cart_id;
                console.log(cartId);
                //get current inventory amount
                deleteItem(cartId, productId, currentQuantity, "partial");
              } else {
                //else delete whole cart
                var cartId = response.data[0].cart_id;
                deleteItem(cartId, productId, currentQuantity, "full");
              }
            },
          });
        },
        true,
      ],
      [
        "<button>NO</button>",
        function (instance, toast) {
          instance.hide({ transitionOut: "fadeOut" }, toast, "button");
        },
      ],
    ],
    onClosing: function (instance, toast, closedBy) {
      console.info("Closing | closedBy: " + closedBy);
    },
    onClosed: function (instance, toast, closedBy) {
      console.info("Closed | closedBy: " + closedBy);
    },
  });
}

//delete single item from cart common function
function deleteItem(cartId, productId, currentQuantity, deleteType) {
  $.ajax({
    type: "POST",
    url: apiLink,
    data: {
      action: "selectedProduct",
      product_id: productId,
    },
    success: function (response) {
      var currentProductQunatity = response.data[0].quantity;
      //update inventory by remove items from cart
      $.ajax({
        type: "POST",
        url: apiLink,
        data: {
          action: "updateInventory",
          product_id: productId,
          updated_quantity: parseInt(currentProductQunatity) + parseInt(currentQuantity),
        },
        success: function (response) {
          if (response.success == true) {
            $.ajax({
              type: "POST",
              url: apiLink,
              data: {
                action: "deleteCartItem",
                product_id: productId,
                deleteType: deleteType,
                cartId: cartId,
              },
              success: function (response) {
                console.log(response);
                if (response.success == true) {
                  viewCartItems();
                  viewShoppingCart();
                }
                Notiflix.Loading.remove();
              },
            });
          }
        },
      });
    },
  });
}

//onclick proceed checkout
function checkItemsInCart(){
  if(CART_ITEMS != 0){
    window.location.href="checkout.php";
  }else{
    iziToast.warning({
      title: "Caution",
      message: "Cart is empty",
      position: "center",
      zindex: 2000,
      overlay: true,
      timeout: 3000,
    });
  }
}
