(function($){
  $(document).ready(function(){
      //for contact background
      $('.item-addres-country').hide();
      function addBoxBg(){
          var arrItem = [];
          var count = 0;
          var bg_country = $('.item-country.active').data('forBgCountry');
          $('.item-country').each(function(){
              var bgItem = $(this).data('forBgCountry');
              arrItem[count++] = bgItem;
              $('.content-body-contact').prepend('<div class="contact-bg-active" data-for-bg="'+bgItem+'" style="background-image: url('+ bgItem +');">&nbsp;</div>')
          })
          opacityBG(bg_country);
      }
      addBoxBg();
      function animateStaff(staffPhoto){
          $('.directly-link').removeClass('active');
          var timerOut = 1000;
          if($('.phone-img-box').hasClass('toggle-animate')){
              var timerOut = 0;
          }
          var fTime = 400;
          var countStaff = 1;
          console.log(staffPhoto.length);
              setTimeout(function () {
                  $(staffPhoto).each(function () {
                      $(this).delay(fTime).animate({opacity: '1'}, 800);
                      $('.phone-img-box').addClass('toggle-animate');
                      fTime += 200;
                      if(staffPhoto.length == countStaff++){
                          setTimeout(function(){
                              $('.directly-link').addClass('active');
                          }, fTime);
                      }
                  });
              }, timerOut);
      }

      function opacityBG(bg_country, stopHover){
          //var bg_country = $('.item-country.active').data('forBgCountry');
          $('.contact-bg-active').stop();
          var time = 0;
          if($('.item-country').hasClass('stop-animate')) time = 200;
          setTimeout(function(){
              $('.contact-bg-active').not('.contact-bg-active[data-for-bg="' + bg_country + '"]').animate({opacity: '0'}, 800);
          }, time);
          setTimeout(function(){
              $('.contact-bg-active').css('z-index', '0'),
                  $('.contact-bg-active[data-for-bg="'+ bg_country +'"]').css('z-index', '5').animate({ 'opacity': '1'}, 500)
          }, time+300);
          if(stopHover == true) return;
      }
      //opacityBG();
      $('.item-country p').mouseenter(function() {
          if( $(this).parent().hasClass('active')) return;
          if( $(this).parent().hasClass('stop-animate')) return;
          $('.item-country').removeClass('active')
          $(this).parent().addClass('active');
          var bg_country = $('.item-country.active').data('forBgCountry');
          opacityBG(bg_country);
         });
      $('.item-country p').click(function(){
          $('.item-country').removeClass('view-contact');
          $(this).parent().addClass('view-contact');
          opacityBG($(this).parent().data('forBgCountry'), true);
          var showBlock = $(this).parent().data('forItemAddres');
          $('.item-addres-country, .item-staff-country').hide();
          $('.item-staff-img').css('opacity','0');
          $('div[data-item-addres="'+ showBlock +'"]').show();
          animateStaff( $('div[data-item-addres="'+ showBlock +'"] .item-staff-img'));
          if($(this).parent().hasClass('stop-animate')) return;
          var heightItem = $('.item-country').height();

          $('.all-country').addClass('small-block-active');
          $('.container-contact').addClass('contact-active');
          $('.item-country:odd').animate({marginTop: heightItem + 'px'}, 500)
              .animate({left: '-50%'}, 500, function(){
              $('.item-country:odd').removeAttr('style');
          $('.item-country').css('width','100%').addClass('stop-animate');
                  setTimeout(function(){
                      $('.item-country').addClass('animate-left');
                  }, 250)

             });

      })
  })
})(jQuery);    
