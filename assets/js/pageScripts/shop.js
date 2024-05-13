//price ranger
var sliderrange = $('#slider-range');
var amountprice = $('#amount');
var global_maxPrice;
$(document).ready(function(){
    //get price ranges
    
    if(!window.localStorage.getItem('pageNumber')){
        window.localStorage.setItem('pageNumber','1');
    }

    if(!window.localStorage.getItem('sortBy')){
        window.localStorage.setItem('sortBy','default');
    }

    if(!window.localStorage.getItem('category')){
        window.localStorage.setItem('category','all');
    }

    if(!window.localStorage.getItem('valueLow')){
        window.localStorage.setItem('valueLow','0');
    }

    if(!window.localStorage.getItem('valueHigh')){
        window.localStorage.setItem('valueHigh','0');
    }

    getPriceRange();
    
    //get all categories
    getAllCatgories();
    //check url hash
    //checkUrlHash();
    // onload get all products
    getAllProducts();
    //default set the page items to 1


    /*---EVENTS---*/

    //sortby event
    $('.sort-by-val').on('change',updateSortBy);
    //shop by category
    $('#product-category').on('click','.shop-category-list',shopCategory);
});


//get all categories function
function getAllCatgories(){
    $.ajax({
        type:"POST",
        url:apiLink,
        data:{
            action:"categories"
        },
        success:function(response){
            console.log(response);
            var template=`<li><a class="shop-category-list" data-category="all">All</a></li>`;
            if(response.success==true){
                response.data.forEach((category,index)=>{
                    template+=`<li><a class="shop-category-list" data-category="${category.product_category}">${category.product_category}</a></li>`;
                });
            }

            $('#product-category').html(template);
        }
    })
}

function updateSortBy(){
    var sortValue=$(this).val();
    localStorage.setItem('sortBy',sortValue);
    console.log(sortValue);
    //update product view
    getAllProducts();
    
}
function getAllProducts(){
    var sortBy=localStorage.getItem('sortBy');
    var category=localStorage.getItem('category');
    console.log(sortBy);
    $('#pagination-container').pagination({
        dataSource:function(done){
            $.ajax({
                type:"POST",
                url:apiLink,
                data:{
                    action:"productsShopPage",
                    sortby:sortBy,
                    category:category
                },
                success:function(response){
                    done(response.data);
                }
            })
        },
        pageSize: 4,
        pageNumber:1,
        callback: function(data, pagination) {
            //console.log(data);
            var template="";
            data.forEach((eachItem,index)=>{
                //console.log(eachItem);
                template+=`<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div class="product-wrap mb-35">
                    <div class="product-img mb-15">
                        <a href="product-details.html"><img src="${imageBaseUrl + eachItem.images[0].image_url}" alt="product"></a>
                        ${eachItem.product_quantity==0 ?`<span class="new-stock"><span>Stock <br>Out</span></span>`:``}
                    </div>
                    <div class="product-content">
                        <span>${eachItem.product_category}</span>
                        <h4><a>${eachItem.product_name}</a></h4>
                        <div class="price-addtocart">
                            <div class="product-price">
                                <span>Rs ${eachItem.product_price}</span>
                            </div>
                            <div class="product-addtocart">
                                <a title="Add To Cart" href="#">+ Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            });

            $('#items-template').html(template);
            // template method of yourself
            // var html = template(data);
            // dataContainer.html(html);
        }
    })
}



//get min and max prices for the price ranger
function getPriceRange(){
    $.ajax({
        type:"POST",
        url:apiLink,
        data:{
            action:"minMaxPrice"
        },
        success:function(response){
            console.log(response);
            if(response.success==true){
                console.log(response.data[1].maxPrice);
                $('#display-price-range').text(`Range: $0 - $${response.data[1].maxPrice}`);
                global_maxPrice=response.data[1].maxPrice;
                priceRange(global_maxPrice,0,global_maxPrice)
            }
        }
    })
}
//price ranger
function priceRange(maxPrice,valueLow,valueHigh){

    var actualValueHigh=parseInt(JSON.parse(localStorage.getItem('valueHigh')))==0?parseInt(valueHigh):parseInt(JSON.parse(localStorage.getItem('valueHigh')));
    console.log(actualValueHigh);
    sliderrange.slider({
        range: true,
        min: 0,
        max: parseInt(maxPrice),
        values: [parseInt(valueLow),actualValueHigh],
        slide: function(event, ui) {
            amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    amountprice.val("$" + sliderrange.slider("values", 0) +
        " - $" + sliderrange.slider("values", 1));
}


function shopCategory(){
    var selectedCategory=$(this).data('category');
    localStorage.setItem('category',selectedCategory);
    getAllProducts();
}


