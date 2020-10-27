$('#even-btn').on('click', function() {
    $('.card').each(function() {
        $(this).removeClass('selected');
        if ( parseInt($(this).text()) % 2 === 0 ) {
            $(this).addClass('selected');
        }
    });
});

$('#odd-btn').on('click', function() {
    $('.card').each(function() {
        $(this).removeClass('selected');
        if ( parseInt($(this).text()) % 2 === 1 ) {
            $(this).addClass('selected');
        }
    });
});

// function evenCheck() {
//     $('.card').each(function() {
//         $(this).removeClass('selected');
//         if ( parseInt($(this).text()) % 2 === 0 ) {
//             $(this).addClass('selected');
//         }
//     });
// }

// function oddCheck() {
//     $('.card').each(function() {
//         $(this).removeClass('selected');
//         if ( parseInt($(this).text()) % 2 === 1 ) {
//             $(this).addClass('selected');
//         }
//     });
// }