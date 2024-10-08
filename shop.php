<!doctype html>
<html class="no-js" lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Nobel | Shop</title>
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
        .selected-color{
            color: #ff5151;
        }
    </style>
</head>

<body>
    <div class="main-wrapper">
        <?php include 'common-components/navbar.php' ?>
        
        <div class="breadcrumb-area bg-img" style="background-image:url(assets/images/slider/1.jpg);">
            <div class="container">
                <div class="breadcrumb-content text-center">
                    <h2 style="color:white">shop page</h2>
                    <!-- <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li class="active">shop full wide </li>
                    </ul> -->
                </div>
            </div>
        </div>
        <div class="shop-area pt-90 pb-90 section-padding-2">
            <div class="container-fluid">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="shop-topbar-wrapper">
                            <div class="shop-topbar-left">
                                <div class="view-mode nav">
                                    <!-- <a class="active" href="#shop-1" data-bs-toggle="tab"><i class="la la-th"></i></a> -->
                                    <!-- <a href="#shop-2" data-bs-toggle="tab"><i class="la la-list-ul"></i></a> -->
                                </div>
                                <p>Showing 1 - 20 of 30 results </p>
                            </div>
                            <div class="product-sorting-wrapper">
                                <!-- <div class="product-shorting shorting-style">
                                    <label>View:</label>
                                    <select>
                                        <option value=""> 20</option>
                                        <option value=""> 23</option>
                                        <option value=""> 30</option>
                                    </select>
                                </div> -->
                                <div class="product-show shorting-style">
                                    <label>Sort by:</label>
                                    <select class="sort-by-val">
                                        <option value="default">Default</option>
                                        <option value="desc"> price (High - Low)</option>
                                        <option value="asc"> price (Low - High)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="shop-bottom-area">
                            <div class="tab-content jump">
                                <div id="shop-1" class="tab-pane active">
                                    <div id="items-template" class="row mb-4">
                                        <!-- <div class="col-md-1">1</div> -->
                                        <!-- <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div class="product-wrap mb-35">
                                                <div class="product-img mb-15">
                                                    <a href="product-details.html"><img src="assets/images/product/pro-hm1-1.jpg" alt="product"></a>
                                                </div>
                                                <div class="product-content">
                                                    <span>Chair</span>
                                                    <h4><a>Golden Easy Spot Chair.</a></h4>
                                                    <div class="price-addtocart">
                                                        <div class="product-price">
                                                            <span>$210.00</span>
                                                        </div>
                                                        <div class="product-addtocart">
                                                            <a title="Add To Cart" href="#">+ Add To Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                        <!-- <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div class="product-wrap mb-35">
                                                <div class="product-img mb-15">
                                                    <a href="product-details.html"><img src="assets/images/product/pro-hm1-2.jpg" alt="product"></a>
                                                    <span class="price-dec">-30%</span>
                                                    <div class="product-action">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                                                        <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                                                        <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <span>Chair</span>
                                                    <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                                    <div class="price-addtocart">
                                                        <div class="product-price">
                                                            <span>$250.00</span>
                                                            <span class="old">$270.00</span>
                                                        </div>
                                                        <div class="product-addtocart">
                                                            <a title="Add To Cart" href="#">+ Add To Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div class="product-wrap mb-35">
                                                <div class="product-img mb-15">
                                                    <a href="product-details.html"><img src="assets/images/product/pro-hm1-4.jpg" alt="product"></a>
                                                    <span class="price-dec font-dec">NEW</span>
                                                    <div class="product-action">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                                                        <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                                                        <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <span>Chair</span>
                                                    <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                                    <div class="price-addtocart">
                                                        <div class="product-price">
                                                            <span>$220.00</span>
                                                        </div>
                                                        <div class="product-addtocart">
                                                            <a title="Add To Cart" href="#">+ Add To Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div class="product-wrap mb-35">
                                                <div class="product-img mb-15">
                                                    <a href="product-details.html"><img src="assets/images/product/pro-hm1-5.jpg" alt="product"></a>
                                                    <span class="new-stock"><span>Stock <br>Out</span></span>
                                                    <div class="product-action">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                                                        <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                                                        <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <span>Chair</span>
                                                    <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                                    <div class="price-addtocart">
                                                        <div class="product-price">
                                                            <span>$250.00</span>
                                                            <span class="old">$260.00</span>
                                                        </div>
                                                        <div class="product-addtocart">
                                                            <a title="Add To Cart" href="#">+ Add To Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                                <!-- <div id="shop-2" class="tab-pane">
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                                                <div class="product-list-img">
                                                    <a href="product-details.html">
                                                        <img src="assets/images/product/pro-hm1-1.jpg" alt="Product Style">
                                                    </a>
                                                    <div class="product-list-quickview">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                                                <div class="shop-list-content">
                                                    <span>Chair</span>
                                                    <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                                    <div class="pro-list-price">
                                                        <span>$40.00</span>
                                                        <span class="old-price">$50.00</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                                    <div class="product-list-action">
                                                        <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                                                        <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                                                        <a title="Add To Cart" href="#"><i class="la la-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                                                <div class="product-list-img">
                                                    <a href="product-details.html">
                                                        <img src="assets/images/product/pro-hm1-2.jpg" alt="Product Style">
                                                    </a>
                                                    <div class="product-list-quickview">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                                                <div class="shop-list-content">
                                                    <span>Chair</span>
                                                    <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                                    <div class="pro-list-price">
                                                        <span>$50.00</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                                    <div class="product-list-action">
                                                        <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                                                        <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                                                        <a title="Add To Cart" href="#"><i class="la la-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                                                <div class="product-list-img">
                                                    <a href="product-details.html">
                                                        <img src="assets/images/product/pro-hm1-3.jpg" alt="Product Style">
                                                    </a>
                                                    <div class="product-list-quickview">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                                                <div class="shop-list-content">
                                                    <span>Chair</span>
                                                    <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                                    <div class="pro-list-price">
                                                        <span>$40.00</span>
                                                        <span class="old-price">$50.00</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                                    <div class="product-list-action">
                                                        <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                                                        <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                                                        <a title="Add To Cart" href="#"><i class="la la-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                                                <div class="product-list-img">
                                                    <a href="product-details.html">
                                                        <img src="assets/images/product/pro-hm1-4.jpg" alt="Product Style">
                                                    </a>
                                                    <div class="product-list-quickview">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                                                <div class="shop-list-content">
                                                    <span>Chair</span>
                                                    <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                                    <div class="pro-list-price">
                                                        <span>$90.00</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                                    <div class="product-list-action">
                                                        <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                                                        <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                                                        <a title="Add To Cart" href="#"><i class="la la-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                                                <div class="product-list-img">
                                                    <a href="product-details.html">
                                                        <img src="assets/images/product/pro-hm1-5.jpg" alt="Product Style">
                                                    </a>
                                                    <div class="product-list-quickview">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                                                <div class="shop-list-content">
                                                    <span>Chair</span>
                                                    <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                                    <div class="pro-list-price">
                                                        <span>$60.00</span>
                                                        <span class="old-price">$80.00</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                                    <div class="product-list-action">
                                                        <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                                                        <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                                                        <a title="Add To Cart" href="#"><i class="la la-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                                                <div class="product-list-img">
                                                    <a href="product-details.html">
                                                        <img src="assets/images/product/pro-hm1-6.jpg" alt="Product Style">
                                                    </a>
                                                    <div class="product-list-quickview">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                                                <div class="shop-list-content">
                                                    <span>Chair</span>
                                                    <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                                    <div class="pro-list-price">
                                                        <span>$70.00</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                                    <div class="product-list-action">
                                                        <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                                                        <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                                                        <a title="Add To Cart" href="#"><i class="la la-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                                                <div class="product-list-img">
                                                    <a href="product-details.html">
                                                        <img src="assets/images/product/pro-hm1-7.jpg" alt="Product Style">
                                                    </a>
                                                    <div class="product-list-quickview">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                                                <div class="shop-list-content">
                                                    <span>Chair</span>
                                                    <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                                    <div class="pro-list-price">
                                                        <span>$50.00</span>
                                                        <span class="old-price">$60.00</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                                    <div class="product-list-action">
                                                        <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                                                        <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                                                        <a title="Add To Cart" href="#"><i class="la la-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="pagination-style text-center">
                                    <div id="pagination-container"></div>
                                    <!-- <ul>
                                        <li><a class="prev" href="#"><i class="la la-angle-left"></i></a></li>
                                        <li><a href="#">01</a></li>
                                        <li><a href="#">02</a></li>
                                        <li><a class="active" href="#">03</a></li>
                                        <li><a href="#">04</a></li>
                                        <li><a href="#">05</a></li>
                                        <li><a href="#">06</a></li>
                                        <li><a class="next" href="#"><i class="la la-angle-right"></i></a></li>
                                    </ul> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="sidebar-wrapper">
                            <!-- <div class="sidebar-widget">
                                <h4 class="sidebar-title">Search </h4>
                                <div class="sidebar-search mb-40 mt-20">
                                    <form class="sidebar-search-form" action="#">
                                        <input type="text" placeholder="Search here...">
                                        <button>
                                            <i class="la la-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div> -->
                            <div class="sidebar-widget shop-sidebar-border pt-40">
                                <h4 class="sidebar-title">Shop By Categories</h4>
                                <div class="shop-catigory mt-20">
                                    <ul id="product-category">
                                        <!-- <li> <a data-bs-toggle="collapse" href="#shop-catigory-1">Women Fashion <i class="la la-angle-down"></i></a>
                                            <ul id="shop-catigory-1" class="panel-collapse collapse show" data-bs-parent="#faq">
                                                <li><a href="#">Dress </a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">Sunglasses </a></li>
                                                <li><a href="#">Sweater </a></li>
                                                <li><a href="#">Handbag </a></li>
                                            </ul>
                                        </li>
                                        <li> <a data-bs-toggle="collapse" href="#shop-catigory-2">Men Fashion <i class="la la-angle-down"></i></a>
                                            <ul id="shop-catigory-2" class="panel-collapse collapse" data-bs-parent="#faq">
                                                <li><a href="#">Shirt </a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">Sunglasses </a></li>
                                                <li><a href="#">Sweater </a></li>
                                                <li><a href="#">Jacket </a></li>
                                            </ul>
                                        </li>
                                        <li> <a data-bs-toggle="collapse" href="#shop-catigory-3">Furniture <i class="la la-angle-down"></i></a>
                                            <ul id="shop-catigory-3" class="panel-collapse collapse" data-bs-parent="#faq">
                                                <li><a href="#"> Chair</a></li>
                                                <li><a href="#">Lift Chair</a></li>
                                                <li><a href="#">Bunk Bed</a></li>
                                                <li><a href="#">Computer Desk</a></li>
                                                <li><a href="#">Bookcase</a></li>
                                            </ul>
                                        </li> -->
                                        <!-- <li> <a href="#">All</a></li>
                                        <li> <a href="#">Lamp</a></li>
                                        <li> <a href="#">Electronics</a> </li>
                                        <li> <a href="#">Accessories</a></li> -->

                                    </ul>
                                </div>
                            </div>
                            <div class="shop-price-filter mt-35 shop-sidebar-border pt-40 sidebar-widget">
                                <h4 class="sidebar-title">Price Filter</h4>
                                <div class="price-filter mt-20">
                                    <span id="display-price-range"> </span>
                                    <div id="slider-range"></div>
                                    <div class="price-slider-amount">
                                        <div class="label-input">
                                            <input readonly type="text" id="amount" name="price" placeholder="Add Your Price" />
                                        </div>
                                        <button id="btn-filter-price" type="button">Filter</button>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="sidebar-widget shop-sidebar-border pt-40 mt-40">
                                <h4 class="sidebar-title">Refine By </h4>
                                <div class="sidebar-widget-list mt-20">
                                    <ul>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox"> <a href="#">On Sale <span>4</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">New <span>5</span></a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">In Stock <span>6</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div> -->
                            <!-- <div class="sidebar-widget pt-40 mt-40 shop-sidebar-border">
                                <h4 class="sidebar-title">Colour </h4>
                                <div class="sidebar-widget-list mt-20">
                                    <ul>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">Green <span>7</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">Cream <span>8</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">Blue <span>9</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">Black <span>3</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div> -->
                            <!-- <div class="sidebar-widget pt-40 mt-40 shop-sidebar-border">
                                <h4 class="sidebar-title">Size </h4>
                                <div class="sidebar-widget-list mt-20">
                                    <ul>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">XL <span>4</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">L <span>5</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">SM <span>6</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">XXL <span>7</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div> -->
                            <!-- <div class="sidebar-widget pt-40 mt-40 shop-sidebar-border">
                                <h4 class="sidebar-title">Popular Tags </h4>
                                <div class="sidebar-widget-tag mt-20">
                                    <ul>
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">For Men</a></li>
                                        <li><a href="#">Women</a></li>
                                        <li><a href="#">Fashion</a></li>
                                    </ul>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include 'common-components/footer.php' ?>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-5 col-sm-12 col-xs-12">
                                <div class="tab-content quickview-big-img">
                                    <div id="pro-1" class="tab-pane fade show active">
                                        <img src="assets/images/product/quickview-l1.jpg" alt="">
                                    </div>
                                    <div id="pro-2" class="tab-pane fade">
                                        <img src="assets/images/product/quickview-l2.jpg" alt="">
                                    </div>
                                    <div id="pro-3" class="tab-pane fade">
                                        <img src="assets/images/product/quickview-l3.jpg" alt="">
                                    </div>
                                    <div id="pro-4" class="tab-pane fade">
                                        <img src="assets/images/product/quickview-l2.jpg" alt="">
                                    </div>
                                </div>
                                <!-- Thumbnail Large Image End -->
                                <!-- Thumbnail Image End -->
                                <div class="quickview-wrap mt-15">
                                    <div class="quickview-slide-active owl-carousel nav nav-style-2" role="tablist">
                                        <a class="active" data-bs-toggle="tab" href="#pro-1"><img src="assets/images/product/quickview-s1.jpg" alt=""></a>
                                        <a data-bs-toggle="tab" href="#pro-2"><img src="assets/images/product/quickview-s2.jpg" alt=""></a>
                                        <a data-bs-toggle="tab" href="#pro-3"><img src="assets/images/product/quickview-s3.jpg" alt=""></a>
                                        <a data-bs-toggle="tab" href="#pro-4"><img src="assets/images/product/quickview-s4.jpg" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 col-sm-12 col-xs-12">
                                <div class="product-details-content quickview-content">
                                    <span>Life Style</span>
                                    <h2>LaaVista Depro, FX 829 v1</h2>
                                    <div class="product-ratting-review">
                                        <div class="product-ratting">
                                            <i class="la la-star"></i>
                                            <i class="la la-star"></i>
                                            <i class="la la-star"></i>
                                            <i class="la la-star"></i>
                                            <i class="la la-star-half-o"></i>
                                        </div>
                                        <div class="product-review">
                                            <span>40+ Reviews</span>
                                        </div>
                                    </div>
                                    <div class="pro-details-color-wrap">
                                        <span>Color:</span>
                                        <div class="pro-details-color-content">
                                            <ul>
                                                <li class="green"></li>
                                                <li class="yellow"></li>
                                                <li class="red"></li>
                                                <li class="blue"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="pro-details-size">
                                        <span>Size:</span>
                                        <div class="pro-details-size-content">
                                            <ul>
                                                <li><a href="#">s</a></li>
                                                <li><a href="#">m</a></li>
                                                <li><a href="#">xl</a></li>
                                                <li><a href="#">xxl</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="pro-details-price-wrap">
                                        <div class="product-price">
                                            <span>$210.00</span>
                                            <span class="old">$230.00</span>
                                        </div>
                                        <div class="dec-rang"><span>- 30%</span></div>
                                    </div>
                                    <div class="pro-details-quality">
                                        <div class="cart-plus-minus">
                                            <input class="cart-plus-minus-box" type="text" name="qtybutton" value="02">
                                        </div>
                                    </div>
                                    <div class="pro-details-compare-wishlist">
                                        <div class="pro-details-compare">
                                            <a title="Add To Compare" href="#"><i class="la la-retweet"></i> Compare</a>
                                        </div>
                                        <div class="pro-details-wishlist">
                                            <a title="Add To Wishlist" href="#"><i class="la la-heart-o"></i> Add to wish list</a>
                                        </div>
                                    </div>
                                    <div class="pro-details-buy-now btn-hover btn-hover-radious">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal end -->
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
    <script src="assets/js/vendor/pagination.min.js"></script>

    <!-- izToast js -->
    <script src="assets/js/plugins/iziToast/dist/js/iziToast.min.js"></script>
    <!-- notiflix js -->
    <script src="assets/js/plugins/notiflix/dist/notiflix-3.2.7.min.js"></script>
    <!-- Main JS -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/utility/notifications.js"></script>
    <script src="assets/js/pageScripts/navbar-scripts.js"></script>
    <script src="assets/js/pageScripts/shop.js"></script>
</body>

</html>