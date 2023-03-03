// Contador em JQuery, deve - se colocar a classe .contagem ao elemento que deve ser contado

$(".contagem").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2500,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

$(document).on("ready", function () {
  $(".aboutNotice--container").slick({
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".aboutNotice--content").css("display", "flex");
});

AOS.init();
