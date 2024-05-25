<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Nobel Story | Checkout</title>
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/gem-favicon.png">

    <!-- CSS
	============================================ -->

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">
    <!-- Icon Font CSS -->
    <link rel="stylesheet" href="assets/css/vendor/line-awesome.css">
    <link rel="stylesheet" href="assets/css/vendor/themify.css">
    <!-- othres CSS -->
    <link rel="stylesheet" href="assets/css/plugins/animate.css">
    <link rel="stylesheet" href="assets/css/plugins/owl-carousel.css">
    <link rel="stylesheet" href="assets/css/plugins/slick.css">
    <link rel="stylesheet" href="assets/css/plugins/magnific-popup.css">
    <link rel="stylesheet" href="assets/css/plugins/jquery-ui.css">
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- izToast styles -->
    <link rel="stylesheet" href="assets/js/plugins/iziToast/dist/css/iziToast.min.css">

    <!-- notiflix styles -->
    <link rel="stylesheet" href="assets/js/plugins/notiflix/dist/notiflix-3.2.7.min.css">
    <style>
        .btn-save-styles {
            display: block;
            cursor: pointer;
            padding: 16px 50px 17px;
            text-transform: uppercase;
            font-weight: 700;
            /* width: 100%; */
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            background-color: #ff5151;
            border: none;
        }

        .btn-save-styles:hover {
            background-color: #333;
        }

        .active-text-fields {
            border: 1px solid #000 !important;
        }
    </style>


</head>

