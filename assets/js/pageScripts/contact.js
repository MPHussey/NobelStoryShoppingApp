$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    getInTouchSubmit.call(this, e);
  });
});

function getInTouchSubmit(e) {
    Notiflix.Loading.init({
        svgColor: "#ffffff",
      });
      Notiflix.Loading.pulse();
  e.preventDefault();
  var formData=new FormData(this);
  formData.append('action','getInTouch');
//   for(let [key,value] of formData.entries()){
//     console.log(key,value);
//   }
$.ajax({
    type:"POST",
    url:apiLink,
    data:formData,
    contentType:false,
    processData:false,
    success:function(response){
        console.log(response);
        Notiflix.Loading.remove();
        if(response.success==true){
            $('#contact-form')[0].reset();
            iziToast.success({
                title: "Email",
                message: "Email Sent !! We will contact you shortly. \nThank you",
                position: "center",
                zindex: 2000,
                overlay: true, 
                timeout: 3000,
              });
        }else{
            iziToast.warning({
                title: "Caution",
                message: "Try again.",
                position: "center",
                zindex: 2000,
                overlay: true,
                timeout: 3000,
              });  
        }

    }

})

}
