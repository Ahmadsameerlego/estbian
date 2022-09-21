let toggle_button = document.querySelector('.toggle_bar');
let nav_bar = document.querySelector('.navbar-nav')
toggle_button.addEventListener('click', ()=>{
    nav_bar.classList.toggle('active');
})


// document.querySelector('.button3').addEventListener('mouseover', (e)=>{
//     document.querySelector('header .dropdown').classList.add('active')
// })
// // document.querySelector('.button3').addEventListener('mouseleave', (e)=>{
// //     document.querySelector('header .dropdown').classList.remove('active')
// // })


function printDiv() 
{

var divToPrint=document.getElementById('printedArea');

var newWin=window.open('','Print-Window');

newWin.document.open();

newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

newWin.document.close();

setTimeout(function(){newWin.close();},10);

}


// image preview

// /// Upload Image
$(document).ready(function() {
    // ADD IMAGE
    $('.image-uploader').change(function (event){
      $(this).parents('.images-upload-block .upload-img').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close" type="button">&times;</button></div>');
  });

  // REMOVE IMAGE
  $('.images-upload-block').on('click', '.close',function (e){
      $(this).parents('.uploaded-block').remove();
      e.preventDefault()
  });


});

  
// fixed header
$(window).scroll(function(){
    if ($(window).scrollTop() >= 60) {
        $('.navbar').addClass('fixed-header');
    }
    else {
        $('.navbar').removeClass('fixed-header');
    }
});