<body>
    <div class="main-wrapper">
        <?php include 'common-components/navbar.php' ?>
        
        <div class="breadcrumb-area bg-img" style="background-image:url(assets/images/slider/1.jpg);">
            <div class="container">
                <div class="breadcrumb-content text-center">
                    <h2 style="color:white">checkout page</h2>
                    <!-- <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li class="active">checkout </li>
                    </ul> -->
                </div>
            </div>
        </div>
        <div class="checkout-main-area pt-90 pb-90">
            <div class="container">
                <!-- <div class="customer-zone mb-20">
                    <p class="cart-page-title">Returning customer? <a class="checkout-click1" href="#">Click here to login</a></p>
                    <div class="checkout-login-info">
                        <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                        <form action="#">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="sin-checkout-login">
                                        <label>Username or email address <span>*</span></label>
                                        <input type="text" name="user-name">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="sin-checkout-login">
                                        <label>Passwords <span>*</span></label>
                                        <input type="password" name="user-password">
                                    </div>
                                </div>
                            </div>
                            <div class="button-remember-wrap">
                                <button class="button" type="submit">Login</button>
                                <div class="checkout-login-toggle-btn">
                                    <input type="checkbox">
                                    <label>Remember me</label>
                                </div>
                            </div>
                            <div class="lost-password">
                                <a href="#">Lost your password?</a>
                            </div>
                        </form>
                        <div class="checkout-login-social">
                            <span>Login with:</span>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Google</a></li>
                            </ul>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="customer-zone mb-20">
                    <p class="cart-page-title">Have a coupon? <a class="checkout-click3" href="#">Click here to enter your code</a></p>
                    <div class="checkout-login-info3">
                        <form action="#">
                            <input type="text" placeholder="Coupon code">
                            <input type="submit" value="Apply Coupon">
                        </form>
                    </div>
                </div> -->
                <div class="checkout-wrap pt-30">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="billing-info-wrap mr-50">
                                <div class="d-flex justify-content-between">
                                    <h3>Billing Details</h3>
                                    <p class="btn-toggle-billing-details" style="color:#ff5151;font-weight:500;cursor:pointer">Update Billing Details</p>
                                </div>
                                <form id="form-billing-details">
                                    <div class="row">

                                        <div class="col-lg-6 col-md-6">
                                            <div class="billing-info mb-20">
                                                <label>First Name <abbr class="required" title="required">*</abbr></label>
                                                <input name="userId" class="billing-common" type="hidden" id="user-id" disabled />
                                                <input name="firstName" id="billingfirstName" class="billing-common" type="text" disabled>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="billing-info mb-20">
                                                <label>Last Name <abbr class="required" title="required">*</abbr></label>
                                                <input name="lastName" id="billinglastName" class="billing-common" type="text" disabled>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="billing-info mb-20">
                                                <label>House Number/Street Number <abbr class="required" title="required">*</abbr></label>
                                                <input disabled id="billingHouseNumber" name="houseNumber" class="billing-address billing-common" placeholder="House number and street name" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="billing-info mb-20">
                                                <label>Town / City <abbr class="required" title="required">*</abbr></label>
                                                <input id="billingTownCity" class="billing-common" disabled name="townCity" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="billing-info mb-20">
                                                <label>State / Province <abbr class="required" title="required">*</abbr></label>
                                                <input id="billingStateProvince" class="billing-common" disabled name="stateProvince" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="billing-info mb-20">
                                                <label>Postcode / ZIP <abbr class="required" title="required">*</abbr></label>
                                                <input id="billingZip" class="billing-common" disabled name="postalZip" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="billing-select mb-20">
                                                <label>Country <abbr class="required" title="required">*</abbr></label>
                                                <input id="billingCountry" class="billing-common" disabled name="country" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="billing-info mb-20">
                                                <label>Phone <abbr class="required" title="required">*</abbr></label>
                                                <input id="billingPhoneNumber" class="billing-common" disabled name="phoneNumber" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="billing-info mb-20">
                                                <label>Email Address <abbr class="required" title="required">*</abbr></label>
                                                <input id="billingEmail" class="billing-common" disabled name="email" type="text">
                                            </div>

                                        </div>
                                        <div class="single-input-item">
                                            <button type="submit" id="update-billing-details" class="btn-save-changes btn-save-styles d-none">Save Changes</button>
                                        </div>

                                    </div>
                                </form>
                                <!-- <div class="checkout-account mb-25">
                                    <input class="checkout-toggle2" type="checkbox">
                                    <span>Create an account?</span>
                                </div>
                                <div class="checkout-account-toggle open-toggle2 mb-30">
                                    <label>Email Address</label>
                                    <input placeholder="Password" type="password">
                                </div> -->
                                <div class="checkout-account mt-25">
                                    <input id="check-ship-different" class="checkout-toggle" type="checkbox">
                                    <!-- <span for="check-ship-different">Ship to a different address?</span> -->
                                    <label class="ms-3 w-700" for="check-ship-different">Ship to a different address?</label>
                                </div>
                                <div class="different-address open-toggle mt-30">
                                    <form id="form-different-shipping">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="billing-info mb-20">
                                                    <label>First Name</label>
                                                    <input name="userId" class="billing-common" type="hidden" id="user-id-other" disabled />
                                                    <input required type="text" name="firstName">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="billing-info mb-20">
                                                    <label>Last Name</label>
                                                    <input required name="lastName" type="text">
                                                </div>
                                            </div>
                                            <!-- <div class="col-lg-12">
                                            <div class="billing-info mb-20">
                                                <label>Company Name</label>
                                                <input type="text">
                                            </div>
                                        </div> -->

                                            <div class="col-lg-12">
                                                <div class="billing-info mb-20">
                                                    <label>House Number/Street Number</label>
                                                    <input required name="houseNumber" class="billing-address" placeholder="House number and street name" type="text">
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="billing-info mb-20">
                                                    <label>Town / City</label>
                                                    <input required name="townCity" type="text">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="billing-info mb-20">
                                                    <label>State / Province</label>
                                                    <input required name="stateProvince" type="text">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="billing-info mb-20">
                                                    <label>Postcode / ZIP</label>
                                                    <input required name="postalZip" type="text">
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="billing-select mb-20">
                                                    <label>Country</label>
                                                    <input required name="country" type="text">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="billing-info mb-20">
                                                    <label>Phone</label>
                                                    <input required name="phoneNumber" type="text">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="billing-info mb-20">
                                                    <label>Email Address</label>
                                                    <input required name="email" type="text">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="additional-info-wrap">
                                    <label>Order notes</label>
                                    <textarea id="optional-message" placeholder="Notes about your order, e.g. special notes for delivery. " name="message"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="your-order-area order-area-styles">
                                <h3>Your order</h3>
                                <div class="your-order-wrap gray-bg-4">
                                    <div class="your-order-info-wrap">
                                        <div class="your-order-info">
                                            <ul>
                                                <li>Product <span>(lkr) Total</span></li>
                                            </ul>
                                        </div>
                                        <div class="your-order-middle">
                                            <ul class="place-order-product-list">
                                                <!-- <li>Product Name X 1 <span>$329 </span></li>
                                                <li>Product Name X 1 <span>$329 </span></li> -->
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-subtotal">
                                            <ul>
                                                <li>Subtotal <span id="place-order-subtotal"></span></li>
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-shipping">
                                            <ul id="place-order-shipping-status">
                                                
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-total">
                                            <ul>
                                                <li>Total <span class="place-order-total-amount"></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="payment-method">
                                        <div class="pay-top sin-payment">
                                            <input id="payment_method_1" class="input-radio" type="radio" value="cheque" checked="checked" name="payment_method">
                                            <label for="payment_method_1"> Direct Bank Transfer </label>
                                            <div class="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                            </div>
                                        </div>
                                        <div class="pay-top sin-payment">
                                            <input id="payment-method-2" class="input-radio" type="radio" value="cheque" name="payment_method">
                                            <label for="payment-method-2">Check payments</label>
                                            <div class="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                            </div>
                                        </div>
                                        <div class="pay-top sin-payment">
                                            <input id="payment-method-3" class="input-radio" type="radio" value="cheque" name="payment_method">
                                            <label for="payment-method-3">Cash on delivery </label>
                                            <div class="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                            </div>
                                        </div>
                                        <div class="pay-top sin-payment sin-payment-3">
                                            <input id="payment-method-4" class="input-radio" type="radio" value="cheque" name="payment_method">
                                            <label for="payment-method-4">PayPal <img alt="" src="assets/images/icon-img/payment.png"><a href="#">What is PayPal?</a></label>
                                            <div class="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="Place-order mt-40">
                                    <a id="btn-place-order" href="">Place Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include 'common-components/footer.php' ?>
    </div>
    <!-- JS
