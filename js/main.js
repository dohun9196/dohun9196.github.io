$(function () {

    $('.Main').fullpage({
        anchors: [
            'Main01',
            'Main02',
            'Main03',
            'Main04',
            'Main05'
        ],
    });

    $('.Mopen').on('click', function () {
        $(this).toggleClass('on');
    })
})