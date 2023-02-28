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
