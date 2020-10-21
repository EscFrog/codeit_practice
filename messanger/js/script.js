$('#send').on('click', sendMessage);

function sendMessage () {
    let messageText = $('.text-box textarea').val();
    if (messageText) {
        console.log(messageText);
        $('.chatbox').append('<div class="my-bubble bubble"></div>');
    }
}