$('#send').on('click', sendMessage);

function sendMessage () {
    let messageText = $('.text-box textarea').val();
    if (messageText) {
        $('.chatbox').append('<div class="my-bubble bubble">' + messageText + '</div>');
        $('.text-box textarea').val('');
    }
}