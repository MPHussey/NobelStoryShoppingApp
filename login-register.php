<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Nobel Story | User</title>
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

    <link rel="stylesheet" href="assets/css/myStyles.css">
    <!-- <link rel= "stylesheet" href= "https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css" > -->
    <style>
        .btn-reset {
            background-color: #8b5a02;
            color: #fff;
            border: medium none;
            cursor: pointer;
            font-size: 13px;
            font-weight: 600;
            line-height: 1;
            padding: 13px 30px 13px;
            text-transform: uppercase;
            -webkit-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
        }

        .btn-reset:hover {
            background-color: #010225;
        }
    </style>
</head>

<body>
    <div class="main-wrapper">
        <?php include 'common-components/navbar.php' ?>
        
        <div class="breadcrumb-area bg-img" style="background-image:url(assets/images/slider/1.jpg);">
            <div class="container">
                <div class="breadcrumb-content text-center">
                    <h2 class="text-white">login / register page</h2>
                    <ul>
                        <li>
                            <a href="index.html" class="text-white">Home</a>
                        </li>
                        <li class="active">login register </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="login-register-area pt-85 pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12 ms-auto me-auto">
                        <div class="login-register-wrapper">
                            <div class="login-register-tab-list nav">
                                <a class="active" data-bs-toggle="tab" href="#lg1">
                                    <h4> login </h4>
                                </a>
                                <a data-bs-toggle="tab" href="#lg2">
                                    <h4> register </h4>
                                </a>
                            </div>
                            <div class="tab-content">
                                <div id="lg1" class="tab-pane active">
                                    <div class="login-form-container p-5">
                                        <div class="login-register-form">
                                            <form id="user-login">
                                                <input type="text" name="loginEmail" placeholder="Email Address" class="" required>
                                                <input type="password" name="loginPassword" placeholder="Password" required>
                                                <div class="button-box">
                                                    <div class="login-toggle-btn">
                                                        <!-- <input type="checkbox">
                                                        <label>Remember me</label> -->
                                                        <a class="btn-forgot-password">Forgot Password?</a>
                                                    </div>
                                                    <button type="submit">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div id="lg2" class="tab-pane">
                                    <div class="login-form-container p-5">
                                        <div class="login-register-form">
                                            <form id="register-user">
                                                <div class="input-group">
                                                    <input type="text" name="firstName" placeholder="First Name" class="col-6" required>
                                                    <input type="text" name="lastName" placeholder="Last Name" class="col-6" required>
                                                </div>
                                                <input type="email" name="emailAddress" placeholder="E-Mail" required>
                                                <input type="password" name="password" placeholder="Password" required>
                                                <input type="password" name="confirm-password" placeholder="Confirm Password" required>

                                                <div class="button-box">
                                                    <button id="btn-register" type="submit">Register</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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

    <!-- JQuery Validations -->
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/additional-methods.min.js"></script>

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
    <script src="assets/js/pageScripts/login-register.js"></script>

    <!-- Modal view -->
    <div class="modal fade" id="modal-forgot-password" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div style="width: 500px;" class="modal-dialog modal-sm modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title fs-5" id="staticBackdropLabel">Password Reset</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body pt-2">
                    <div class="container-fluid p-0">
                        <div class="row">
                            <div class="col-md-12">
                                <p>We will email you instructions to reset your password, if you are a already a member.</p>
                            </div>
                            <div class="col-md-12 mt-3">
                                <input id="resetEmail" type="text" class="form-control" placeholder="Enter Your Email Address">
                                <button class="btn-reset mt-3" type="submit">Reset Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>