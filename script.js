$('.nav').click(function() {
	console.log("pegou clique");
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});

$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".menu").show();
    } else {
        $(".menu").hide();
    }
    this.previousTop = currentTop;
});