$(function () {

    var fullpageOption = {
        anchors: [
            'Main',
            'Portfolio01',
            'Portfolio02',
            'Portfolio03',
            'Portfolio04',
            'Portfolio05',
            'Profile'
        ],
        onLeave: function (origin, destination, direction) {
            console.log(origin, destination, direction);
            $('.gnb li')
                .eq(destination - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');

            $('.section')
                .eq(destination - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
        },
        afterRender: function () {
            $('.gnb li')
                .eq(0)
                .addClass('on');

            $('.section')
                .eq(0)
                .addClass('on');
        }
    }
    $('.Main').fullpage(fullpageOption);

    $('.Mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.Header').toggleClass('on');
        $('.Cover').slideToggle();
    });

    $('.Cover li').on('click', function () {
        $('.Mopen').removeClass('on');
        $('.Cover').slideUp();
    });

    $('.Cover').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
})
