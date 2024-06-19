$(".modal-open").click(function(){

   $(".modal").fadeIn(200);
   $('body,html').css('overflow-y', 'hidden');
   return false;
});

$(".modal-close").click(function(){
   $('.modal').fadeOut(200);
   $('body,html').css('overflow-y', 'visible');
   return false;
})


jQuery('a[href^="#"]').on('click', function(){

   var header = jQuery('header').innerHeight();
   var id = jQuery(this).attr("href");
   var position = 0;
   if (id != '#'){
     var position = jQuery(id).offset().top - header;
   }
   jQuery('html, body').animate({
     scrollTop: position
   },
   300)
 });


   var image = document.getElementsByClassName('insert');
   new simpleParallax(image,{
     scale: 1.5,
     orientation: 'down right'
  });




//formの入力確認
let $submit = $('#js-submit')
$submit.prop("disabled", true);
$('form input, form textarea').on('change', function(){
      if($('form input:required').val() !== "" &&
        $('form textarea').val() !== "" &&
        $('form input[name="agree"]').prop('checked') === true
        ){
            $submit.prop('disabled',false)
            // $submit.addClass('-active')
        } else{
            $submit.prop('disabled',true)
            // $submit.removeClass('-active')
        }
})

