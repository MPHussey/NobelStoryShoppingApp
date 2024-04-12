$(document).ready(function () {
  viewCartItems();
});

//shopping cart page - view items

function viewCartItems() {
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
      success:function(response){
        console.log(response);
        var cartItemTemplate="";
        response.data.forEach((item,index)=>{
            console.log(item);
            var baseUrl = "http://localhost/nobelcrmbackend/";
            cartItemTemplate+=`
            <tr>
                <td class="product-thumbnail">
                    <a href="#"><img src="${baseUrl + item.images[0].image_url}" alt="item"></a>
                </td>
                <td class="product-name"><a href="#">${
                    item.product_name.length > 30
                      ? item.product_name.substring(
                          0,
                          30
                        ) + ".."
                      : item.product_name
                  }</a></td>
                <td class="product-price-cart"><span class="amount">Rs ${item.price}</span></td>
                <td class="product-quantity">
                    <div style="display: inline-block;
                    border: 1px solid lightgray;
                    padding: 9px 17px;
                    border-radius: 5px;" class="quantity-wrapper">
                        <span style="padding: 5px 10px;cursor:pointer;
                        ">-</span>
                        <span style="margin: 0px 10px;">${item.quantity}</span>
                        <span style="padding: 5px 10px;cursor:pointer;">+</span>
                    </div>
                </td>
                <td class="product-subtotal">Rs  ${(parseFloat(item.price)*item.quantity).toFixed(2)}</td>
                <td class="product-remove">
                    <a href="#"><i class="la la-close"></i></a>
                </td>
            </tr>
            `;
        });

        $('.cart-item-list').html(cartItemTemplate);
      }
    });
  }else{
    window.location.href="index.php";
  }
}