============================================ -->

    <!-- Modernizer JS -->
    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
    <!-- Modernizer JS -->
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="assets/js/vendor/bootstrap.min.js"></script>

    <!-- Slick Slider JS -->
    <script src="assets/js/plugins/countdown.js"></script>
    <script src="assets/js/plugins/counterup.js"></script>
    <script src="assets/js/plugins/images-loaded.js"></script>
    <script src="assets/js/plugins/isotope.js"></script>
    <script src="assets/js/plugins/instafeed.js"></script>
    <script src="assets/js/plugins/jquery-ui.js"></script>
    <script src="assets/js/plugins/jquery-ui-touch-punch.js"></script>
    <script src="assets/js/plugins/magnific-popup.js"></script>
    <script src="assets/js/plugins/owl-carousel.js"></script>
    <script src="assets/js/plugins/scrollup.js"></script>
    <script src="assets/js/plugins/waypoints.js"></script>
    <script src="assets/js/plugins/slick.js"></script>
    <script src="assets/js/plugins/wow.js"></script>
    <script src="assets/js/plugins/textillate.js"></script>
    <script src="assets/js/plugins/elevatezoom.js"></script>
    <script src="assets/js/plugins/sticky-sidebar.js"></script>
    <script src="assets/js/plugins/smoothscroll.js"></script>

    <!-- izToast js -->
    <script src="assets/js/plugins/iziToast/dist/js/iziToast.min.js"></script>
    <!-- notiflix js -->
    <script src="assets/js/plugins/notiflix/dist/notiflix-3.2.7.min.js"></script>
    <!-- Main JS -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/pageScripts/navbar-scripts.js"></script>
    <script src="assets/js/pageScripts/checkout-page.js"></script>
</body>

</html>