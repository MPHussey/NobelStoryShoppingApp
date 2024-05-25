<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Nobel Story | Cart</title>
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

</head>

<body>
    <div class="main-wrapper">
        <?php include 'common-components/navbar.php' ?>
        
        <div class="breadcrumb-area bg-img" style="background-image:url(assets/images/slider/1.jpg);">
            <div class="container">
                <div class="breadcrumb-content text-center">
                    <h2 style="color:white">cart page</h2>
                    <!-- <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li class="active">cart </li>
                    </ul> -->
                </div>
            </div>
        </div>
        <div class="cart-main-area pt-85 pb-90">
            <div class="container">
                <h3 class="cart-page-title">Your cart items</h3>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <form action="#">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="table-content table-responsive cart-table-content">
                                        <table style="width: 100%;">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Product Name</th>
                                                    <th>Unit Price</th>
                                                    <th>Qty</th>
                                                    <th>Subtotal</th>
                                                    <th>action</th>
                                                </tr>
                                            </thead>
                                            <tbody class="cart-item-list">
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="cart-shiping-update-wrapper">
                                        <div class="cart-clear">
                                            <a href="shop.php">Continue Shopping</a>
                                            <!-- <a href="#">Clear Shopping Cart</a> -->
                                        </div>
                                        <div class="cart-shiping-update">
                                            <a id="btn-proceed-checkout" >Proceed to checkout</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>  
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
    <script src="assets/js/pageScripts/cart-page.js"></script>
</body>

</html>