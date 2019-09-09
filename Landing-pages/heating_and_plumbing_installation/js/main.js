$(document).ready(function () {
  
  /* Бургер меню*/
  $(".gamburger__item").click(function () {
    if ($(".gamburger__item").attr('datas') == 'off') {
      $(".gamburger-list").attr('style', 'visibility: visible; margin-right: 0px;');
      $(".gamburger__item").attr('datas', 'on');
      $(".gamburger__item").removeClass("fa-bars");
      $(".gamburger__item").addClass("fa-times");
    } else {
      $(".gamburger-list").attr('style', 'visibility: hidden; margin-right: -1000px;');
      $(".gamburger__item").attr('datas', 'off');
      $(".gamburger__item").removeClass("fa-times");
      $(".gamburger__item").addClass("fa-bars");
    }
  });

  /* Модальное окно */
  var button = $('.modal-btn');
  var modal = $('#modal');
  var close = $('#close');
  button.on('click', function () {
    modal.addClass('modal_active');
    return false;
  });
  close.on('click', function () {
    modal.removeClass('modal_active');
  })

  /* Слайдер в главном блоке */
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    dots: true,
    arrows: false,
  });

  /* Второй слайдер в секции отзывы */
  $('.slider-two').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
    dots: true,
    arrows: false,
  });

  /* Плавный переход для якорных ссылок*/
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $("#navbar").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  
  /* WOW */
  (new WOW).init();

  /* Гео-Карта */
  var footer = $('.comments');
  var windowTop = footer.offset().top;
  $(window).bind('scroll', function () {
    var footerTop = $(this).scrollTop();
    if (windowTop > footerTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A02626a6ab06b96933618909ab9d4cda9b01b74336d738f189319e6c762347183&amp;width=100%25&amp;height=665&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind('scroll')
    }
  });

  /* Форма заявки */
  $("#footer_form").validate({
      rules: {
        user_name: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        user_phone: {
          required: true
        }
      },
      messages: {
        user_name: {
          required: "* Обязательно поле",
          minlength: jQuery.validator.format("Минимум {0} символа"),
          maxlength: jQuery.validator.format("Максимум {0} символов")
        },
        user_phone: {
          required: "* Обязательно поле"
        }
      }
    }),

    $(".input-phone").mask("8 (999) 999-99-99");
});