(function ($) {
    if (!$) return;

    $(function () {
        $('#myCarousel').carousel();

        $('#fb1').hover(function () {
            this.src = '../assets/img/facebook_color.png';
        }, function () {
            this.src = '../assets/img/facebook_black.png';
        });

        $('#tw').hover(function () {
            this.src = '../assets/img/twitter.png';
        }, function () {
            this.src = '../assets/img/twitter_black.png';
        });

        $('#ins').hover(function () {
            this.src = '../assets/img/instragam_color.png';
        }, function () {
            this.src = '../assets/img/instagram_black.png';
        });
    });
})(window.jQuery);
