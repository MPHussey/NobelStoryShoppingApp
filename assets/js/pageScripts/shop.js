$(document).ready(function(){
    if(!window.localStorage.getItem('pageNumber')){
        window.localStorage.setItem('pageNumber','1');
    }

    if(!window.localStorage.getItem('sortBy')){
        window.localStorage.setItem('sortBy','all');
    }

    if(!window.localStorage.getItem('category')){
        window.localStorage.setItem('category','category');
    }
    
    //get all categories
    getAllCatgories()
    //check url hash
    checkUrlHash();
    // onload get all products
    //getAllProducts();
    //default set the page items to 1


    //events
    $('.sort-by-val').on('change',updateSortBy);
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
            var template=`<li><a data-category="all">All</a></li>`;
            if(response.success==true){
                response.data.forEach((category,index)=>{
                    template+=`<li><a data-category="${category.product_category}">${category.product_category}</a></li>`;
                });
            }

            $('#product-category').html(template);
        }
    })
}
function checkPageNumber(){
    
}

function updateSortBy(){
    var sortValue=$(this).val();
    var subStringPatterens=['\\+all', '\\+asc', '\\+desc'];
    var regexPattern = new RegExp(subStringPatterens.join('|'), 'gi');
    var currentHash=window.location.hash;
    var replacedValue=currentHash.replace(regexPattern,"");
    console.log(currentHash);
    window.location.hash=replacedValue+'+'+sortValue;

}
function getAllProducts(){
    $('#pagination-container').pagination({
        dataSource:function(done){
            $.ajax({
                type:"POST",
                url:apiLink,
                data:{
                    action:"productsShopPage",
                },
                success:function(response){
                    done(response.data);
                }
            })
        },
        pageSize: 4,
        pageNumber:1,
        callback: function(data, pagination) {
            console.log(data);
            var template="";
            data.forEach((eachItem,index)=>{
                console.log(eachItem);
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
    // $('#pagination-container').pagination({
    //     dataSource:function(done){
    //         $.ajax({
    //             type:"POST",
    //             url:apiLink,
    //             data:{
    //                 action:"productsShopPage",
    //                 itemsPerPage:2,
    //                 pageNumber:1
    //             },
    //             success:function(response){
    //                 console.log(response);
    //                 done(response.data);
    //             },
    //             error: function(xhr, status, error) {
    //                 console.error("Error: " + error);
    //             }
    //         });
    //     }
    // });
}