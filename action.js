      //for contact background
      jQuery('.item-addres-country').hide();
      function addBoxBg(){
          var arrItem = [];
          var count = 0;
          var bg_country = jQuery('.item-country.active').data('forBgCountry');
          jQuery('.item-country').each(function(){
              var bgItem = jQuery(this).data('forBgCountry');
              arrItem[count++] = bgItem;
              jQuery('.content-body-contact').prepend('<div class="contact-bg-active" data-for-bg="'+bgItem+'" style="background-image: url('+ bgItem +');">&nbsp;</div>')
          })
          opacityBG(bg_country);
      }
      addBoxBg();
      function animateStaff(staffPhoto){
          jQuery('.directly-link').removeClass('active');
          var timerOut = 1000;
          if(jQuery('.phone-img-box').hasClass('toggle-animate')){
              var timerOut = 0;
          }
          var fTime = 400;
          var countStaff = 1;
          console.log(staffPhoto.length);
              setTimeout(function () {
                  jQuery(staffPhoto).each(function () {
                      jQuery(this).delay(fTime).animate({opacity: '1'}, 800);
                      jQuery('.phone-img-box').addClass('toggle-animate');
                      fTime += 200;
                      if(staffPhoto.length == countStaff++){
                          setTimeout(function(){
                              jQuery('.directly-link').addClass('active');
                          }, fTime);
                      }
                  });
              }, timerOut);
      }

      function opacityBG(bg_country, stopHover){
          //var bg_country = jQuery('.item-country.active').data('forBgCountry');
          jQuery('.contact-bg-active').stop();
          var time = 0;
          if(jQuery('.item-country').hasClass('stop-animate')) time = 200;
          setTimeout(function(){
              jQuery('.contact-bg-active').not('.contact-bg-active[data-for-bg="' + bg_country + '"]').animate({opacity: '0'}, 800);
          }, time);
          setTimeout(function(){
              jQuery('.contact-bg-active').css('z-index', '0'),
                  jQuery('.contact-bg-active[data-for-bg="'+ bg_country +'"]').css('z-index', '5').animate({ 'opacity': '1'}, 500)
          }, time+300);
          if(stopHover == true) return;
      }
      //opacityBG();
      jQuery('.item-country p').mouseenter(function() {
          if( jQuery(this).parent().hasClass('active')) return;
          if( jQuery(this).parent().hasClass('stop-animate')) return;
          jQuery('.item-country').removeClass('active')
          jQuery(this).parent().addClass('active');
          var bg_country = jQuery('.item-country.active').data('forBgCountry');
          opacityBG(bg_country);
         });
      jQuery('.item-country p').click(function(){
          jQuery('.item-country').removeClass('view-contact');
          jQuery(this).parent().addClass('view-contact');
          opacityBG(jQuery(this).parent().data('forBgCountry'), true);
          var showBlock = jQuery(this).parent().data('forItemAddres');
          jQuery('.item-addres-country, .item-staff-country').hide();
          jQuery('.item-staff-img').css('opacity','0');
          jQuery('div[data-item-addres="'+ showBlock +'"]').show();
          animateStaff( jQuery('div[data-item-addres="'+ showBlock +'"] .item-staff-img'));
          if(jQuery(this).parent().hasClass('stop-animate')) return;
          var heightItem = jQuery('.item-country').height();

          jQuery('.all-country').addClass('small-block-active');
          jQuery('.container-contact').addClass('contact-active');
          jQuery('.item-country:odd').animate({marginTop: heightItem + 'px'}, 500)
              .animate({left: '-50%'}, 500, function(){
              jQuery('.item-country:odd').removeAttr('style');
          jQuery('.item-country').css('width','100%').addClass('stop-animate');
                  setTimeout(function(){
                      jQuery('.item-country').addClass('animate-left');
                  }, 250)

             });

      })
