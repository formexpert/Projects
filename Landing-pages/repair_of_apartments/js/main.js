/* Гео-Карта */
var footer = $('.footer');
var windowTop = footer.offset().top;
$(window).bind('scroll', function () {
  var footerTop = $(this).scrollTop();
  if (windowTop > footerTop) {
    console.log('Работает!');
    $('#map').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A98d84215acfdf5008eb1b5b1d0fc3c25e7303ef274b6c66277a9df4f31d88367&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=fulse"> </script>');
    $(window).unbind('scroll')
  }
});

$(document).ready(function () {
  (new WOW).init(),

    $("#brif-form").validate({
      rules: {
        form_name: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        form_phone: {
          required: true
        },
        form_email: {
          required: true,
          email: true
        }
      },
      messages: {
        form_name: {
          required: "* Обязательно поле",
          minlength: jQuery.validator.format("Минимум {0} символа"),
          maxlength: jQuery.validator.format("Максимум {0} символов")
        },
        form_phone: {
          required: "* Обязательно поле"
        },
        form_email: {
          required: "* Обязательно поле",
          email: "Введите корректный Email"
        }
      }
    }),

    $("#offer-form").validate({
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

    $(".input-phone").mask("8 (999) 999-99-99"),

    $(".slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(".arrows__left"),
      nextArrow: $(".arrows__right"),
      responsive: [{
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },]
    })

  $(document).ready(function () {
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');
    button.on('click', function () {
      modal.addClass('modal_active')
    });
    close.on('click', function () {
      modal.removeClass('modal_active')
    })
  });

  $(document).ready(function () {
    var link = $('.card__link');
    var modal = $('#modal');
    var close = $('#close');
    link.on('click', function () {
      modal.addClass('modal_active');
      return false
    });
    close.on('click', function () {
      modal.removeClass('modal_active');
    })
  });
});